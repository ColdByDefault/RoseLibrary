import React, { useEffect, useRef } from "react";

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const starCount = 200;
    const stars = [];
    const speed = 0.3;
    const maxDepth = 4;
    const sizes = [0.3, 1, 0.6, 0.02];

    const createStar = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const z = Math.random() * maxDepth;
      const dx = (Math.random() - 0.5) * speed * (z / maxDepth);
      const dy = (Math.random() - 0.5) * speed * (z / maxDepth);
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      const shineFactor = Math.random(); 
      return { x, y, dx, dy, z, size, shineFactor, shineDirection: 1 };
    };

    const initializeStars = () => {
      stars.length = 0;
      for (let i = 0; i < starCount; i++) {
        stars.push(createStar());
      }
    };

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      initializeStars(); // Reinitialize stars on resize to fit new dimensions
    };

    const drawStar = (star) => {
      ctx.beginPath();
      const adjustedRadius = star.size * (star.z / maxDepth) ;
      ctx.arc(star.x, star.y, adjustedRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#b8e3ff";
      ctx.shadowBlur = adjustedRadius;
      ctx.shadowColor = "rgba(184, 227, 255, 0.8)";
      ctx.fill();
      ctx.closePath();
    };

    const updateStar = (star) => {
      star.x += star.dx;
      star.y += star.dy;

      // Wrap stars around screen edges
      if (star.x - star.size > canvas.width) star.x = -star.size;
      if (star.x + star.size < 0) star.x = canvas.width + star.size;
      if (star.y - star.size > canvas.height) star.y = -star.size;
      if (star.y + star.size < 0) star.y = canvas.height + star.size;

      // Update shine factor for "shining" effect
      star.shineFactor += star.shineDirection * 0.002;
      if (star.shineFactor >= 1.5) star.shineDirection = -1;
      if (star.shineFactor <= 0.5) star.shineDirection = 1;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        drawStar(star);
        updateStar(star);
      });
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    initializeStars();
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 mx-auto w-full h-full z-[-1] bg-black lg:rounded-xl"
    />
  );
};

export default Background;
