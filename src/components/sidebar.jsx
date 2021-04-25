import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/castillo.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Eduardo González</a></h1>
              <span>FRONTEND DEVELOPER</span>
              <span className="email"><i className="icon-mail"></i><a href="mailto:flautisimo@gmail.com"> flautisimo@gmail.com</a></span>
            </div><br />
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#education" data-nav-section="education">Education</a></li>
                  <li><a href="#work" data-nav-section="work">Work</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/eduardogonzalez-jsdev/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/Flautisimo" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav><br />
            <div className="colorlib-footer">
              <p>
                <small>
                  &copy; Copyright &copy; 2021
                  <script>document.write(new Date().getFullYear())</script><br />
                  All rights reserved |
                  Made with <i className="icon-heart" aria-hidden="true" /><br></br>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for the inspiration 
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
