import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const FadeInSection = ({ children, direction = 'up', delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  console.log(`delay? = ${delay ? "yes": "no "} & delayNo = ${delay}`)
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { 
        if (entry.isIntersecting) {
            setVisible(entry.isIntersecting)
        }
      });
    });

    const current = domRef.current;
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);

  return (
    <div
      className={`fade-${direction}-section ${isVisible ? 'is-visible' : ''}`}
      style={{  transitionDelay: `${delay}ms` }}
      ref={domRef}
    >
      {children}
    </div>
  );
}

FadeInSection.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.string,
  delay: PropTypes.number,
};

export default FadeInSection;