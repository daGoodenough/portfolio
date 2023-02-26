/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';

function FadeIn({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setIsVisible(entry.isIntersecting));
    });

    observer.observe(domRef.current);

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      className={isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}
      ref={domRef}
    >
      {children}
    </div>
  );
}

export default FadeIn;
