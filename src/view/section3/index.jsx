 import React from 'react';

 import '../../css/section3/section3.css';
 import {Img1, Img2, Img3, Img4} from '../../images_js/images-section3';


 function Section3() {
     return(
        <section class="s3-section-3">
            <div class="s3-div-7">
                <div class="s3-div-8">
                    <h2 class="s3-h2-3">
                        From our blog
                    </h2>
                </div>
                <div class="s3-div-9">
                    <div class="s3-div-9a">
                        <img src={Img1} alt="img-1" class="img-1" />
                        <br />
                        <div class="s3-div-10">
                        IRENE BRAMBILLA
                        <h5>
                            The Power of Awareness
                        </h5>
                            Thu, 10 Oct 2019 09:22:40 GMT
                        </div>
                    </div>
                    <div class="s3-div-9a">
                        <img src={Img2} alt="img-2" class="img-2" />
                        <br />
                        <div class="s3-div-10">
                        IRENE BRAMBILLA
                        <h5>
                            La forza della consapevolezza
                        </h5>
                            Thu, 10 Oct 2019 09:19:43 GMT
                        </div>
                    </div>
                    <div class="s3-div-9a">
                        <img src={Img3} alt="img-3" class="img-3" />
                        <br />
                        <div class="s3-div-10">
                        IRENE BRAMBILLA
                        <h5>
                            Mettiamoci al lavoro!
                        </h5>
                            Thu, 26 Set 2019 08:24:23 GMT
                        </div>
                    </div>
                    <div class="s3-div-9a">
                        <img src={Img4} alt="img-4" class="img-4" />
                        <br />
                        <div class="s3-div-10">
                        IRENE BRAMBILLA
                        <h5>
                            Let's Get to Work!
                        </h5>
                            Thu, 26 Set 2019 08:20:16 GMT
                        </div>
                    </div>
                </div>
                <a href="https://bcalmbcorp.com/" target="_blank" rel="noopener noreferrer"><input type="submit" class="s3-send" value="visit our blog" /></a>
            </div>
        </section>
     );
 }

 export default Section3;