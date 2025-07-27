import { useRef, useEffect } from "react";
import p5 from "p5";

export default function CloudySky() {
  const canvasRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let cloudParticles = [];
      let textureGraphics;

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasRef.current);
        p.noStroke();

        textureGraphics = p.createGraphics(p.windowWidth, p.windowHeight);
        generateBrushTexture(textureGraphics, p);

        for (let i = 0; i < 35; i++) {
          cloudParticles.push(new CloudParticle(p));
        }

        // if (onReady) onReady();
      };

      p.draw = () => {
        setGradient(0, 0, p.width, p.height, p.color("#00B4D8"), p.color("#ADE8F4"), p);
        for (let cp of cloudParticles) {
          cp.update();
          cp.display();
        }
        p.tint(255, 40);
        p.image(textureGraphics, 0, 0, p.width, p.height);
      };

      class CloudParticle {
        constructor(p) {
          this.p = p;
          this.reset();
        }

        reset() {
          this.x = this.p.random(this.p.width);
          this.y = this.p.random(this.p.height / 2);
          this.size = this.p.random(120, 240);
          this.opacity = this.p.random(20, 60);
          this.speed = this.p.random(0.05, 0.2);
        }

        update() {
          this.x += this.speed;
          if (this.x - this.size > this.p.width) {
            this.reset();
            this.x = -this.size;
          }
        }

        display() {
          this.p.noStroke();
          this.p.fill(255, this.opacity);
          this.p.ellipse(this.x, this.y, this.size * 1.2, this.size * 0.7);
          this.p.ellipse(this.x + this.size * 0.4, this.y + this.size * 0.1, this.size, this.size * 0.6);
          this.p.ellipse(this.x - this.size * 0.4, this.y + this.size * 0.1, this.size * 0.8, this.size * 0.5);
        }
      }

      function generateBrushTexture(gfx, p) {
        gfx.noStroke();
        for (let i = 0; i < gfx.width; i++) {
          for (let j = 0; j < gfx.height; j++) {
            const noiseVal = p.noise(i * 0.01, j * 0.01);
            const alpha = p.map(noiseVal, 0.45, 0.55, 0, 30, true);
            gfx.fill(255, alpha);
            gfx.rect(i, j, 1, 1);
          }
        }
      }

      function setGradient(x, y, w, h, c1, c2, p) {
        p.noFill();
        for (let i = y; i <= y + h; i++) {
          let inter = p.map(i, y, y + h, 0, 1);
          let c = p.lerpColor(c1, c2, inter);
          p.stroke(c);
          p.line(x, i, x + w, i);
        }
      }
    };

    const canvas = new p5(sketch);

    return () => canvas.remove(); // Clean up
  }, []);

  return (
    <div
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
