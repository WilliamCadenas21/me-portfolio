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
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Software Engineer At Utler technologies{" "}
                          <span>Aug 2020 - Dec 2020</span>
                        </h2>
                        <p>
                          • Meet with the client to collect the requirements and
                          make the estimation for each feature • Support and
                          development on the backend side with Nodejs and common
                          libraries in this environment like Express, Sequilize,
                          Bcrypt, JWT, etc. • Developer of native iOS
                          application on Swift4 as a learner and improving some
                          features of an existing app. • React Native developer
                          with iOS and android platform as a target • Client:{" "}
                          <a href="https://www.virtuesmatter.com/">
                            https://www.virtuesmatter.com/
                          </a>
                        </p>
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
                          Software Engineer At Ebenezer Technologies{" "}
                          <span>May 2020 - Jul 2020</span>
                        </h2>
                        <p>
                          • Worked on Node js giving support to some
                          applications supported in these technologies • Java
                          Developer supporting and developing software for
                          control a set of antennas with RFID technology •
                          Developed Linux scripts with bash and build some
                          background process • Work with ffmpg and rtsp to take
                          a video and present in a web application
                        </p>
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
                          Assistant research At Universidad EAFIT{" "}
                          <span>Dec 2019 - Ene 2020</span>
                        </h2>
                        <p>
                          • Administration of the LMS platform called Moodle •
                          Development of a plugin for Moodle called “Sistema
                          Recomendador” • Implementation of a Backend on Flask
                          and Pyramid with Python to manage the logic of the
                          plugin • Storage and management of the user activity
                          data in MongoDB • Adapt the plugin for Canvas LMS
                        </p>
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
