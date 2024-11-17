import React from 'react'
import './stylesheet/footer.css'

const Footer = () => {
  return (
    <>
    <div id="contact_me">
    <div>
      <p className="head">Contact Me</p>
      <p className="subhead">Send me a message</p>
      <div id="input_box">
        <input id="input1" type="text" placeholder="Your name" />
        <input id="input2" type="email" placeholder="Your e-mail" />
        <textarea id="input3" type="text" cols="40" rows="5" placeholder="Thoughts"></textarea>
        <a href="#" className="Submit">Submit</a>
      </div>
    </div>
    <div>
      <p className="head">Sitemap</p>
      <p className="subhead">All our pages</p>
      <ul id="page_list">
        <li><a className="pages" href="#">Home</a></li>
        <li><a className="pages" href="#">Reviews</a></li>
        <li><a className="pages" href="#">Contract</a></li>
        <li><a className="pages" href="#">About</a></li>
        <li><a className="pages" href="#">Contact</a></li>
        <li><a className="pages" href="#">Links</a></li>
      </ul>
    </div>
  </div>

  <footer>
    <p id="Copyright">Copyright 2023. All rights reserved.</p>
  </footer>
    </>
  )
}

export default Footer
