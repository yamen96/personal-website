import { useState, useEffect } from 'react';

function useIsVisible(containerRef) {
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting)
  }

  const options = {
    root: null,
    rootMargin: '-150px',
    threshold: 1.0
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if(containerRef.current) observer.observe(containerRef.current);

    return () => {
      if(containerRef.current) observer.unobserve(containerRef.current);
    }
  }, [containerRef, options])

  return isVisible;
}

export default useIsVisible;