import React from "react";
import "./home.css";
function home() {
  return (
    <section className="main_home_section  just-center-r">
      
      <div className="main_container just-center-c">
        <div className="center_container just-center-c">
          <h4>Hello 👋 , I’m</h4>
          <h1>Laxmi Narayan</h1>
          <div class="imWrapper">
            <div class="words just-center-c ">
              <span>
                <h3>App developer .</h3>{" "}
              </span>
              <span>
                <h3>Backend enthusiastic .</h3>{" "}
              </span>
              <span>
                <h3>Problem Slover . </h3>{" "}
              </span>
              <span>
                <h3>Backend enthusiastic .</h3>{" "}
              </span>
              <span>
                <h3>App developer .</h3>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>


 
      
      <div class="socials just-center-c">
          <div className="linkedin"></div>

          <div className="github"></div>

          <div className="gmail"></div>
        </div>
    </section>
  );
}

export default home;
