import React, { useEffect, useRef, useState } from 'react';

const ScrollUp = () => {
  const [isActive, setIsActive] = useState(false);
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const pathLength = path.getTotalLength();

    // Настройка начальных стилей SVG пути (прогресс-бар вокруг кнопки)
    path.style.strokeDasharray = `${pathLength} ${pathLength}`;
    path.style.strokeDashoffset = pathLength;
    path.style.transition = 'stroke-dashoffset 20ms';

    const handleScroll = () => {
      const offset = 100;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;

      // Переключение видимости кнопки (появление после 100px скролла)
      setIsActive(scrollTop > offset);

      // Обновление прогресса прокрутки в зависимости от положения страницы
      if (height > 0) {
        const dashoffset = pathLength - (scrollTop * pathLength / height);
        path.style.strokeDashoffset = dashoffset;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Проверка при монтировании компонента

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div 
      className={`scroll-up ${isActive ? 'scroll-up--active' : ''}`} 
      onClick={scrollToTop}
      style={{ cursor: 'pointer' }}
    >
      <svg className="scroll-up__svg" viewBox="-2 -2 52 52">
        <path 
          ref={pathRef}
          className="scroll-up__svg-path" 
          d="M24,0 a24,24 0 0,1 0,48 a24,24 0 0,1 0,-48" 
        />
        {/* Добавляем визуальную стрелку внутри круга */}
        <path 
          d="M15,26 L24,17 L33,26" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ScrollUp;