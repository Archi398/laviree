import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const ItemList = () => {
  const canvasRef = useRef(null);
  const watermarkWrapRef = useRef(null);
  const watermarkTextRef = useRef(null);
  const wrapRef = useRef(null);
  const dpr = Math.max(1, 0.5 * window.devicePixelRatio);

  const debounce = (func, timeout = 300) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const watermarkWrap = watermarkWrapRef.current;
    const watermarkText = watermarkTextRef.current;

    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const images = [
      { src: '/img/artists/1.png', link: 'https://www.instagram.com/laviree_festival/p/Ct1rfJFtmO0/?img_index=1' },
      { src: '/img/artists/2.png', link: 'https://www.instagram.com/laviree_festival/p/CtwhctVsJUE/?img_index=1' },
      { src: '/img/artists/3.png', link: 'https://www.instagram.com/laviree_festival/p/CtjDqg1NAUv/?img_index=1' },
      { src: '/img/artists/4.png', link: 'https://www.instagram.com/laviree_festival/p/CtcI3bztisp/?img_index=1' },
      { src: '/img/artists/5.png', link: 'https://www.instagram.com/laviree_festival/p/CtXCLg5N4wX/?img_index=1' },
      { src: '/img/artists/6.png', link: 'https://www.instagram.com/laviree_festival/p/CtKXJ5CrgbM/?img_index=1' },
      { src: '/img/artists/7.png', link: 'https://www.instagram.com/laviree_festival/p/CtFGQmiNIuC/?img_index=1' },
    ];

    gsap.timeline({
      scrollTrigger: {
        trigger: watermarkWrap,
        start: 'top top',
        end: '+=600%',
        scrub: true,
        pin: true,
        pinSpacing: false
      },
      defaults: { ease: 'none' }
    }).fromTo(
      watermarkText,
      { x: '20%' },
      { x: '-60%' }
    );

    const st = ScrollTrigger.create({
      trigger: wrap,
      start: 'top top',
      end: '+=500%',
      pin: true
    });

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 1.75;
    camera.position.y = 0.3;
    camera.rotation.z = 2 * Math.PI * 0.01;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const textureLoader = new THREE.TextureLoader();
    const textures = images.map(image => textureLoader.load(image.src));

    const geometry = new THREE.PlaneGeometry(1, 0.75, 10, 10);
    const uOffset = new THREE.Vector2(0, 0);
    const items = [];

    for (let i = 0; i < textures.length; i++) {
      const mesh = new THREE.Mesh(
        geometry,
        new THREE.ShaderMaterial({
          uniforms: {
            uOffset: { value: uOffset },
            uTexture: { value: textures[i] },
            uAlpha: { value: 1.0 }
          },
          vertexShader: `
            float PI = 3.141592653589793;
            uniform vec2 uOffset;
            varying vec2 vUv;
            vec3 deformationCurve(vec3 position, vec2 uv) {
              position.x = position.x - (sin(uv.y * PI) * uOffset.x);
              return position;
            }
            void main() {
              vUv = uv;
              vec3 newPosition = deformationCurve(position, uv);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
            }
          `,
          fragmentShader: `
            uniform vec2 uOffset;
            uniform sampler2D uTexture;
            uniform float uAlpha;
            varying vec2 vUv;
            vec3 rgbShift(sampler2D textureImage, vec2 uv, vec2 offset) {
              vec2 rg = texture2D(textureImage, uv).rg;
              float b = texture2D(textureImage, uv + offset).b;
              return vec3(rg, b);
            }
            void main() {
              vec3 color = rgbShift(uTexture, vUv, uOffset);
              gl_FragColor = vec4(color, uAlpha);
            }
          `
        })
      );
      mesh.userData.link = images[i].link;
      items.push({ mesh, index: i });
      scene.add(mesh);
    }

    const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const updateMeshes = () => {
      const width = window.innerWidth < 768 ? 0.75 : 1; // Adjust width for mobile screens
      const wholeWidth = items.length * width;
      items.forEach((item) => {
        item.mesh.scale.set(width, width * 0.75, 1);
        item.mesh.position.x = ((width * item.index) - (st.progress * 10) + (42069 * wholeWidth)) % wholeWidth - 2 * width;
        item.mesh.rotation.y = 2 * Math.PI * 0.03;
      });
    };

    const render = () => {
      if (st.isActive) {
        uOffset.set(st.getVelocity() * 0.00002, 0);
      } else {
        uOffset.set(0, 0);
      }
      updateMeshes();
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);

    const resizeCanvas = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const handleResize = debounce(resizeCanvas, 300);

    window.addEventListener('resize', handleResize);

    const onClick = (event) => {
      const bounds = canvas.getBoundingClientRect();
      mouse.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      mouse.y = -((event.clientY - bounds.top) / bounds.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);

      const intersects = raycaster.intersectObjects(scene.children);
      if (intersects.length > 0) {
        const link = intersects[0].object.userData.link;
        if (link) {
          window.open(link, '_blank');
        }
      }
    };

    canvas.addEventListener('click', onClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('click', onClick);
    };
  }, [dpr]);

  return (
    <div ref={wrapRef} className="carousel-wrap">
      <canvas ref={canvasRef} className="carousel-canvas" />
      <div ref={watermarkWrapRef} className="watermark-wrap">
        <span ref={watermarkTextRef} className="watermark-text"></span>
      </div>
    </div>
  );
};

export default ItemList;
