import React from "react";
import "./Footer.css";
import { useState } from "react";
const Footer = () => {
  const [email, setEmail] = useState();

  const handleEmail = () => {
    if (email === "") {
      alert("Please enter your name and message");
      return;
    }

    fetch(
      "https://realtime-data-3f117-default-rtdb.asia-southeast1.firebasedatabase.app/product.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEmail("");
      });
  };

  return (
    <div className="main">
      <div className="foot"> AccioJob</div>
      <hr></hr>
      <div className="footer">
        <div className="mid">
          <h4 style={{ color: "black" }}>Company</h4>
          <p>About Us</p>
          <p>Carrier</p>
          <p> We are hiring</p>
          <p>Blog</p>
        </div>

        <div className="mid">
          <h4 style={{ color: "black" }}>Legal</h4>
          <p>About Us</p>
          <p>Carrier</p>
          <p> We are hiring</p>
          <p>Blog</p>
        </div>

        <div className="mid">
          <h4 style={{ color: "black" }}>Features</h4>
          <p>Business Marketing </p>
          <p>User Analytic</p>
          <p> Live Chat</p>
          <p>Unlimited Support</p>
        </div>

        <div className="mid">
          <h4 style={{ color: "black" }}>Resources</h4>
          <p>IOS and Android</p>
          <p>Watch a Demo</p>
          <p>Customer</p>
          <p>API</p>
        </div>
        <div className="mid">
          <h4 style={{ color: "black" }}> Get in Touch</h4>
          <form>
            <input
              style={{ marginLeft: "17px" }}
              type="email"
              name="Your Email"
              placeholder="Your Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" onClick={handleEmail} className="subs">
              Subscribe
            </button>
          </form>
          <p>Lorem impsum dolar amit</p>
        </div>
      </div>
      <div className="end">
        <p className="textend">Made With ❤️ at Acciojob</p>
      </div>
    </div>
  );
};

export default Footer;
