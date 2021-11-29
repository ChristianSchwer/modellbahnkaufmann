import React, { useEffect } from 'react'

function About() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
        }, []);
    
    return (
        <div>
            This is the About site!
        </div>
    )
}

export default About
