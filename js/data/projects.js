/**
 * Team's Work (projects) data
 *
 * To add a new project, copy one block below and edit it:
 *   - id: unique, no spaces (e.g. 'proj-7')
 *   - title: shown on the card and modal header
 *   - image: path to the card image (put files in assets/images/projects/)
 *   - shortDesc: one-line summary on the card
 *   - fullContent: HTML for the modal body (the image is added automatically)
 */
window.PROJECTS = [
    {
        id: 'proj-1',
        title: 'Autonomous Vehicle Perception System',
        image: 'assets/images/projects/proj-1.jpg',
        shortDesc: 'Real-time object detection and tracking for autonomous navigation',
        fullContent: `
            <h3>Project Overview</h3>
            <p>This project develops a comprehensive perception system for autonomous vehicles, combining LiDAR, radar, and camera data fusion for robust object detection and tracking in diverse weather conditions.</p>
            <h3>Technical Approach</h3>
            <ul>
                <li>Multi-sensor fusion using Kalman filtering and deep learning</li>
                <li>Real-time processing on embedded NVIDIA Orin platform</li>
                <li>Adverse weather simulation and testing framework</li>
                <li>Integration with ROS 2 and Autoware.Auto stack</li>
            </ul>
            <h3>Team</h3>
            <p>Dr. Mehmed Kantardzic (PI), 3 PhD students, 2 MS students, industry partner: Ford Motor Company</p>
            <h3>Status</h3>
            <p>Phase 2: Field testing on Louisville test track. Targeting SAE Level 4 demonstration by Q4 2026.</p>
            <h3>Funding</h3>
            <p>NSF CPS Grant ($1.2M), Ford Motor Company ($400K), KY EPSCoR ($150K)</p>
        `
    },
    {
        id: 'proj-2',
        title: 'AI-Powered Cybersecurity Threat Detection',
        image: 'assets/images/projects/proj-2.jpg',
        shortDesc: 'Machine learning models for real-time network anomaly detection',
        fullContent: `
            <h3>Project Overview</h3>
            <p>Development of novel machine learning algorithms for detecting zero-day attacks and advanced persistent threats in enterprise networks using unsupervised and semi-supervised learning techniques.</p>
            <h3>Technical Approach</h3>
            <ul>
                <li>Graph neural networks for modeling network behavior</li>
                <li>Federated learning for privacy-preserving threat intelligence sharing</li>
                <li>Explainable AI for analyst-friendly alert triage</li>
                <li>Integration with SIEM platforms (Splunk, Elastic)</li>
            </ul>
            <h3>Team</h3>
            <p>Dr. Adel Elmaghraby (PI), 4 PhD students, collaboration with UofL Digital Transformation Center</p>
            <h3>Status</h3>
            <p>Deployed in pilot at two healthcare systems. 94% detection rate for novel threats with &lt;1% false positive rate.</p>
            <h3>Publications</h3>
            <p>3 papers at IEEE S&P 2025, 2 at USENIX Security 2024</p>
        `
    },
    {
        id: 'proj-3',
        title: 'Smart Manufacturing Digital Twin Platform',
        image: 'assets/images/projects/proj-3.jpg',
        shortDesc: 'Real-time digital twin for predictive maintenance and optimization',
        fullContent: `
            <h3>Project Overview</h3>
            <p>Creation of a scalable digital twin platform for discrete manufacturing, enabling real-time monitoring, predictive maintenance, and production optimization through physics-informed machine learning.</p>
            <h3>Technical Approach</h3>
            <ul>
                <li>Physics-informed neural networks for equipment modeling</li>
                <li>Edge computing architecture for low-latency inference</li>
                <li>OPC-UA and MQTT integration with existing PLC/SCADA</li>
                <li>AR/VR interface for operator visualization</li>
            </ul>
            <h3>Team</h3>
            <p>Dr. Xiaoyu Liu (PI), Dr. Dan Popa (Co-PI), 2 PhD students, 4 undergraduate researchers</p>
            <h3>Partners</h3>
            <p>GE Appliances, Raytheon, Kentucky Manufacturing Extension Partnership</p>
            <h3>Status</h3>
            <p>Pilot deployment at GE Appliances Louisville facility. 23% reduction in unplanned downtime achieved.</p>
        `
    },
    {
        id: 'proj-4',
        title: 'Quantum-Resistant Cryptography for IoT',
        image: 'assets/images/projects/proj-4.jpg',
        shortDesc: 'Lightweight post-quantum cryptographic primitives for constrained devices',
        fullContent: `
            <h3>Project Overview</h3>
            <p>Research and implementation of NIST-standardized post-quantum cryptographic algorithms optimized for resource-constrained IoT devices, ensuring long-term security for critical infrastructure.</p>
            <h3>Technical Approach</h3>
            <ul>
                <li>Optimized implementations of CRYSTALS-Kyber and CRYSTALS-Dilithium</li>
                <li>Hardware acceleration on RISC-V and ARM Cortex-M platforms</li>
                <li>Side-channel resistant implementations</li>
                <li>Formal verification using EasyCrypt</li>
            </ul>
            <h3>Team</h3>
            <p>Dr. Mahmoud El-Gayyar (PI), 2 PhD students, NIST PQC migration project collaboration</p>
            <h3>Status</h3>
            <p>Reference implementation submitted to NIST. Open-source library released under Apache 2.0.</p>
            <h3>Impact</h3>
            <p>Adopted by 3 major IoT platform vendors. Contributing to IETF standards for PQC in constrained environments.</p>
        `
    },
    {
        id: 'proj-5',
        title: 'Accessible Computing Education Platform',
        image: 'assets/images/projects/proj-5.jpg',
        shortDesc: 'Inclusive learning platform for neurodiverse computer science students',
        fullContent: `
            <h3>Project Overview</h3>
            <p>Design and evaluation of an adaptive learning platform that personalizes computer science education for students with diverse learning needs, including ADHD, autism spectrum, and dyslexia.</p>
            <h3>Technical Approach</h3>
            <ul>
                <li>Multimodal content delivery (visual, auditory, kinesthetic)</li>
                <li>Adaptive pacing and scaffolding based on learning analytics</li>
                <li>Gamified progress tracking with customizable reward systems</li>
                <li>Integration with Canvas LMS and VS Code</li>
            </ul>
            <h3>Team</h3>
            <p>Dr. Olfa Nasraoui (PI), Dr. Marie Brown (Education), 3 PhD students, UofL Disability Resource Center</p>
            <h3>Status</h3>
            <p>IRB-approved user study with 120 students underway. Preliminary results show 34% improvement in completion rates.</p>
            <h3>Funding</h3>
            <p>NSF IUSE Grant ($800K), Google Award for Inclusion Research ($150K)</p>
        `
    },
    {
        id: 'proj-6',
        title: 'Federated Learning for Healthcare Analytics',
        image: 'assets/images/projects/proj-6.jpg',
        shortDesc: 'Privacy-preserving ML across hospital networks without data sharing',
        fullContent: `
            <h3>Project Overview</h3>
            <p>Development of a federated learning framework enabling collaborative machine learning across multiple healthcare institutions while maintaining patient data privacy and HIPAA compliance.</p>
            <h3>Technical Approach</h3>
            <ul>
                <li>Secure aggregation protocols with differential privacy</li>
                <li>Heterogeneous data handling (different EHR systems)</li>
                <li>Model personalization for local hospital populations</li>
                <li>Audit trails and regulatory compliance reporting</li>
            </ul>
            <h3>Team</h3>
            <p>Dr. Hichem Frigui (PI), Dr. Olfa Nasraoui (Co-PI), 3 PhD students, UofL Health, Norton Healthcare</p>
            <h3>Status</h3>
            <p>Deployed across 4 hospital systems in Kentucky. Predicting sepsis 6 hours earlier than standard protocols.</p>
            <h3>Publications</h3>
            <p>Nature Digital Medicine (2024), AMIA Annual Symposium (2024, 2025)</p>
        `
    }
];
