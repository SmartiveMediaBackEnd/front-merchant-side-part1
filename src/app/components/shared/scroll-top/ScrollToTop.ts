import { useEffect } from 'react';

function ScrollToTop() {
  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    };

    // Attach the event listener to scroll to top when the pathname changes
    const cleanup = () => {
      window.removeEventListener('popstate', handleScrollToTop);
    };

    window.addEventListener('popstate', handleScrollToTop);

    // Clean up the event listener when the component unmounts
    return cleanup;
  }, []);

  return null;
}

export default ScrollToTop;
