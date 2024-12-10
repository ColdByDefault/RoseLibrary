import React, { useEffect, useRef } from "react";

function RandomDotsBackground({
  starCount = 300,
  minStarSize = 0.5,
  maxStarSize = 1,
  maxSpeed = 0.3,
  backgroundColor = "black",
  starColor = "#b8e3ff", // Updated default color for stars
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Canvas context is not available.");
      return;
    }

    const stars = [];

    // Function to initialize stars
    const initializeStars = () => {
      stars.length = 0; // Clear existing stars
      for (let i = 0; i < starCount; i++) {
        const z = 1; // Depth value between 0 (far) and 1 (near)
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * (maxStarSize - minStarSize) + minStarSize,
          dx: (Math.random() - 0.5) * maxSpeed * 0.5,
          dy: (Math.random() - 0.5) * maxSpeed,
          z: z,
          alpha: Math.random(), // Initial alpha for fading
        });
      }
    };

    // Resize canvas and reinitialize stars
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.imageSmoothingEnabled = false; // Disable anti-aliasing
      initializeStars();
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Animation loop
    const animate = () => {
      // Fill the canvas with a dark background
      ctx.fillStyle = backgroundColor; // Background color
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Fade stars
        star.alpha -= 0.002; // Slower fading
        if (star.alpha <= 0) {
          star.alpha = Math.random();
          star.x = Math.random() * canvas.width;
          star.y = Math.random() * canvas.height;
          star.radius = Math.random() * (maxStarSize - minStarSize) + minStarSize;
        }

        // Draw star with alpha transparency
        ctx.beginPath();
        ctx.arc(Math.round(star.x), Math.round(star.y), star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hexToRgb(starColor)}, ${star.alpha})`; // Dynamic star color
        ctx.fill();
        ctx.closePath();

        // Update star position
        star.x += star.dx;
        star.y += star.dy;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      });

      requestAnimationFrame(animate);
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [starCount, minStarSize, maxStarSize, maxSpeed, backgroundColor, starColor]);

  // Utility function to convert HEX to RGB
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `${r}, ${g}, ${b}`;
  };

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" />;
}

export default RandomDotsBackground;
