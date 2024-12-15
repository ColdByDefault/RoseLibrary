import React, { useEffect, useRef } from "react";

const MiniBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const starCount = 90; 
    const stars = [];
    const speed = 0.2; 
    const maxDepth = 30;
    const sizes = [0.5, 1]; 
    let shiningStarIndex = -1;

    const createStar = () => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const z = Math.random() * maxDepth;
      const dx = (Math.random() - 0.5) * speed * (z / maxDepth);
      const dy = (Math.random() - 0.5) * speed * (z / maxDepth);
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      return { x, y, dx, dy, z, size, shineFactor: 1 };
    };

    const initializeStars = () => {
      stars.length = 0;
      for (let i = 0; i < starCount; i++) {
        stars.push(createStar());
      }
    };

    const drawStar = (star, isShining) => {
      ctx.beginPath();
      const adjustedRadius = star.size * (star.z / maxDepth) * star.shineFactor;
      ctx.arc(star.x, star.y, adjustedRadius, 0, Math.PI);
      ctx.fillStyle = isShining ? "#ffffff" : "#b8e3ff";
      ctx.shadowBlur = isShining ? 8 : 4;
      ctx.shadowColor = isShining ? "#0582dbf1" : "transparent";
      ctx.fill();
      ctx.closePath();
    };

    const updateStar = (star) => {
      star.x += star.dx;
      star.y += star.dy;
      if (star.x > canvas.width) star.x = 0;
      if (star.x < 0) star.x = canvas.width;
      if (star.y > canvas.height) star.y = 0;
      if (star.y < 0) star.y = canvas.height;
    };

    const selectShiningStar = () => {
      if (shiningStarIndex >= 0) stars[shiningStarIndex].shineFactor = 1;
      shiningStarIndex = Math.floor(Math.random() * stars.length);
      stars[shiningStarIndex].shineFactor = 1.5;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star, index) => {
        const isShining = index === shiningStarIndex;
        drawStar(star, isShining);
        updateStar(star);
      });
      requestAnimationFrame(animate);
    };

    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
    initializeStars();
    animate();

    const shineInterval = setInterval(() => {
      selectShiningStar();
    }, 800);

    return () => clearInterval(shineInterval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full bg-black rounded-full"
    />
  );
};

export default MiniBackground;
