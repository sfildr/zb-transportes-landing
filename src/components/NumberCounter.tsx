import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface NumberCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const NumberCounter: React.FC<NumberCounterProps> = ({
  end,
  duration = 2000,
  suffix = '',
  prefix = ''
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const countingRef = useRef(false);

  useEffect(() => {
    if (inView && !countingRef.current) {
      countingRef.current = true;
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start > end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="animate-count-up">
      <span className="text-4xl font-bold">
        {prefix}{count.toLocaleString()}{suffix}
      </span>
    </div>
  );
};

export default NumberCounter;