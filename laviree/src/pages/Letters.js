import React, { useEffect, useRef } from 'react';
import Vector from 'vectory-lib';
import "../style/Letters.css";
import ScrollDown from '../components/atoms/ScrollDown';

const config = {
  text: "La Virée",
  widthToSpikeLengthRatio: 0.054
};

const colorConfig = {
  particleOpacity: 0.2,
  baseHue: 125,
  hueRange: 9,
  hueSpeed: 0.04,
  colorSaturation: 100,
};

class Planet {
  constructor(x, y, g) {
    this.pos = new Vector(x, y);
    this.g = g;
    // Random initial velocity
    const angle = Math.random() * Math.PI * 2;
    const speed = 6; // Set a constant speed
    this.vel = new Vector(Math.cos(angle) * speed, Math.sin(angle) * speed);
  }

  update() {
    // Update position based on velocity
    this.pos.addTo(this.vel);
    // Bounce off the walls
    if (this.pos.x < 0 || this.pos.x > window.innerWidth) {
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 || this.pos.y > window.innerHeight) {
      this.vel.y *= -1;
    }
  }

  draw(ctx) {
    ctx.fillStyle = "#AAA";
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, 8, 0, Math.PI * 2);
    ctx.fill();
  }
}

class Particle {
  constructor(x, y, spikeLength) {
    this.pos = new Vector(x, y);
    this.vel = new Vector(0, spikeLength);
  }

  move(force, spikeLength) {
    if (force) {
      this.vel.addTo(force);
    }
    if (this.vel.getLength() > spikeLength) {
      this.vel.setLength(spikeLength);
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.pos.x, this.pos.y);
    let p2 = this.pos.add(this.vel);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
  }
}

const Letters = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  let w, h;
  let hue;
  let particles;
  let spikeLength;
  let planets;
  let tick;
  let animationFrameId;

  useEffect(() => {
    const canvas = canvasRef.current;
    ctxRef.current = canvas.getContext("2d");
    setup();
    window.addEventListener("resize", reset);
    canvas.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("resize", reset);
      canvas.removeEventListener("mousemove", mousemove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const setup = () => {
    tick = 0;
    planets = [];
    let len = 8;
    for (let i = 0; i < len; i++) {
      let p = new Planet(50 + i * 100, 340, i ? 1000 : 4000);
      planets.push(p);
    }
    reset();
    animationFrameId = requestAnimationFrame(draw);
  };

  const reset = () => {
    hue = colorConfig.baseHue;
    w = canvasRef.current.width = window.innerWidth;
    h = canvasRef.current.height = window.innerHeight;
    spikeLength = w * config.widthToSpikeLengthRatio;
    drawText();
  };

  const mousemove = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    planets[0].pos.x = x;
    planets[0].pos.y = y;
  };

  const draw = (now) => {
    clear();
    animationFrameId = requestAnimationFrame(draw);
    updateParticles();
    updatePlanets();
    tick = now / 50;
  };

  const clear = () => {
    ctxRef.current.clearRect(0, 0, w, h);
  };

  const drawText = () => {
    const ctx = ctxRef.current;
    ctx.save();
    let fontSize = w * 0.2;
    ctx.font = `bold ${fontSize}px Arial, Helvetica, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.lineWidth = 1;
    ctx.strokeStyle = "white";
    ctx.strokeText(config.text, w / 2, h / 2);
    ctx.restore();
    let imageData = ctx.getImageData(0, 0, w, h);

    particles = [];

    for (let x = 0; x < w; x++) {
      for (let y = 0; y < h; y++) {
        let i = (x + w * y) * 4;
        let average = (imageData.data[i] +
                       imageData.data[i + 1] +
                       imageData.data[i + 2] +
                       imageData.data[i + 3]) / 4;
        if (average > 200) {
          let particle = new Particle(x, y, spikeLength);
          particles.push(particle);
        }
      }
    }
    clear();
  };

  const updatePlanets = () => {
    const ctx = ctxRef.current;
    planets.forEach(planet => {
      planet.update();
      planet.draw(ctx);
    });
  };

  const updateParticles = () => {
    const ctx = ctxRef.current;
    hue += colorConfig.hueSpeed;
    let h = Math.sin(hue) * colorConfig.hueRange + colorConfig.baseHue;
    ctx.strokeStyle = `hsla(${h}, ${colorConfig.colorSaturation}%, 50%, ${colorConfig.particleOpacity})`;
    particles.forEach(p => {
      planets.forEach(planet => {
        let d = p.pos.sub(planet.pos);
        let length = d.getLength();
        let g = planet.g / length;
        if (g > 40) {
          g = 40;
        }
        d.setLength(g);
        p.move(d, spikeLength);
      });
      p.draw(ctx);
    });
  };

  return (
    <div className="letters-container">
      <canvas className="letters-canvas" ref={canvasRef}></canvas>
      <ScrollDown />
    </div>
  );
};

export default Letters;
