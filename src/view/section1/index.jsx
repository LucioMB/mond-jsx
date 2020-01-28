import React from 'react';

import '../../css/section1/section1.css';
import {BarraB, Mondora2} from '../../images_js/images-section1';


function Section1() {
    return(
        <section class="s1-section-1">
            <div class="s1-div">
                <h2>
                Welcome to the :mOndOra world!
                </h2>
                Our aim is to create benefit for all stakeholders by designing and building software solutions
                that maximise positive impact. Together with our customers and suppliers, we support
                humans and nature with projects that benefit the community and land.
            </div>
            <img src={BarraB} alt="barr" class="s1-barr" />
            <img src={Mondora2} alt="mondora-2a" class="s1-mondora-2a" />
        </section>

    );
}

export default Section1;