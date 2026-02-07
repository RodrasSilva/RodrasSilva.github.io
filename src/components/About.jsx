import React from 'react';
import Timeline from './Timeline';

function About() {
    return (
        <section id="one">
            <header className="major">
                <h2>About Me</h2>
            </header>
            Hello, I'm Rodrigo Silva. I studied Computer Science and Engineering for my Bachelor's degree at <a href="https://www.isel.pt/">Instituto Superior de Engenharia de Lisboa (ISEL)</a> and my Master's at <a href="https://tecnico.ulisboa.pt/en/">Instituto Superior Técnico (IST)</a>, specialising in Software Engineering and Distributed Systems.

            <div className="row" style={{ marginTop: '2%' }}>
                <div className="col-12 col-12-xsmall">
                    <ul>
                        <li> 🏢 I am currently working at <a href="https://www.linkedin.com/company/skyportugal">Sky</a> as a Backend Developer </li>
                        <li> 📫 If you wish to contact me or request my CV, please send me a message on <a href="https://www.linkedin.com/in/rodrigo-silva-b9b812176/">LinkedIn </a></li>
                    </ul>
                </div>
            </div>

            <h4 style={{ marginTop: '-2%' }}>Some of my hobbies</h4>
            <div className="row" style={{ marginTop: '-2%' }}>
                <div className="col-6 col-12-xsmall">
                    <ul>
                        <li> 🎸 Playing guitar</li>
                        <li> 🍛 Exploring new restaurants</li>
                        <li> 🚄 Travelling</li>
                    </ul>
                </div>
            </div>



            <Timeline />
        </section>
    );
}

export default About;
