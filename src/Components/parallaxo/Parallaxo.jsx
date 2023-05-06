import React, { useEffect, useState } from "react";
import "./Parallaxo.css";

const Parallaxo = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setOffset(window.pageYOffset);
  };

  return (
    <div className="parallax-container" style={{ backgroundPositionY: offset * 0 }}>
      <div className="parallax-text">New Text</div>
    </div>
  );
};

export default Parallaxo;
