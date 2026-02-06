import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import "./GetStarted.css";

export default function GetStarted() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted 🚀");
  };

  return (
    <div className="getstarted-page">
      
      <div className="back-btn">
        <Link to="/">
          <ArrowBackIosNewIcon  style={{color:"initial", paddingTop:"3px"}}/>
        </Link>
      </div>

    
      <div className="form-card">
        <h1>Start Your Project</h1>
        <p>Tell us about your project — we’ll handle the rest.</p>

        <form onSubmit={handleSubmit}>
          
         
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Sankalp Manwar"
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="sunny@example.com"
              required
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Project Type</label>
            <select
              name="projectType"
              required
              onChange={handleChange}
            >
              <option value="">Select Project</option>
              <option>Website Design</option>
              <option>Animated Website</option>
              <option>E-commerce Site</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Budget Range</label>
            <select
              name="budget"
              required
              onChange={handleChange}
            >
              <option value="">Select Budget</option>
              <option>Under $1,000</option>
              <option>$1,000 – $3,000</option>
              <option>$3,000 – $5,000</option>
              <option>$5,000+</option>
            </select>
          </div>

          <div className="form-group">
            <label>Project Details</label>
            <textarea
              rows="4"
              name="message"
              placeholder="Describe your project idea..."
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit Project →
          </button>

        </form>
      </div>
    </div>
  );
}


