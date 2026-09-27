import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [cursorText, setCursorText] = useState<string>('');
  const [cursorType, setCursorType] = useState<string>('default');
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Only run on non-touch devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.25, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.25, ease: 'power3.out' });

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      xTo(e.clientX);
      yTo(e.clientY);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    // Event delegation for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('[data-cursor]');
      if (target) {
        const type = target.getAttribute('data-cursor') || 'hover';
        const label = target.getAttribute('data-cursor-label') || '';
        setCursorType(type);
        setCursorText(label || (type === 'view' ? 'VIEW' : type === 'play' ? 'PLAY' : type === 'close' ? 'CLOSE' : type === 'go' ? 'GO →' : ''));
      } else {
        const link = (e.target as HTMLElement).closest('a, button');
        if (link) {
          setCursorType('pointer');
          setCursorText('');
        } else {
          setCursorType('default');
          setCursorText('');
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  // Animate cursor shape/scale based on type
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    if (cursorType === 'view' || cursorType === 'play') {
      gsap.to(cursor, {
        width: 84,
        height: 84,
        backgroundColor: 'rgba(212, 175, 55, 0.95)',
        color: '#08080a',
        borderWidth: 0,
        duration: 0.25,
        ease: 'power2.out'
      });
    } else if (cursorType === 'go' || cursorType === 'close') {
      gsap.to(cursor, {
        width: 68,
        height: 68,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        color: '#08080a',
        borderWidth: 0,
        duration: 0.25,
        ease: 'power2.out'
      });
    } else if (cursorType === 'pointer') {
      gsap.to(cursor, {
        width: 42,
        height: 42,
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        borderColor: 'rgba(212, 175, 55, 0.6)',
        borderWidth: 1,
        duration: 0.2,
        ease: 'power2.out'
      });
    } else {
      gsap.to(cursor, {
        width: 14,
        height: 14,
        backgroundColor: '#d4af37',
        borderWidth: 0,
        duration: 0.2,
        ease: 'power2.out'
      });
    }
  }, [cursorType]);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9999] rounded-full hidden md:flex items-center justify-center font-display font-bold text-[11px] tracking-wider transition-opacity duration-200 backdrop-blur-[1px] ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        boxShadow: cursorType !== 'default' ? '0 10px 30px -5px rgba(0,0,0,0.5)' : 'none'
      }}
    >
      <span ref={textRef} className="select-none text-center">
        {cursorText}
      </span>
    </div>
  );
};
