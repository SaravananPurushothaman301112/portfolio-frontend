import React from "react";
import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3>Experience</h3>

      {/* FREELANCER */}
      <div className="card">
        <h4>Freelancer — Junior Software Developer</h4>
        <p className="meta">
          Remote · May 2025 – Present
        </p>

        <p><strong>Project:</strong> Smart Water Tank Monitoring System</p>

        <ul>
          <li>
            Developed a real-time water tank monitoring system to track water
            levels, usage, and operational status for users and clients.
          </li>
          <li>
            Designed and implemented subscription-based plans for water tank
            installation and continuous monitoring services.
          </li>
          <li>
            Built separate authentication systems and dashboards for users and
            admins, enabling users to view reports and admins to manage
            subscriptions and monitoring data.
          </li>
          <li>
            Translated user requirements into backend APIs to support real-time
            data flow and alerts.
          </li>
        </ul>
      </div>

      {/* SRUSHTY */}
      <div className="card">
        <h4>Srushty Global Solutions — Junior Software Developer</h4>
        <p className="meta">
          Chennai, IN · Aug 2024 – Apr 2025
        </p>

        <ul>
          <li>
            Developed Python-based image processing APIs using FastAPI and
            OpenCV, improving response time and system stability.
          </li>
          <li>
            Implemented robust error handling and logging mechanisms to reduce
            application crashes.
          </li>
          <li>
            Collaborated with cross-functional teams to integrate machine
            learning–based enhancements, improving feature detection accuracy.
          </li>
          <li>
            Engineered scalable RESTful APIs and real-time communication using
            WebSockets with Node.js and Express.
          </li>
          <li>
            Applied MongoDB indexing strategies to optimize database query
            performance.
          </li>
        </ul>
      </div>

      {/* EAGLE TECH */}
      <div className="card">
        <h4>Eagle Tech IT Solutions — Junior Software Trainee</h4>
        <p className="meta">
          Chennai, IN · Oct 2023 – Jan 2024
        </p>

        <ul>
          <li>
            Constructed and deployed dynamic websites for a computer center and
            bookstore using Java, MySQL, HTML, and CSS.
          </li>
          <li>
            Integrated responsive UI components to ensure seamless cross-device
            compatibility and intuitive navigation.
          </li>
          <li>
            Designed an optimized backend architecture using Java Servlets and
            JDBC, improving data retrieval speed and reducing query execution
            time.
          </li>
        </ul>
      </div>
    </motion.section>
  );
}

export default Experience;
