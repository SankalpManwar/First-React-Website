import "./Contact.css"; 

export default function Discover() {
  return (
    <div className="boxcontact">
<form className="contact-form">
  <h1  style={{ color: "#000", marginBottom: "1.5rem" , textAlign : "center" }}>Contact Us</h1>
          <label>Name</label>
          <input
            type="text"
            placeholder="Sankalp Manwar"
            required
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="sankalpmanwar@example.com"
            required
          />


          <label>Message</label>
          <textarea
            rows="4"
            placeholder="Briefly describe your project and what you’re looking to build"
            required
          ></textarea>

          <div className="form-bottom">
            <button type="submit" className="send-btn">
              Send
            </button>
          </div>
        </form>
    </div>
  );
}


