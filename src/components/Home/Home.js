import React, { useEffect, useRef } from "react";
import { FiArrowRight, FiArrowUpRight, FiMail, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import resumePdf from "../../Assets/Naman_Dubey.pdf";
import avatarImg from "../../Assets/avatar.svg";
import projectChatify from "../../Assets/Projects/chatify.png";
import projectLeaf from "../../Assets/Projects/leaf.png";

const experience = [
  {
    period: "Jan 2025 — June 2025",
    role: "Full Stack Developer",
    company: "Blackcoffeer",
    description:
      "Built and optimized core frontend modules for an internal project management platform using Next.js, React, and TypeScript, while improving UI responsiveness across multiple pages and strengthening reusable component architecture.",
  },
  {
    period: "Aug 2025 — Present",
    role: "Jr Software Engineer",
    company: "Current role",
    description:
      "Working on product engineering, full-stack delivery, and workflow automation with a focus on scalable user experiences, backend logic, and system reliability.",
  },
];

const projectData = [
  {
    index: "01 / 02",
    title: "Real-Time Chat Application",
    category: "Real-Time Communication",
    description:
      "Engineered a real-time chat application using React.js, Node.js, and Socket.IO with WebSocket communication, Zustand state management, and Tailwind CSS for a responsive interface. Secured the application with JWT authentication, bcrypt password hashing, and Mongoose schemas for users, messages, and conversation threads.",
    tags: ["React", "Node", "MongoDB"],
    image: projectChatify,
    live: "https://github.com/Naman313",
    caseStudy: "https://github.com/Naman313",
  },
  {
    index: "02 / 02",
    title: "Conversational Chat-Bot",
    category: "AI-Powered Document Search",
    description:
      "Engineered an AI-powered document chatbot using JavaScript and LangChain, integrating the OpenAI GPT-4 API with a Retrieval Augmented Generation pipeline, document chunking, vector embeddings, and vector database storage for precise, context-aware information extraction.",
    tags: ["React", "Node", "OpenAI API", "LangChain", "RAG"],
    image: projectLeaf,
    live: "https://github.com/Naman313",
    caseStudy: "https://github.com/Naman313",
  },
];

const skillGroups = [
  {
    heading: "01 — Tech",
    items: ["HTML", "CSS", "JavaScript", "C++", "React", "Node.js", "Express", "MongoDB"],
  },
  {
    heading: "02 — Tools",
    items: ["GitHub", "VS Code", "Figma", "Postman", "Vercel", "Netlify"],
  },
  {
    heading: "03 — AI & Automation",
    items: ["Claude", "ChatGPT", "n8n", "Prompt Engineering", "Workflow Automation"],
  },
];

const services = [
  {
    number: "01",
    title: "Frontend Development",
    text: "Production-grade React interfaces built for clarity, speed, and scalable product experiences.",
  },
  {
    number: "02",
    title: "UI/UX Implementation",
    text: "Translating design direction into clean, polished interfaces with strong interaction thinking.",
  },
  {
    number: "03",
    title: "Full-Stack Builds",
    text: "Bringing frontend and backend together for end-to-end product execution and maintainability.",
  },
  {
    number: "04",
    title: "Performance Optimization",
    text: "Improving usability, responsiveness, and loading behavior without sacrificing visual quality.",
  },
];

function Home() {
  const portfolioRef = useRef(null);

  useEffect(() => {
    const revealTargets = portfolioRef.current?.querySelectorAll(".section-shell");

    if (!revealTargets || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    revealTargets.forEach((target) => revealObserver.observe(target));

    return () => revealObserver.disconnect();
  }, []);

  return (
    <main className="portfolio-shell" ref={portfolioRef}>
      <section className="hero-section" id="home">
        <div className="section-shell hero-shell">
          <div className="hero-copy">
            <div className="eyebrow">Introduction</div>
            <h1>
              Crafting digital experiences that feel smooth, clear, and human
            </h1>

            <div className="overview-list">
              <div className="meta-row">
                <span className="meta-label">Name</span>
                <span>Naman Dubey</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Role</span>
                <span>Full Stack Developer</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">Status</span>
                <span>Available for work</span>
              </div>
            </div>

            <div className="cta-row">
              <a href="#work" className="primary-button">
                View Selected Work <FiArrowRight />
              </a>
              <a href={resumePdf} target="_blank" rel="noreferrer" className="secondary-button">
                View Resume <FiArrowUpRight />
              </a>
              <a href="#contact" className="secondary-button">
                Get in Touch
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Abstract developer profile art">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="orb orb-three" />
            <div className="hero-badge">→ An artifact from the void.</div>
          </div>
        </div>
        <div className="scroll-indicator">Scroll</div>
      </section>

      <section className="info-section" id="about">
        <div className="section-shell">
          <div className="section-header-row">
            <div className="eyebrow">About</div>
          </div>

          <div className="about-layout">
            <div className="portrait-panel">
              <img src={avatarImg} alt="Naman Dubey portrait" />
              <div className="portrait-caption">
                <span>Naman / 2026</span>
                <strong>Full Stack Dev</strong>
              </div>
            </div>

            <div className="about-copy">
              <p>
                I am a <span>full stack developer</span> with over 1.5 years of experience in developing production-ready web applications. I enjoy building reliable, user-focused digital products that balance strong architecture with thoughtful interfaces.
              </p>

              <div className="fact-grid">
                <div>
                  <span>Discipline</span>
                  <strong>Frontend Development</strong>
                </div>
                <div>
                  <span>Also</span>
                  <strong>Full-Stack Engineering</strong>
                </div>
                <div>
                  <span>Based in</span>
                  <strong>Gwalior, IN</strong>
                </div>
                <div>
                  <span>Born</span>
                  <strong>31 / 12 / 2002</strong>
                </div>
              </div>

              <div className="mini-facts">
                <div>
                  <span>Approach</span>
                  <strong>Design-first, detail-obsessed, product-minded.</strong>
                </div>
                <div>
                  <span>Focus</span>
                  <strong>Interfaces, flow, performance, and maintainability.</strong>
                </div>
                <div>
                  <span>Belief</span>
                  <strong>The web should feel good and work cleanly.</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trajectory-section" id="experience">
        <div className="section-shell">
          <div className="section-intro">
            <div className="eyebrow">Trajectory</div>
            <h2>
              The journey <span>so far.</span>
            </h2>
          </div>
          <p className="lead-copy">A practical path shaped by curiosity, problem-solving, and building things that improve how people interact with products.</p>

          <div className="timeline">
            {experience.map((item) => (
              <article key={item.period} className="timeline-item">
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-body">
                  <div className="timeline-role">{item.role}</div>
                  <div className="timeline-company">{item.company}</div>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section" id="work">
        <div className="section-shell">
          <div className="section-intro">
            <div className="eyebrow">Selected Work</div>
            <h2>
              Featured <span>projects</span>
            </h2>
          </div>
          <p className="lead-copy">Recent work across product, UI, and full-stack delivery</p>

          <div className="projects-grid">
            {projectData.map((project) => (
              <article key={project.title} className="project-card">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-header">
                  <span>{project.index}</span>
                  <a href={project.caseStudy} target="_blank" rel="noreferrer">
                    View case study <FiArrowRight />
                  </a>
                </div>
                <div className="project-meta">
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-item">{tag}</span>
                    ))}
                  </div>
                  <p>{project.description}</p>
                  <div className="project-actions">
                    <a href={project.caseStudy} target="_blank" rel="noreferrer">
                      Case study <FiArrowUpRight />
                    </a>
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live <FiArrowUpRight />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-shell">
          <div className="section-intro">
            <div className="eyebrow">Toolkit</div>
            <h2>
              The <span>craft.</span>
            </h2>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div key={group.heading} className="skill-panel">
                <div className="skill-heading">{group.heading}</div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}><span>{item}</span><FiArrowUpRight /></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-shell">
          <div className="section-intro">
            <div className="eyebrow">Services</div>
            <h2>
              What I <span>build.</span>
            </h2>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.number} className="service-card">
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="connect-section">
        <div className="section-shell connect-shell">
          <div className="connect-label">✳ LET&apos;S CONNECT!</div>
          <h2>
            Would love to connect on <span>LinkedIn.</span>
          </h2>

          <div className="social-row">
            <a href="https://www.linkedin.com/in/naman-dubey-545aa1228/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="https://github.com/Naman313" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://x.com/NamanDu50483312" target="_blank" rel="noreferrer" aria-label="Twitter"><FiTwitter /></a>
            <a href="https://leetcode.com/u/naman_dubey3131/" target="_blank" rel="noreferrer" aria-label="LeetCode"><FiMail /></a>
          </div>

          <a className="primary-button connect-button" href="https://www.linkedin.com/in/naman-dubey-545aa1228/" target="_blank" rel="noreferrer">
            Connect Now <FiArrowRight />
          </a>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-shell contact-shell">
          <div className="eyebrow">Contact</div>
          <h2>
            Let&apos;s build something <span>great</span>
          </h2>
          <p>
            Have a project in mind or want to talk about a role? Reach out and I&apos;ll get back to you soon.
          </p>

          <a href="mailto:namandubey31@gmail.com" className="contact-mail-card" aria-label="Send an email to Naman Dubey">
            <span className="mail-label">Email</span>
            <strong>namandubey31@gmail.com</strong>
            <span className="mail-action">Send email <FiArrowUpRight /></span>
          </a>
        </div>
      </section>

      <section className="closing-section">
        <div className="section-shell closing-shell">
          <div className="eyebrow">Contact</div>
          <h2>
            Let&apos;s build something <span>unforgettable.</span>
          </h2>
          <a href="mailto:namandubey31@gmail.com" className="mailto-link">namandubey31@gmail.com</a>
          <div className="closing-links">
            <a href="https://www.linkedin.com/in/naman-dubey-545aa1228/" target="_blank" rel="noreferrer">LinkedIn <FiArrowUpRight /></a>
            <a href={resumePdf} target="_blank" rel="noreferrer">Read.Resume <FiArrowUpRight /></a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
