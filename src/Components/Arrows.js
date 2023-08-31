// import './arrows.css'
import './arrows.scss'
import React, { useEffect, useRef } from 'react';
function Arrows({project, scrollToSection}) {



    const containerRef = useRef(null);

    useEffect(() => {
      if (containerRef.current) {
        containerRef.current.classList.remove('loading');
      }
    }, []); // Empty dependency array means this effect runs once on mount
    return (
       
                <a  onClick={() => scrollToSection(project)} class="arrow-container loading">
                    <div class="arrow"></div>
                    <div class="arrow"></div>
                    <div class="arrow"></div>
                </a>
       




    );
}

export default Arrows;
