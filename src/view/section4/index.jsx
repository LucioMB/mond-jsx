 import React from 'react';

 import '../../css/section4/section4.css';
 import {BarrV, Impact} from '../../images_js/images-section4';


 function Section4() {
     return(
        <section class="s4-section-4">
            <div class="s4-div-1">
                <div class="s4-div-2">
                    <div class="s4-div-3a">
                        <img src={BarrV} alt="barr-v" class="s4-img-1" />
                    </div>
                    <div class="s4-div-4">
                        <h2 class="s4-h2">
                            Benefit Project
                        </h2>
                        We are a team of open-minded and kind people who always offer each other help to
                        overcome obstacles and create cutting edge solutions to problems.
                    </div>
                </div>
                <br />
                <img src={Impact} alt="impacts-1" class="s4-img-2" />
            </div>
        </section>
     );
 }

 export default Section4;