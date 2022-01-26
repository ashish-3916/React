import React from "react";

export default function About(prop) {
  const state = {
    color: prop.mode === "light" ? "black" : "white",
    backgroundColor: prop.mode === "light" ? "white" : "black",
  };

  return (
    <>
      <div className="container" style={state}>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={state}>
            <h2 className="accordion-header" id="headingOne">
              <button style={state} backgroundcolor={state.backgroundColor} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                About Me
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>Hey there, I'm Ashish , I'm studying CSE at NSUT. This is my first React Based Application</p>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={state}>
            <h2 className="accordion-header" id="headingTwo">
              <button style={state} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                More
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p>This Application is build using basic React. Just an exercise for praticing components, states and router in React </p>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={state}>
            <h2 className="accordion-header" id="headingThree">
              <button style={state} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Contact me
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <p align="left">
                  <img align="center" alt="Ashish's Linkedin" width="25px" src="https://github.com/piyushP7pravin/piyushP7pravin/blob/master/Linkedin.svg" />
                  <a href="http://linkedin.com/in/ashish-dangi"> LinkedIn</a>
                  <br />
                  <img align="center" alt="Ashish's Leetcode" width="25px" src="https://th.bing.com/th/id/OIP.160F6WVOdGkaQitbT3A5dAHaHa?w=150&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
                  <a href="https://leetcode.com/ashu_3916/"> LeetCode</a>
                  <br />
                  <img align="center" alt="Ashish's CodeChef" width="25px" src="https://th.bing.com/th/id/OIP.icYKWrdBXl5PQmOQxw7NXwHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
                  <a href="https://codechef.com/users/ashu_3916">CodeChef</a>
                  <br />
                  <img align="center" alt="ashish's Spotify" width="25px" src="https://th.bing.com/th/id/OIP.8OD8Xw6kxFiY-ufpvnFRIgHaFj?w=196&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
                  <a href="https://open.spotify.com/user/vtefw05i2dhqbr8fiy1k91jrg?si=1VY2Ti6WRd2zqxLWUAn7VQ&utm_source=copy-link"> Spotify</a>
                  <br />
                  <img align="center" alt="ashish's Github" width="25px" src="https://www.bing.com/th?id=AMMS_10dfe5f19c48204f846d5a13a999c47f&w=110&h=110&c=7&rs=1&qlt=95&pcl=f9f9f9&o=6&cdv=1&dpr=1.25&pid=16.1" />
                  <a href="https://github.com/ashish-3916">Github</a>
                  <br />
                  <img align="center" alt="ashish's Instagram" width="25px" src="https://github.com/piyushP7pravin/piyushP7pravin/blob/master/Instagram.svg" />
                  <a href="https://instagram.com/ashish_3916/"> Instagram</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
