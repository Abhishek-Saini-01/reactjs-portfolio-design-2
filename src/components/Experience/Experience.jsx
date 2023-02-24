import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_deatils">
              <BsPatchCheckFill className="experience_icons"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_deatils">
              <BsPatchCheckFill className="experience_icons"/>
              <h4>CSS</h4>
              <small className="text-light">Intermidate</small>
            </article>
            <article className="experience_deatils">
              <BsPatchCheckFill className="experience_icons"/>
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_deatils">
              <BsPatchCheckFill className="experience_icons"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_deatils">
              <BsPatchCheckFill className="experience_icons"/>
              <div>
                <h4>Tailwind</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_deatils">
              <BsPatchCheckFill className="experience_icons"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_deatils">
              <BsPatchCheckFill className="experience_icons"/>
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_deatils">
              <BsPatchCheckFill className="experience_icons" />
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Intermidate</small>
              </div>
            </article>
            <article className="experience_deatils">
              <BsPatchCheckFill className="experience_icons"/>
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermidate</small>
              </div>
            </article>
            <article className="experience_deatils">
              <BsPatchCheckFill className="experience_icons"/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience_deatils">
              <BsPatchCheckFill className="experience_icons"/>
              <div>
                <h4>C/C++</h4>
                <small className="text-light">Intermidate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
