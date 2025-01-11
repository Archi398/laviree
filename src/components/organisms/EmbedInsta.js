import React, { useEffect, useState } from 'react';

const EmbedInsta = ({ idAccount }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if the Instagram embed script is already loaded
    if (!document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
      // Dynamically load the Instagram embed script
      const script = document.createElement('script');
      script.async = true;
      script.src = "https://www.instagram.com/embed.js";
      script.onload = () => setIsLoaded(true); // Set isLoaded to true when the script is fully loaded
      document.body.appendChild(script);

      return () => {
        // Clean up the script when the component unmounts
        document.body.removeChild(script);
      };
    } else {
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    // Reinitialize Instagram embeds
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [isLoaded]);

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      {isLoaded ? (
        <blockquote className="instagram-media" data-instgrm-permalink={`https://www.instagram.com/${idAccount}/`} data-instgrm-version="14">
          <a href={`https://www.instagram.com/${idAccount}/`}>Instagram Post</a>
        </blockquote>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EmbedInsta;