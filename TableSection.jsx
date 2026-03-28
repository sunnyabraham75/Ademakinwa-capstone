import { useState } from "react";

function FormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phonenumber: "",
    message: "",
    contact: "",
    question: [],
  });

  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        question: checked
          ? [...prev.question, value]
          : prev.question.filter((v) => v !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setShowModal(true);
      setFormData({
        name: "",
        email: "",
        city: "",
        phonenumber: "",
        message: "",
        contact: "",
        question: [],
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="form-section" id="form">
      <div className="form-header">
        <h2>Have Questions About Planetary Science?</h2>
        <p>
          Interested in learning more about space, astronomy, or how planetary data is collected and analyzed? Reach out and we’ll get back to you.
        </p>
      </div>

      <form onSubmit={handleSubmit} id="form">
        <section className="form-details">

          <div className="form-name-email">
            <div className="fullname">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="emailaddress">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="city-state">
            <div className="city">
              <label htmlFor="city">City</label>
              <select
                name="city"
                id="city"
                value={formData.city}
                onChange={handleChange}
                required
              >
                <option value="">Select a city</option>
                <option value="Lekki">Lekki</option>
                <option value="Ikoyi">Ikoyi</option>
                <option value="Victoria Island">Victoria Island</option>
                <option value="Banana Island">Banana Island</option>
                <option value="VGC">VGC</option>
                <option value="Chevron">Chevron</option>
                <option value="Ikate">Ikate</option>
                <option value="Freedom way">Freedom way</option>
                <option value="Osapa London">Osapa London</option>
                <option value="Peanock Garden">Peanock Garden</option>
              </select>
            </div>

            <div className="state">
              <label htmlFor="phonenumber">Phone Number</label>
              <input
                type="tel"
                name="phonenumber"
                id="phonenumber"
                placeholder="Please enter a valid phone number"
                value={formData.phonenumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="message">
            <div className="message-form">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                placeholder="Leave a message here..."
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="contactus">
              <div className="contactus-form">
                <label>How should we contact you?</label>
                <div className="radio-group">
                  <label><input type="radio" name="contact" value="phone" onChange={handleChange} /> Phone</label>
                  <label><input type="radio" name="contact" value="email" onChange={handleChange} /> Email</label>
                  <label><input type="radio" name="contact" value="both" onChange={handleChange} /> Both</label>
                </div>
              </div>

              <div>
                <label>How did you hear about us?</label>
                <div className="radio-group">
                  <label><input type="checkbox" name="question" value="friend" onChange={handleChange} /> Friend</label>
                  <label><input type="checkbox" name="question" value="ts-academy" onChange={handleChange} /> TS Academy</label>
                  <label><input type="checkbox" name="question" value="others" onChange={handleChange} /> Others</label>
                </div>
              </div>
            </div>
          </div>

          <button className="primary-button form" type="submit">
            Submit
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M10 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"/>
            </svg>
          </button>

        </section>
      </form>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Success 🎉</h3>
            <p>Your message has been sent successfully.</p>
            <button
              className="primary-button"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default FormSection;