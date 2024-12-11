import React, { useEffect, useRef } from "react";

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const starRadius = 0.9;
    const starCount = 200;
    const stars = [];
    const speed = 0.5;
    const maxDepth = 5;

    const createStar = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const z = Math.random() * maxDepth;
      const dx = (Math.random() - 0.5) * speed * (z / maxDepth);
      const dy = (Math.random() - 0.5) * speed * (z / maxDepth);
      return { x, y, dx, dy, z };
    };

    const initializeStars = () => {
      stars.length = 0;
      for (let i = 0; i < starCount; i++) {
        stars.push(createStar());
      }
    };

    const drawStar = (star) => {
      ctx.beginPath();
      const adjustedRadius = starRadius * (star.z / maxDepth);
      ctx.arc(star.x, star.y, adjustedRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#b8e3ff";
      ctx.fill();
      ctx.closePath();
    };

    const updateStar = (star) => {
      star.x += star.dx;
      star.y += star.dy;

      if (star.x - starRadius > canvas.width) star.x = -starRadius;
      if (star.x + starRadius < 0) star.x = canvas.width + starRadius;
      if (star.y - starRadius > canvas.height) star.y = -starRadius;
      if (star.y + starRadius < 0) star.y = canvas.height + starRadius;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        drawStar(star);
        updateStar(star);
      });
      requestAnimationFrame(animate);
    };

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
