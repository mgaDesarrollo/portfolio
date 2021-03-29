import React from 'react';
import logoGitHub from "../logos/github_badge.svg";
import logoGmail from "../logos/Gmail.png";



const Contact = () => {
    return (
        <div className="contact-container">
                        <h3 id='cont'>Contact Me</h3>

            <a name='contact'></a>
            <br/>
            <br/>
             <br/>
             <br/>
            <div className="LI-profile-badge" data-version="v1" data-size="large" data-locale="es_ES" data-type="vertical" data-theme="dark" data-vanity="gabriel-avendaño-869027142"><a class="LI-simple-link" href='https://ar.linkedin.com/in/gabriel-avenda%C3%B1o-869027142?trk=profile-badge'>linkedin</a></div>
            <div className="contact"><img className="logoGitHub" href="https://github.com/mgaDesarrollo" src={logoGitHub} alt="logo..." /><a href="https://github.com/mgaDesarrollo">github.com/mgaDesarrollo</a><br/><br/><br/><p>GitHub</p></div>
            <div className="contact"><iframe id="gmail" src="https://docs.google.com/forms/d/e/1FAIpQLSe7dGxTkGHbhny0LNrn5ptvft9uOuspfsWUBi___5VIF7YCcQ/viewform?embedded=true"  frameborder="1" marginheight="1" marginwidth="0">Cargando…</iframe>
</div>

        </div>
    )
}

export default Contact
