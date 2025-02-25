import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const FadeInSection = (props) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  
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
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

FadeInSection.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FadeInSection;