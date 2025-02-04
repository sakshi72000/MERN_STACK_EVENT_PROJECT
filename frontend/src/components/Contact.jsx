import React, { useState } from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';

const Contact = () => {
  const[name, SetName] = useState("");
  const[email, SetEmail] = useState("");
  const[subject, SetSubject] = useState("");
  const[message, SetMessage] = useState("");


    const handleSendMessage = async(e)=>{
      e.preventDefault();
      await axios
      .post("http://localhost:4000/api/v1/message/send",
      {
        name,
         email,
         subject, 
         message
        },
        {
          withCredentials:true,
           headers:{"Content-Type":"application/json"

          },
        }
      )
      .then((res)=>{
        toast.success(res.data.message);
        SetName("");
        SetEmail("");
        SetMessage("");
        SetSubject("");

      }).catch(error=>{
        toast.error(error.response.data.message);

      });
    };

  return (
    <>
      <div className="contact container">
        <div className='banner'>

          <div className="item">
            <h4>Address</h4>
            <p>Any Where, Any City, 4532</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call us: +91 22222222222</p>
          </div>
          <div className="item">
            <h4>Mail us</h4>
            <p>abc@gmail.com</p>
          </div>
        </div>
        <div className='banner'>

          <div className="item">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57929.23355645912!2d67.01519255!3d24.8441321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e70a31f45a9%3A0x25e252450977ec12!2sSaddar%20Town%2C%20Karachi%2C%20Sindh!5e0!3m2!1sen!2s!4v1709099958323!5m2!1sen!2s"
              style={{ border: 0, width: "100%", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="item">

            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input 
                type="text"
                 placeholder='Name' 
                 value={name} 
                 onChange={(e) => SetName(e.target.value)}
                 />
                <input
                 type="email" 
                placeholder='E-mail'
                 value={email}
                  onChange={(e) => SetEmail(e.target.value)}
                   />
              </div>
              <input
               type="text"
               placeholder='Subject'
                value={subject}
                 onChange={(e) => SetSubject(e.target.value)}
                 />
              <textarea
              rows={10} 
               placeholder='Message'
                value={message}
                 onChange={(e) => SetMessage(e.target.value)}
                 />
                 <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact

