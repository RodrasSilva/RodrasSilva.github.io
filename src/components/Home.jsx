import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Timeline from './Timeline';
import Writing from './Writing';

function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            const el = document.getElementById(location.state.scrollTo);
            if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
        }
    }, [location.state]);

    return (
        <>
            <Hero />
            <About />
            <Timeline />
            <Writing />
        </>
    );
}

export default Home;
