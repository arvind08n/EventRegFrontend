  
import React from 'react';


function Footer(props) {
    return (
        <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="https://techzillaindia.com/upskill/"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/upskillbytz/"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/school/upskill-by-techzillaindia/?originalSubdomain=in"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/upskillbytz?lang=en"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/channel/UCqCyaSDhhsW82cH1UJL15BQ"><i className="fa fa-youtube"></i></a>
            
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright Peaky_Blinders</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;