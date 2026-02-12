import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";





function App() {
  
  const [profile, setProfile] = useState(null);

  // Existing fetch useEffect
  useEffect(() => {
    fetch("https://saravananportfolio.onrender.com")
      .then(res => res.json())
      .then(data => setProfile(data));
  }, []); 

  // 👇 PASTE THIS HERE (mouse glow effect)
  useEffect(() => {
    const glow = document.createElement("div");
    glow.className = "mouse-glow";
    document.body.appendChild(glow);

    const move = (e) => {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    document.addEventListener("mousemove", move);

    return () => {
      document.removeEventListener("mousemove", move);
      document.body.removeChild(glow);
    };
  }, []);


  if (!profile)
  return (
    <div className="page-loader">
      <div className="loader-ring"></div>
      <h2>Loading Portfolio...</h2>
    </div>
  );


  return (
    <div className="container">
      <div className="bg-shapes">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>{profile.name}</h1>
        <h2>{profile.role}</h2>
        <p>{profile.location}</p>
      </motion.div>
      
            {/* ABOUT */}
      <motion.section
        className="about"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3>About Me</h3>
        <p>
          As a Junior Software Developer, I bring a strong foundation in software
          engineering with a focus on building high-performance, scalable
          applications and improving system efficiency. I have hands-on
          experience developing dynamic web platforms and optimizing backend
          services, resulting in improved performance and enhanced user
          engagement. With a solid understanding of technologies such as
          <strong> Python, React, and Node.js</strong>, I am passionate about
          transforming ideas into reliable, user-friendly solutions and
          consistently delivering quality-driven results.
        </p>
        <div className="about-extra">
          

          {/* <button
            type="button"
            className="linkedin-btn"
            onClick={() =>
              window.open("https://www.linkedin.com/in/saravananp30/", "_blank")
            }
          >
            Connect with me on LinkedIn
          </button> */}



        </div>
      </motion.section>

      {/* SKILLS */}
      <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

        <h3>Skills</h3>
        <ul>
          {profile.skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </motion.section>

      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
