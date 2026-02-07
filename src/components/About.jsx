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

            <header className="major" style={{ marginTop: '2em' }}>
                <h2>Publications and Articles </h2>
            </header>
            <br />
            <div className="row" style={{ marginTop: '-7%' }}>
                <div className="col-12 col-12-xsmall">
                    <ul>
                        <li> R. Silva, C. Correia, M. Correia and L. Rodrigues. <a href="https://web.ist.utl.pt/claudio.correia/papers/inforum22-silva.pdf"> Ataques de Frequência em Deduplicação Cifrada na Nuvem</a>.  In <i> Actas do décimo terceiro Simpósio de Informática (Inforum)</i>, Guarda, Portugal, September 2022.</li>

                        <li> R. Silva, C. Correia, M. Correia and L. Rodrigues. <a href="https://dl.acm.org/doi/10.1145/3555776.3577711"> Deduplication vs Privacy Tradeoffs in Cloud Storage	</a>.  In <i> Proceedings of the The 38th ACM/SIGAPP Symposium On Applied Computing (SAC)</i>, Tallinn Estonia, March 2023.</li>
                    </ul>
                </div>
            </div>

            <Timeline />
        </section>
    );
}

export default About;
