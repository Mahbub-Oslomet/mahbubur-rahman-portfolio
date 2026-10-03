import Image from "next/image";
import {
  ArrowUpRight,
  BrainCircuit,
  BriefcaseBusiness,
  CheckCircle2,
  Cloud,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Network,
  ShieldCheck,
  Sparkles,
  Terminal,
  Linkedin,
  Menu,
  X
} from "lucide-react";

const skills = [
  { title: "Networking & Infrastructure", icon: Network, items: ["BGP", "OSPF", "VLAN", "Routers & Switches", "Firewalls", "VPN", "DWDM", "Fiber Optics", "Wi‑Fi", "Microwave PtP/PtMP"] },
  { title: "Cloud & IT Operations", icon: Cloud, items: ["Microsoft Azure", "Microsoft 365", "Cloud identities", "MDM", "Windows", "IT service delivery", "ServiceNow", "Jira"] },
  { title: "Cybersecurity", icon: ShieldCheck, items: ["Firewalls", "ACL", "VPN", "Access control", "Endpoint support", "Threat landscape fundamentals"] },
  { title: "AI & Development", icon: BrainCircuit, items: ["Python", "C/C++", "TensorFlow", "PyTorch", "NumPy", "Pandas", "GANs", "CNNs", "RNNs", "Git/GitHub"] }
];

const experience = [
  {
    date: "Aug 2024 — Jul 2025",
    role: "L2 Desktop Support Engineer",
    company: "Allied Worldwide Limited",
    location: "Norway",
    points: [
      "Delivered prompt and professional IT support, resolving user issues efficiently.",
      "Handled cloud identities, system imaging, asset management and mobile device management.",
      "Installed, upgraded and troubleshot Windows OS and Microsoft 365.",
      "Maintained and supported docking stations, printers and other IT peripherals."
    ]
  },
  {
    date: "Nov 2017 — Jul 2022",
    role: "Assistant Network Engineer",
    company: "Info-Sarker Phase-3 Project, Bangladesh Computer Council",
    location: "Bangladesh",
    points: [
      "Designed and managed IP networks using BGP, OSPF and VLAN.",
      "Oversaw optical fiber rollout using HDD and overhead techniques and conducted site surveys.",
      "Conducted Pre-Acceptance Testing (PAT) and Final Acceptance Testing (FAT).",
      "Supported 24/7 uptime of DWDM optical fiber networks using E-site and NetECo.",
      "Managed LAN infrastructure, video conferencing, software licensing and access controls.",
      "Prepared technical and progress reports for stakeholders."
    ]
  },
  {
    date: "Dec 2015 — Oct 2017",
    role: "System Engineer",
    company: "Augere Wireless Broadband (Bangladesh) Ltd",
    location: "Bangladesh",
    points: [
      "Monitored and maintained system performance and network infrastructure.",
      "Installed and configured Wi‑Fi access points from Ubiquiti, Altai, Cisco and ZTE.",
      "Deployed routers, switches and IP cameras at client locations.",
      "Configured routers, switches, firewalls, VPNs and load balancers using BGP, OSPF, VLAN and ACL."
    ]
  },
  {
    date: "Jan 2015 — Nov 2015",
    role: "Junior Engineer",
    company: "Grambangla Systems Limited",
    location: "Bangladesh",
    points: [
      "Designed and deployed wired and wireless IP networks.",
      "Configured Cisco, Huawei and Mikrotik network devices.",
      "Installed and maintained PtP and PtMP microwave links using Motorola, Cambium and Ubiquiti equipment."
    ]
  }
];

const projects = [
  {
    number: "01",
    title: "Frequency-Based Synthetic EEG Data Generation Using GAN",
    tag: "Applied AI / MSc Project",
    description:
      "A focused AI project around synthetic EEG generation, with emphasis on Alpha and Theta frequency bands.",
    tech: ["Python", "GAN", "Deep Learning", "EEG", "Signal Processing"]
  },
  {
    number: "02",
    title: "Bangladesh Government ICT Infrastructure — Info-Sarker Phase-3",
    tag: "Network Infrastructure",
    description:
      "Enterprise/government ICT infrastructure work involving IP networking, fiber deployment, DWDM, monitoring, LAN and stakeholder reporting.",
    tech: ["BGP", "OSPF", "VLAN", "DWDM", "Fiber", "NMS"]
  },
  {
    number: "03",
    title: "Wireless & Network Infrastructure Deployment",
    tag: "Network Engineering",
    description:
      "Deployment and support of wireless access points, client-site network equipment, microwave links, firewalls, VPNs and load balancing.",
    tech: ["Ubiquiti", "Cisco", "ZTE", "Altai", "VPN", "Firewall"]
  }
];

