import React from 'react';

import '../../css/footer/footer.css';
import {MondoraLogoP, Gh, Ig, Fb, Lk, Tw, Yt} from '../../images_js/images-footer';




function Footer() {
    return(
        <footer>
            <div class="f-div-1">
                <div class="f-div-2">
                    <img src={MondoraLogoP} alt="logo-p" class="f-img-l" />
                    <div class="f-div-2a">
                        &copy; 2018 mondora srl sb . All Rights Reserved.
                        <br />
                        Via Uberto Visconti di Modrone 33 , 20122, Milano - P.IVA 03680680968
                        <br />
                        Made with love &#x2764; in Valtellina
                        <h5 class="f-h5">
                            <a href="tel:+3903421856456" class="f-tel">
                                +39 0342 1856456
                            </a> - 
                            <a href="mailto:info@mondora.com" class="f-mail">
                                info@mondora.com
                            </a>
                        </h5>
                    </div>
                </div>
                <div class="f-div-4">
                    <img src={Gh} alt="gh" class="f-img-gh" />
                    <img src={Ig} alt="ig" class="f-img-2" />
                    <img src={Fb} alt="fb" class="f-img-2" />
                    <img src={Lk} alt="lk" class="f-img-2" />
                    <img src={Tw} alt="tw" class="f-img-2" />
                    <img src={Yt} alt="yt" class="f-img-2" />
                </div>
            </div>
        </footer>

    );
}

export default Footer;
