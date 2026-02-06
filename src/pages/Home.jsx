import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>We Build Websites That Move Your Business Forward</h1>
        <p>We craft animated, high-impact websites that leave a lasting impression.</p>
        <div className="buttons">
          <Link to="/Get-started">
            <button className="primary-btn">Apply To Build</button>
          </Link>
          <Link to="/Discover">
            <button className="secondary-btn">See Our Work</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

