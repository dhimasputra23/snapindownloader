import React from 'react'
import {
    Link
  } from "react-router-dom";

const Kontak = () => {
    return (
        <>
            <main>

         <iframe id="JotFormIFrame-231011805001433" title="Formulir Kontak Amplop Responsif" onload="window.parent.scrollTo(0,0)" allowTransparency="true" allowFullScreen="true" allow="geolocation; microphone; camera" src="https://form.jotform.com/231011805001433" frameBorder={0} style={{minWidth: '100%', maxWidth: '100%', height: 539, border: 'none'}} scrolling="no">
</iframe>

   
            </main>
            <footer>
                <div className="copyright">
                    <div className="container">
                        <div className="copyright-link">
                            <ul className="list-unstyled">
                            <li><Link to="/contact">Kontak</Link></li>
                                    <li><Link to="/terms-of-service">Ketentuan Layanan</Link></li>
                                    <li><Link to="/privacy-policy">Kebijakan pribadi</Link></li>
                            </ul>
                        </div>
                        <div className="copyright-text">© 2023 <a href="#" title="Snapin">Snapin</a>. All rights reserved.</div>
                    </div>
                </div>
            </footer>

        </>

    )
}

export default Kontak
