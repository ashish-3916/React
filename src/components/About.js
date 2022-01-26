import React from "react";

export default function About(prop) {
  const state = {
    color: prop.mode === "light" ? "black" : "white",
    backgroundColor: prop.mode === "light" ? "white" : "black",
    borderLeft: `6px solid ${prop.mode === "light" ? "blue" : "white"}`,
  };
  const state2 = {
    color: prop.mode === "light" ? "black" : "white",
    backgroundColor: prop.mode === "light" ? "white" : "black",
    borderStyle: "dotted",
    borderColor: `${prop.mode === "light" ? "blue" : "white"}`,
  };

  return (
    <>
      <h1 className="my-3" style={{ color: prop.mode === "dark" ? "white" : "black" }}>
        About Us
      </h1>
      <div className="container">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={state}>
            <h2 className="accordion-header" id="headingOne">
              <button style={state} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Analyze Your text
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={state2}>
                <p> TextAnalyser gives you a way to analyze your text quickly and efficiently. Be it word count, character count or predict reading time </p>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={state}>
            <h2 className="accordion-header" id="headingTwo">
              <button style={state} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Free to use
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={state2}>
                <p>TextAnalyser is a free character counter tool that provides instant character count & word count statistics for a given text. TextAnalyser reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={state}>
            <h2 className="accordion-header" id="headingThree">
              <button style={state} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Browser Compatible
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={state2}>
                <p>This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</p>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={state}>
            <h2 className="accordion-header" id="headingFour">
              <button style={state} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                About Me
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={state2}>
                <p>Hey there, I'm Ashish , I'm studying CSE at NSUT. This is my first React Based Application</p>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={state}>
            <h2 className="accordion-header" id="headingFive">
              <button style={state} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                More
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={state2}>
                <p>This Application is build using basic React. Just an exercise for praticing components, states and router in React </p>
              </div>
            </div>
          </div>
          <div className="accordion-item" style={state}>
            <h2 className="accordion-header" id="headingSix">
              <button style={state} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                Contact me
              </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={state2}>
                <p align="center">
                  <a display="inline" href="http://linkedin.com/in/ashish-dangi">
                    <img className = "mx-3 my-3" align="center" alt="Ashish's Linkedin" width="50px" src="https://th.bing.com/th/id/OIP.b7e9RRQcNBaHO5oM7gyu8wHaHa?w=152&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
                  </a>
                  <a display="inline" href="https://leetcode.com/ashu_3916/">
                    <img className = "mx-3 my-3" align="center" alt="Ashish's Leetcode" width="50px" src="https://th.bing.com/th/id/OIP.160F6WVOdGkaQitbT3A5dAHaHa?w=150&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
                  </a>
                  <a display="inline" href="https://codechef.com/users/ashu_3916">
                    <img className = "mx-3 my-3" align="center" alt="Ashish's CodeChef" width="50px" src="https://th.bing.com/th/id/OIP.icYKWrdBXl5PQmOQxw7NXwHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
                  </a>
                  <a display="inline" href="https://open.spotify.com/user/vtefw05i2dhqbr8fiy1k91jrg?si=1VY2Ti6WRd2zqxLWUAn7VQ&utm_source=copy-link">
                    <img className = "mx-3 my-3" align="center" alt="ashish's Spotify" width="50px" src="https://th.bing.com/th/id/OIP.8OD8Xw6kxFiY-ufpvnFRIgHaFj?w=196&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
                  </a>
                  <a display="inline" href="https://github.com/ashish-3916">
                    <img className = "mx-3 my-3" align="center" alt="ashish's Github" width="50px" src="https://www.bing.com/th?id=AMMS_10dfe5f19c48204f846d5a13a999c47f&w=110&h=110&c=7&rs=1&qlt=95&pcl=f9f9f9&o=6&cdv=1&dpr=1.25&pid=16.1" />
                  </a>
                  <a display="inline" href="https://instagram.com/ashish_3916/">
                    <img className = "mx-3 my-3" align="center" alt="ashish's Instagram" width="50px" src="https://th.bing.com/th/id/OIP.Pd_PGdUpjHtMR9blwHJchAHaHp?w=208&h=214&c=7&r=0&o=5&dpr=1.25&pid=1.7" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
