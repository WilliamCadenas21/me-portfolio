import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Software Engineer At Dommo (Personal Project){" "}
                          <span>Jul 2020 - Present</span>
                        </h2>
                        <ul>
                          <li>
                            Configuration of Elastic Search Service and Queries
                          </li>
                          <li>SEO for the main page and products</li>
                          <li>Front development with VueJS and NuxtJS</li>
                          <li>Backend development with NestJS and mongodb</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Software Engineer At Utler technologies (Profesional){" "}
                          <span>Aug 2020 - Dec 2020</span>
                        </h2>
                        <ul>
                          <li>
                            Meet with the client to collect the requirements and
                            make the estimation for each feature.
                          </li>
                          <li>
                            Support and development on the backend side with
                            Nodejs and common libraries in this environment like
                            Express, Sequilize, Bcrypt, JWT, etc.
                          </li>
                          <li>
                            Developer of native iOS application on Swift4 as a
                            learner and improving some features of an existing
                            app.
                          </li>
                          <li>
                            React Native developer with iOS and android platform
                            as a target. Client:{" "}
                            <a href="https://www.virtuesmatter.com/">
                              https://www.virtuesmatter.com/
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Software Engineer At Ebenezer Technologies
                          (Profesional) <span>May 2020 - Jul 2020</span>
                        </h2>
                        <ul>
                          <li>
                            Development on NodeJS giving support to some
                            applications of this company.
                          </li>
                          <li>
                            Java Developer supporting and developing software
                            for control a set of antennas with RFID technology.
                          </li>
                          <li>
                            Development of Linux scripts with bash and build
                            some background process.
                          </li>
                          <li>
                            Work with FFMPG and rtsp protcol to take a video and
                            present in a web application.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Assistant research At Universidad EAFIT (Profesional){" "}
                          <span>Dec 2019 - Ene 2020</span>
                        </h2>
                        <ul>
                          <li>
                            Configuration of Elastic Search Service and Queries
                          </li>
                          <li>SEO for the main page and products</li>
                          <li>Front development with VueJS and NuxtJS</li>
                          <li>Backend development with NestJS and mongodb</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Full Stack Engineer At Carpool Vita (Freelance){" "}
                          <span>Nov 2018 - Jan 2019</span>
                        </h2>
                        <ul>
                          <li>
                            Development of the graphic interface with React
                            Native implementing Redux for Android and iOS.
                          </li>
                          <li>
                            Development of a Backend with NodeJS and Express to
                            manage the logic of the application.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
