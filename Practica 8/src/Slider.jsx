import React, { useState, useEffect } from 'react';
import './App.css';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { image: 'https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_669bc02d7278b41f76397c0c_669bc91e1d916f2f18cfdec7/scale_1200' },
    { image: 'https://i.pinimg.com/736x/74/74/f1/7474f1109a7240bb7f3a9ab75e0be898.jpg' },
    { image: 'https://coop-land.ru/uploads/posts/2021-05/1622162111_1.jpg' },
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Смена слайдов каждые 3 секунды
    return () => clearInterval(interval); // Очистка интервала при размонтировании компонента
  }, [currentIndex]);

  return (
    <div className="slider">
      <img src={slides[currentIndex].image} alt={slides[currentIndex].text} />
      <div className="slide">{slides[currentIndex].text}</div>
      <button onClick={prevSlide}>Назад</button>
      <button onClick={nextSlide}>Вперед</button>
    </div>
  );
};

export default Slider;
