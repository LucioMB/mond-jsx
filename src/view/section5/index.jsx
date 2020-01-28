 import React from 'react';

 import '../../css/section5/section5.css';
 import {Brothers} from '../../images_js/images-section5';


 function Section5() {
     return(
        <section class="s5-section-1">
            <div class="s5-div-1">
                <img src={Brothers} alt="brothers-1" class="s5-img-1" />
                <div class="s5-div-2">
                    <h2 class="s5-h2">
                        Abaut Mondora
                    </h2>
                        We are a team of open-minded and kind people who always offer each other help to overcome obstacles and create cutting edge solutions to problems.
                </div>
            </div>
        </section>
     );
 }

 export default Section5;