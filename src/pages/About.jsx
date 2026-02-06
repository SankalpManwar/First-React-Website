import "./About.css";

export default function About() {
  return (
    <div className="box">
    <div className="about-page">
      <h1  style={{ color: "#000", marginBottom: "1.5rem" , textAlign : "center" }}>About Us</h1>
     <div >
      <div className="sunny" style={{marginLeft : "15px"}}>
      <p style={{ color: "#1b1919ff",
                  marginBottom: "1.5rem",  
                  height: "300px",
                  width: "800px"
                   }}>Founded in 2005,our company specializes in creating custom AI-powered websites that help businesses grow and succeed online. With a proven track record of delivering high-quality, visually appealing, and user-friendly websites, we tailor each project to meet our clients’ unique goals. Our innovative approach combines the latest technology with creative design to ensure an online presence that drives engagement and business results. We are proud of the strong relationships we’ve built and the success our clients have achieved through our Method.
      </p>
      </div>
    </div>
      </div>
    </div>
  );
}