const certifications = [
  "Fortinet Training Institute — NSE 1: Introduction to the Threat Landscape 3.0 (2026)",
  "AI Fluency: Framework & Foundations — Anthropic, UCC & Ringling College of Art and Design (2026)",
  "Huawei Certified ICT Associate (HCIA) — Routing & Switching",
  "Cisco Certified Network Associate (CCNA) — Academic Module",
  "Oracle Cloud Infrastructure Foundations 2020 Certified Associate",
  "Linux 7 System & Network Administration — CSL Training Center"
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#home"><span>MR</span> Md Mahbubur Rahman</a>
        <div className="navlinks">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-cta" href="#contact">Let&apos;s connect <ArrowUpRight size={16}/></a>
      </nav>

      <section id="home" className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse"/> Available for IT & Technology opportunities</div>
            <h1>Network & IT<br/><em>Infrastructure</em> Engineer</h1>
            <p className="hero-lead">
              8+ years across enterprise networking, systems administration, technical support and IT operations, combined with an MSc in Applied Artificial Intelligence.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore my work <ArrowUpRight size={18}/></a>
              <a className="button secondary" href="/cv.pdf" download>Download CV <Download size={17}/></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={16}/> Dhaka, Bangladesh</span>
              <span><Sparkles size={16}/> Norway experience</span>
              <span><GraduationCap size={16}/> MSc Applied AI</span>
            </div>
          </div>

          <div className="hero-card profile-card">
  <div className="profile-photo-wrapper">
    <Image
      src="/profile.jpg"
      alt="Md Mahbubur Rahman"
      width={360}
      height={360}
      className="profile-photo"
      priority
    />
  </div>

  <div className="profile-info">
    <span>NETWORK & IT INFRASTRUCTURE</span>
    <h2>Md Mahbubur Rahman</h2>
    <p>
      Infrastructure · Networking · Cybersecurity · Applied AI
    </p>
  </div>

  <div className="card-status">
    <CheckCircle2 size={16} />
    Building secure, scalable systems
  </div>
</div>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="section-label">01 / ABOUT</div>
        <div className="two-col">
          <div>
            <h2>Technology is strongest when infrastructure, security and intelligence work together.</h2>
          </div>
          <div className="body-copy">
            <p>
              Experienced Network and IT Infrastructure Engineer with expertise in enterprise networking, systems administration, technical support and IT operations.
            </p>
            <p>
              Holds a Master&apos;s degree in Applied Artificial Intelligence from Oslo Metropolitan University and has international professional experience in Norway.
            </p>
            <p>
              Experienced in network design and deployment, cloud services management, cybersecurity and IT service delivery, with a focus on secure, scalable and high-availability solutions.
            </p>
          </div>
        </div>
        <div className="stats">
          <div><strong>8+</strong><span>Years experience</span></div>
          <div><strong>4</strong><span>Core career domains</span></div>
          <div><strong>MSc</strong><span>Applied Artificial Intelligence</span></div>
          <div><strong>NO</strong><span>International experience</span></div>
        </div>
      </section>

      <section id="experience" className="section dark">
        <div className="section-label">02 / EXPERIENCE</div>
        <div className="section-heading">
          <h2>Professional journey</h2>
          <p>From network engineering and national ICT infrastructure to international desktop support and IT operations.</p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={item.company}>
              <div className="timeline-date">{item.date}</div>
              <div className="timeline-dot"/>
              <div className="timeline-content">
                <div className="role-line"><h3>{item.role}</h3><span>{item.location}</span></div>
                <h4>{item.company}</h4>
                <ul>{item.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-label">03 / EXPERTISE</div>
        <div className="section-heading">
          <h2>Technical toolkit</h2>
          <p>A practical mix of infrastructure, cloud, security and AI capabilities.</p>
        </div>
        <div className="skill-grid">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return <article className="skill-card" key={skill.title}>
              <div className="icon-box"><Icon size={23}/></div>
              <h3>{skill.title}</h3>
              <div className="tags">{skill.items.map((x) => <span key={x}>{x}</span>)}</div>
            </article>
          })}
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-label">04 / SELECTED WORK</div>
        <div className="section-heading">
          <h2>Projects & applied work</h2>
          <p>Selected work that connects your infrastructure background with your Applied AI education.</p>
        </div>
        <div className="project-grid">
          {projects.map((p) => <article className="project-card" key={p.number}>
            <div className="project-number">{p.number}</div>
            <span className="project-tag">{p.tag}</span>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tags">{p.tech.map((x) => <span key={x}>{x}</span>)}</div>
          </article>)}
        </div>
      </section>

      <section className="section education dark">
        <div className="section-label">05 / EDUCATION & CERTIFICATIONS</div>
        <div className="education-grid">
          <div>
            <h2>Academic foundation</h2>
            <div className="edu-card">
              <span>2022 — 2024 · Oslo, Norway</span>
              <h3>Master of Science in Applied Artificial Intelligence</h3>
              <p>Oslo Metropolitan University — OsloMet</p>
            </div>
            <div className="edu-card">
              <span>2011 — 2014 · Dhaka, Bangladesh</span>
              <h3>BSc in Electronics & Telecommunications Engineering</h3>
              <p>Daffodil International University</p>
            </div>
          </div>
          <div>
            <h2>Certifications</h2>
            <div className="cert-list">
              {certifications.map((c) => <div key={c}><CheckCircle2 size={18}/><span>{c}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="contact-card">
          <div>
            <div className="section-label">06 / CONTACT</div>
            <h2>Let&apos;s build something reliable.</h2>
            <p>For IT infrastructure, networking, IT operations, cybersecurity or technology opportunities, feel free to get in touch.</p>
          </div>
          <div className="contact-links">
            <a href="mailto:mahbub.ete1290@gmail.com"><Mail size={18}/> mahbub.ete1290@gmail.com</a>
            <a href="tel:+8801813818363"><Terminal size={18}/> +880 1813 818363</a>
            <a href="https://www.linkedin.com/in/mahbubur-rahman23" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn <ExternalLink size={14}/></a>
            <a href="https://github.com/Mahbub-Oslomet" target="_blank" rel="noreferrer"><Github size={18}/> GitHub <ExternalLink size={14}/></a>
          </div>
        </div>
      </section>

      <footer>
        <span>© {new Date().getFullYear()} Md Mahbubur Rahman</span>
        <span>Network · Infrastructure · Security · AI</span>
      </footer>
    </main>
  );
}
