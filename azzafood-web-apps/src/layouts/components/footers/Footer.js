import React from "react";
import { Container } from "react-bootstrap";

export default function Footers() {
  return (
    <footer>
      <div className="footer1 fixed-footer">
        <div className="container">
          <div className="row">
            <div className="location col-md-5 pt-3 text-start">
              <h1>Location</h1>
              <br />
              <p>Jl. Raya Parung No.42 Jampang, Bogor, Jawa Barat</p>
            </div>
            <div className="opens col-md-3 pt-3 text-start">
              <h1>Opens</h1>
              <br />
              <p>Senin-Minggu</p>
              <br />
              <p>09:00-22:00</p>
            </div>
            <div className="social col-md-4 pt-3 text-start">
              <h1>Social & Contacts</h1>
              <div className="medsos">
                <i class="bi bi-facebook"></i>
                <i class="bi bi-instagram"></i>
                <i class="bi bi-twitter"></i>
                <i class="bi bi-youtube"></i>
                <i class="bi bi-whatsapp"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer2">
        <div className="container">
          <p>
            &copy;2023AzzaFood
            <a
              href="https://wa.me/089611312484"
              className="ms-1"
              target={"_blank"}
            >
              Contact
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
