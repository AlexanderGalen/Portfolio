import React, { useState, } from "react";

export default function Contact() {

  let [contactData, setContactData] = useState({
    name: "",
    message: "",
    email: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    // request api with data

    fetch("/api/email", {
      method: "POST",
      mode: "same-origin",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify({
        name: contactData.name,
        message: contactData.message,
        email: contactData.email
      })
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })

  }

  function handleInputChange(e) {
    setContactData(contactData => ({
      ...contactData,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <div className="form-group p-4">
          <label htmlFor="name" className="mb-2">Name</label>
          <input className="form-control mb-4" name="name" id="name" type="name" onChange={handleInputChange} value={contactData.name} />
          <label htmlFor="email" className="mb-2">Email</label>
          <input className="form-control mb-4" name="email" id="email" type="email" onChange={handleInputChange} value={contactData.email} />
          <label htmlFor="message" className="mb-2">Message</label>
          <textarea className="form-control mb-4" name="message" id="contactMessage" cols="30" rows="10" placeholder="Input your messages" onChange={handleInputChange} value={contactData.message} />
          <button type="submit" className="btn form-control btn-success">Send</button>
        </div>
      </form>
    </div>
  )
}
