import React, {useState} from "react";
import nodemailer from "nodemailer";
import * as dotenv from 'dotenv'
dotenv.config()

let transporter = nodemailer.createTransport({
  host: "send.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: process.env.mailUser,
    pass: process.env.mailPass,
  }
})

export default function Contact() {
  let name = useState();
  let message = useState();
  let email = useState();

  function handleSumbmit() {
    sendEmail(name, email, message);
  }

  function sendEmail(name, email, message) {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        console.log(err)
      }
      else {
        console.log(info)
      }
    })
  }

  function handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value    });
  }

  return (
    <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group p-4">
            <label htmlFor="name" className="mb-2">Name</label>
            <input className="form-control mb-4" id="name" type="name" onChange={handleInputChange} value={name}/>
            <label htmlFor="email" className="mb-2">Email</label>
            <input className="form-control mb-4" id="email" type="email" onChange={handleInputChange} value={email} />
            <label htmlFor="message" className="mb-2">Message</label>
            <textarea className="form-control mb-4" name="message" id="contactMessage" cols="30" rows="10" placeholder="Input your message" value={message} />
            <button type="button" className="btn form-control btn-success">Send</button>
          </div>
        </form>
    </div>
  )
}
