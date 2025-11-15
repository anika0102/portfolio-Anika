import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        {/* Fancy section heading */}
        <h1 className="section-heading">Experience</h1>

        <VerticalTimeline>

          {/* ----- EXPERIENCE 1 ----- */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2025 - Los Angeles, USA"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Database Research Assistant <br />
              <small>(in collaboration with eBay)</small> <br />
            </h3>

            {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4> */}

            <p>
              <li>Collaborated with eBay to build scalable OLAP optimized storage using UNIX automation, microservices for efficient data processing.</li>
              <li>Designed and implemented a scalable JanusGraph–FoundationDB system using Java and Gremlin, improving query efficiency by 25% and enabling low-latency, real-time graph traversal.</li>
              <li>Automated performance benchmarking through CI/CD pipelines and shell scripts, reducing manual testing effort by 20%.</li>
              <li>Benchmarked In-Memory, BerkeleyDB, and FoundationDB (FDB) backends, with FDB achieving 20–30% lower latency and superior fault tolerance.</li>
              <li>Improved backend throughput by 15% and reduced query planning time by 35%, enhancing overall graph database performance and scalability.</li>
            </p>
          </VerticalTimelineElement>

          {/* ----- EXPERIENCE 2 ----- */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 to 2024 - Hyderabad, India"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Consultant, HighRadius</h3>

            {/* <h4 className="vertical-timeline-element-subtitle">Hyderabad, India</h4> */}

            <p>
              <li>Developed Python and SQL based ETL workflows integrating the Cash Application module for global clients.</li>
              <li>Automated Account Receivables (AR) reconciliation and secure SFTP data exchange, cutting invoice matching time by 98%.</li>
              <li>Optimized CI/CD data pipelines and analyzed large-scale Order to Cash (OTC) workflows, enhancing AR reconciliation by 40%.</li>
              <li>Enhanced SQL queries and optimized data models, boosting pipeline performance by 20%.</li>
              <li>Streamlined onboarding of new banking clients by automating data-mapping scripts, reducing integration time by 50%.</li>

              {/* <li>Received “Spot Award” and ESOP for high performance, client communication, and delivery excellence.</li> */}
            </p>
          </VerticalTimelineElement>

          {/* -------------------------------------------------- */}
          {/* Your older internship blocks remain commented OUT */}
          {/* -------------------------------------------------- */}

          {/*
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Staff Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Laie, HI</h4>
            <p>
              Full-stack Development, API Development, User Experience
            </p>
          </VerticalTimelineElement>
          */}

          {/*
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Analyst Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">T</h4>
            <p>
              Automation, Data Governance, Statistical Analysis
            </p>
          </VerticalTimelineElement>
          */}

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
