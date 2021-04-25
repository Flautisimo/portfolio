import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <section className="colorlib-education" data-section="education">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
              <span className="heading-meta">Education</span>
              <h2 className="colorlib-heading animate-box fadeInUp animated">Education</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
              <div className="fancy-collapse-panel">
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                      <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Master Degree in Music Performance</a>
                      </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                      <div className="panel-body">
                        <p><strong>Carnegie Mellon University</strong> (Pittsburgh, USA), class of 2004.</p>
                        <p>Main expertise:</p>
                        <ul>
                          <li>Flute Performance</li>
                          <li>Chamber Music</li>
                          <li>Contemporary Music</li>
                          <li>Performance Practice of Baroque Music</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingTwo">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Bachelor Degree in Music Performance</a>
                      </h4>
                    </div>
                    <div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                      <div className="panel-body">
                        <p><strong>Universidad Veracruzana</strong> (Mexico), class of 1999.</p>
                        <p>Main expertise:</p>
                        <ul>
                          <li>Flute Performance</li>
                          <li>Chamber Music</li>
                          <li>Orchestra Conducting</li>
                          <li>Pedagogy</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingThree">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Professional Certifications</a>
                      </h4>
                    </div>
                    <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                      <div className="panel-body">
                        <p><strong>&copy; <a href="https://www.freecodecamp.org/flautisimo">freeCodeCamp</a></strong>, 2020 - 2021.</p>
                        <ul>
                          <li>Responsive Web Design</li>
                          <li>Algorithms and Data Structures</li>
                          <li>Front End Libraries</li>
                          <li>API's and Microservices</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFour">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Certification in JavaScript Algorithms and Data Structures</a>
                      </h4>
                    </div>
                    <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
                      <div className="panel-body">
                      <p><strong>freeCodeCamp</strong></p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingFive">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Certification in Front End Libraries</a>
                      </h4>
                    </div>
                    <div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                      <div className="panel-body">
                      <p><strong>freeCodeCamp</strong></p>
                      </div>
                    </div>
                  </div>
                  <div className="panel panel-default">
                    <div className="panel-heading" role="tab" id="headingSix">
                      <h4 className="panel-title">
                        <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSix" aria-expanded="false" aria-controls="collapseSix">Certification in API's and Microservices</a>
                      </h4>
                    </div>
                    <div id="collapseSix" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                      <div className="panel-body">
                      <p><strong>freeCodeCamp</strong></p>
                      </div>
                    </div>
                  </div>
                  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}