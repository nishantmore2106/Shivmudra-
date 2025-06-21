
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          className="rounded-full bg-corporate-600 hover:bg-corporate-700 w-12 h-12 shadow-lg transition-transform hover:scale-110"
          aria-label="Scroll to top"
          size="icon"
        >
          <ArrowUp size={20} />
        </Button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
