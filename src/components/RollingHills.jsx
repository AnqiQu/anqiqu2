import { useEffect, useRef } from "react";
import p5 from "p5";

export default function RollingHills() {
  const canvasRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      let flowerPositions = [];

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight).parent(canvasRef.current);

        // Precompute static flower positions in bottom 25% of screen
        for (let i = 0; i < 80; i++) {
          flowerPositions.push({
            x: p.random(p.width),
            y: p.random(p.height * 0.75, p.height * 0.95),
            col: p.random(["#ffd670", "#e4c1f9", "#ffffff", "#ff99c8"]),
          });
        }

        // if (onReady) onReady();
      };

      p.draw = () => {
        p.background("#ADE8F4");
        const t = p.frameCount * 0.002;

        // Draw back and front hills
        drawHill(p, "#7DD181", 0.02, 500, t);
        drawHill(p, "#96E072", 0.03, 520, t + 100);

        // Animate flower positions to move with front hill
        const noiseScale = 0.03;
        const shift = t / noiseScale;

        for (let f of flowerPositions) {
          let animatedX = (f.x + shift) % p.width;
          if (animatedX < 0) animatedX += p.width;

          p.fill(f.col);
          p.noStroke();
          p.ellipse(animatedX, f.y, 6, 6);
        }
      };

      function drawHill(p, col, noiseScale, baseY, t) {
        p.fill(col);
        p.noStroke();
        p.beginShape();
        p.vertex(0, p.height);
        for (let x = 0; x <= p.width; x++) {
          let yOffset = p.noise(x * noiseScale - t) * 50;
          let y = baseY + yOffset;
          p.vertex(x, y);
        }
        p.vertex(p.width, p.height);
        p.endShape(p.CLOSE);
      }
    };

    const myP5 = new p5(sketch);
    return () => myP5.remove(); // cleanup on unmount
  }, []);

  return (
    <div
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
