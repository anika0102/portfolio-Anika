import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>

      <div className="projects-grid">

        {/* ========== X-GastroAI ========== */}
        <div className="project">
          <a
            href="https://github.com/anika0102/X-GastroAI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={mock10}
              className="zoom"
              alt="thumbnail"
              style={{
                width: "360px",
                height: "200px",
                objectFit: "cover",
                backgroundColor: "#0f172a",
                borderRadius: "2px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </a>

          <a
            href="https://github.com/anika0102/X-GastroAI"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-title"
          >
            <h2>X-GastroAI - Explainable Gastric Cancer Detection</h2>
          </a>

          <p>
            Fine-tuned a ResNet-50 CNN on the GasHisDB160 histopathology dataset using
            transfer learning and Cross-Entropy loss with the Adam optimizer, achieving
            97.6% accuracy, 98% precision, and 97% F1-score in cancer tissue classification.
            Integrated Grad-CAM explainability into the development pipeline to visualize
            model attention on pathological regions, enhancing interpretability and clinical
            trust, deployed results via an interactive Streamlit UI for real-time inference
            visualization.
          </p>
        </div>

        {/* ========== Modified PostgreSQL B-Tree ========== */}
        <div className="project">
          <a
            href="https://github.com/anika0102/Modified-PostgreSQL-17.4-B-Tree-index-internals-"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={mock09}
              className="zoom"
              alt="thumbnail"
              style={{
                width: "360px",
                height: "200px",
                objectFit: "cover",
                backgroundColor: "#0f172a",
                borderRadius: "2px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </a>
          <a
            href="https://github.com/anika0102/Modified-PostgreSQL-17.4-B-Tree-index-internals-"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-title"
          >
            <h2>Modified PostgreSQL B-Tree index internals</h2>
          </a>
          <p>
            Enhanced PostgreSQL’s B-Tree indexing mechanism by modifying core source code to
            optimize query traversal and latency performance for large-scale analytical
            workloads. Achieved 15% reduction in query latency and significantly improved
            index scan throughput and scalability, aligning with AWS database performance
            optimization best practices.
          </p>
        </div>

        {/* ========== Echoes ========== */}
        <div className="project">
          <a
            href="https://github.com/anika0102/HackSC-2025-Echoes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={mock08}
              className="zoom"
              alt="thumbnail"
              style={{
                width: "360px",
                height: "200px",
                objectFit: "cover",
                backgroundColor: "#0f172a",
                borderRadius: "2px",
                display: "block",
                margin: "0 auto",
              }}
            />
          </a>

          <a
            href="https://github.com/anika0102/HackSC-2025-Echoes"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-title"
          >
            <h2>Echoes</h2>
          </a>

          <p>
            Award-winning hackathon project revolutionizing speech therapy gaps for patients
            with autism and post-stroke challenges. Developed an AI-driven lip-reading
            assistant integrated AV-HuBERT for speech decoding and DeepFace for emotion
            tracking. Fine-tuned HuBERT on a 20-word vocabulary, achieving {"\u003c"}300 ms
            inference latency and 90% emotion detection accuracy. Implemented camera stream
            analysis with automated SMTP real time-based report generation for instant
            clinician feedback.
          </p>

          <p style={{ marginTop: 8 }}>
            <a
              href="https://devpost.com/software/echoes-6vy41q"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--accent)",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Live demo
            </a>
          </p>
        </div>

        {/* ========== SeeBeyond ========== */}
        <div className="project">
          <a
            href="https://drive.google.com/file/d/14Ht4iWE_lF5SMBcDPjjLCBTUUi-v7-SR/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mock07} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://drive.google.com/file/d/14Ht4iWE_lF5SMBcDPjjLCBTUUi-v7-SR/view"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-title"
          >
            <h2>SeeBeyond for visually challenged</h2>
          </a>
          <p>
            Built an image captioning evaluator for visually impaired using VizWiz (39K+ images)
            dataset, fine-tuned BLIP-2 and LLaVA, and evaluated with BLEU, ROUGE, METEOR, and
            cosine similarity. It adapts on the fly and provides accurate image-to-text translation.
            Skills: BLIP2, LLaVA, React, OCR
          </p>
        </div>

        {/* ========== Moodify Market ========== */}
        <div className="project">
          <a
            href="https://devpost.com/software/moodify-market?ref_content=my-projects-tab&ref_feature=my_projects"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mock06} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://devpost.com/software/moodify-market?ref_content=my-projects-tab&ref_feature=my_projects"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-title"
          >
            <h2>Moodify Market</h2>
          </a>
          <p>
            Built a Next.js + Node.js web app integrating Spotify API for real-time mood-based
            music curation with MongoDB as a backend. Skills: Blockchain, Next.js, Node.js,
            MongoDB, Crypto, Spotify API, DAIN, Metaplex
          </p>
        </div>

        {/* ========== Anti-Infiltration ========== */}
        <div className="project">
          <a
            href="https://devpost.com/software/he-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://devpost.com/software/he-4"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-title"
          >
            <h2>Anti-Infiltration Obstacle System</h2>
          </a>
          <p>
            Designed a real-time border surveillance system, trained YOLO with OpenCV for
            human/animal/object detection, obstacle classification, and suspicious activity
            alerts across borders. Skills: OpenCV, YOLO, Python
          </p>
        </div>

      </div>
    </div>
  );
}

export default Project;
