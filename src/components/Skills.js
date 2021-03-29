import React from 'react'
import logoReact from "../logos/react.svg";
import logoCss from "../logos/css3.svg";
import logoJs from "../logos/js_badge.svg";
import logoHtml from "../logos/html5.svg";
import logoBoot from "../logos/bootstrap.svg";
import logoNode from "../logos/nodejs.svg";
import logoJava from "../logos/java.svg";
import logoPython from "../logos/python.svg";
import logoSql from "../logos/msql_server.svg";
import logoGit from "../logos/git.svg";
import logoGitHub from "../logos/github_badge.svg";
import logoNpm from "../logos/npm.svg";





const Skills = () => {
    return (
        <div className="skills">
            <h3>Skills</h3>
            <br/>
            <br/>
            <br/>


            <img className="logoJs" src={logoJs} alt="Java Script" />

            <img className="logoCss" src={logoCss} alt="CSS3" />

            <img className="logoHtml" src={logoHtml} alt="HTML5" />

            <img className="logoBoot" src={logoBoot} alt="Bootstrap" />
            <img className="logoNode" src={logoNode} alt="Node JS" />

            <img className="logoNpm" src={logoNpm} alt="NPM" />
            <img className="logoReact" src={logoReact} alt="React JS" />



            <img className="logoJava" src={logoJava} alt="Java" />
            <img className="logoPython" src={logoPython} alt="Python" />
            <img className="logoSql" src={logoSql} alt="SQL Server" />
            <img className="logoGit" src={logoGit} alt="Git" />
            <img className="logoGitHub" src={logoGitHub} alt="GitHub" />







            

        </div>
    )
}

export default Skills
