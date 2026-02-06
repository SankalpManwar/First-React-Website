import "./Discover.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import logo from "../image/image.png";


export default function Work() {
const projects = [
  {
    title: "Fintech SaaS Dashboard",
    category: "SaaS Platform",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80", 
  },
  {
    title: "E-commerce Website",
    category: "Web Design",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "AI Landing Page",
    category: "Landing Page",
    img: "https://images.unsplash.com/photo-1677442135136-760c813028c0?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "Startup Branding",
    category: "Brand Identity",
    img: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=1600&q=80", 
  },
  {
    title: "SaaS Mobile App",
    category: "Mobile App",
    img: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1600&q=80", 
  },
  {
    title: "Modern Business Site",
    category: "Web Design",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1600&q=80", 
  },
];

const navigate = useNavigate();

  return (
    <div className="work-page">
      
      <section className="work-hero">

  <div className="back-btn" onClick={() => navigate(-1)}>
    <ArrowBackIosNewIcon />
  </div>



  <h1>See Our Work</h1>
  <p>A selection of projects we’ve crafted for startups & brands.</p>

  <button className="primary-btn">
    Consult Now →
  </button>
      </section>


      <section className="work-grid-section">
        <h2>Explore our SaaS projects</h2>

        <div className="work-grid">
          {projects.map((project, index) => (
            <div className="work-card" key={index}>
              <img src={project.img} alt={project.title} />

              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
                <span className="view-link">
                  View Project →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>


   <footer className="footer">
  <div className="footer-container">

    <img src={logo} alt="Logo" className="footer-logo-img" />

    <p className="footer-text">
      We build modern, animated websites that help businesses grow online.
    </p>

    <div className="footer-links">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </div>

    <p className="footer-copy">
      © 2005-2026 SankalpManwar. All rights reserved.
    </p>

  </div>
</footer>

    </div>
  );
}

