import React from "react";
import { motion } from "framer-motion";

function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h3>Education</h3>

      <div className="card">
        <h4>Perunthalaivar Kamarajar Institute of Engineering and Technology</h4>
        <p className="meta">Karaikal, IN · Passed out 2023</p>

        <p>
          <strong>Bachelor of Engineering</strong>
        </p>

        <p className="meta">
          CGPA: 6.29
        </p>
      </div>
    </motion.section>
  );
}

export default Education;
