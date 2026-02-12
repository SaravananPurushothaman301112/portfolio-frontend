import React from "react";
import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3>Projects</h3>

      <div className="card">
        <h4>Smart Search Docs</h4>
        <p>AI-powered document search system.</p>
      </div>

      <div className="card">
        <h4>Smart Water Tank Monitoring</h4>
        <p>Real-time monitoring & alert system.</p>
      </div>
    </motion.section>
  );
}

export default Projects;
