import React, { useEffect } from 'react';

const EmbedInsta = () => {
  useEffect(() => {
    // Dynamically load the Instagram embed script
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    // Reinitialize Instagram embeds
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
      <blockquote className="instagram-media" data-instgrm-permalink="https://www.instagram.com/btk_house/" data-instgrm-version="14">
        <a href="https://www.instagram.com/btk_house/">Instagram Post</a>
      </blockquote>
    </div>
  );
};

export default EmbedInsta;