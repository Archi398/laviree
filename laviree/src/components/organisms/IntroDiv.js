import React, { useEffect, useRef } from 'react';
import ThreeDTitle from '../molecules/ThreeDTitle';
import ScrollDown from '../atoms/ScrollDown';

const IntroDiv = () => {
  const canvasRef = useRef(null);
  const titleRef = useRef(null);
  const dpr = Math.max(1, 0.5 * window.devicePixelRatio);

  useEffect(() => {
    const canvas = canvasRef.current;
    const shaderSource = `#version 300 es
    /*********
    * made by Matthias Hurrle (@atzedent)
    */   
    precision highp float;
    out vec4 O;
    uniform float time;
    uniform vec2 resolution;
    #define FC gl_FragCoord.xy
    #define R resolution
    #define T time
    #define hue(a) (.6+.6*cos(6.3*(a)+vec3(0,83,21)))
    float rnd(float a) {
      vec2 p=fract(a*vec2(12.9898,78.233));	p+=dot(p,p*345.);
      return fract(p.x*p.y);
    }
    vec3 pattern(vec2 uv) {
      vec3 col=vec3(0);
      for (float i=.0; i++<20.;) {
        float a=rnd(i);
        vec2 n=vec2(a,fract(a*34.56)), p=sin(n*(T+7.)+T*.5);
        float d=dot(uv-p,uv-p);
        col+=.00125/d*hue(dot(uv,uv)+i*.125+T);
      }
      return col;
    }
    void main(void) {
      vec2 uv=(FC-.5*R)/min(R.x,R.y);
      vec3 col=vec3(0);
      float s=2.4,
      a=atan(uv.x,uv.y),
      b=length(uv);
      uv=vec2(a*5./6.28318,.05/tan(b)+T);
      uv=fract(uv)-.5;
      col+=pattern(uv*s);
      O=vec4(col,1);
    }`;

    class Renderer {
      #vertexSrc = `#version 300 es
      precision highp float;
      in vec4 position;
      void main() {
        gl_Position = position;
      }`;

      #vertices = [-1, 1, -1, -1, 1, 1, 1, -1];

      constructor(canvas, scale) {
        this.canvas = canvas;
        this.scale = scale;
        this.gl = canvas.getContext('webgl2');
        this.gl.viewport(0, 0, canvas.width * scale, canvas.height * scale);
        this.shaderSource = shaderSource;
        this.mouseCoords = [0, 0];
        this.pointerCoords = [0, 0];
        this.nbrOfPointers = 0;
      }

      updateShader(source) {
        this.reset();
        this.shaderSource = source;
        this.setup();
        this.init();
      }

      updateScale(scale) {
        this.scale = scale;
        this.gl.viewport(0, 0, this.canvas.width * scale, this.canvas.height * scale);
      }

      compile(shader, source) {
        const gl = this.gl;
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          console.error(gl.getShaderInfoLog(shader));
          this.canvas.dispatchEvent(new CustomEvent('shader-error', { detail: gl.getShaderInfoLog(shader) }));
        }
      }

      test(source) {
        const gl = this.gl;
        const shader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        let result = null;
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          result = gl.getShaderInfoLog(shader);
        }
        gl.deleteShader(shader);
        return result;
      }

      reset() {
        const { gl, program, vs, fs } = this;
        if (!program || gl.getProgramParameter(program, gl.DELETE_STATUS)) return;
        if (!gl.getShaderParameter(vs, gl.DELETE_STATUS)) {
          gl.detachShader(program, vs);
          gl.deleteShader(vs);
        }
        if (!gl.getShaderParameter(fs, gl.DELETE_STATUS)) {
          gl.detachShader(program, fs);
          gl.deleteShader(fs);
        }
        gl.deleteProgram(program);
      }

      setup() {
        const gl = this.gl;
        this.vs = gl.createShader(gl.VERTEX_SHADER);
        this.fs = gl.createShader(gl.FRAGMENT_SHADER);
        this.compile(this.vs, this.#vertexSrc);
        this.compile(this.fs, this.shaderSource);
        this.program = gl.createProgram();
        gl.attachShader(this.program, this.vs);
        gl.attachShader(this.program, this.fs);
        gl.linkProgram(this.program);
        if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
          console.error(gl.getProgramInfoLog(this.program));
        }
      }

      init() {
        const gl = this.gl;
        this.buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.#vertices), gl.STATIC_DRAW);
        const position = gl.getAttribLocation(this.program, 'position');
        gl.enableVertexAttribArray(position);
        gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
        this.program.resolution = gl.getUniformLocation(this.program, 'resolution');
        this.program.time = gl.getUniformLocation(this.program, 'time');
      }

      render(now = 0) {
        const gl = this.gl;
        const program = this.program;
        const canvas = this.canvas;

        if (!program || gl.getProgramParameter(program, gl.DELETE_STATUS)) return;
        gl.clearColor(0, 0, 0, 1);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(program);
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.uniform2f(program.resolution, canvas.width, canvas.height);
        gl.uniform1f(program.time, now * 1e-3);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      }
    }

    const resize = () => {
      const { innerWidth: width, innerHeight: height } = window;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      if (renderer) {
        renderer.updateScale(dpr);
      }
    };

    const renderer = new Renderer(canvas, dpr);
    renderer.setup();
    renderer.init();
    resize();
    if (renderer.test(shaderSource) === null) {
      renderer.updateShader(shaderSource);
    }
    window.onresize = resize;

    let animationFrameId;

    const loop = (now) => {
      renderer.render(now);
      animationFrameId = requestAnimationFrame(loop);
    };
    loop(0);

    return () => {
      window.onresize = null;
      cancelAnimationFrame(animationFrameId);
    };
  }, [dpr]);

  return (
    <div>
      <canvas
        ref={canvasRef}
        className="background-canvas"
      />
      <div
        ref={titleRef}
        className="title-container"
      >
        <ThreeDTitle />
        <ScrollDown />
      </div>
    </div>
  );
};

export default IntroDiv;
