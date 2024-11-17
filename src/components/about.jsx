import React from 'react'
import './stylesheet/about.css'

const About = () => {
  return (
    <div className='aboutme'>

      {/* <!-- Photo and name --> */}
      <div id='photo_n_name'>
        <img id='profile' src="../aboutme photos/profile-pic (4).png" alt="" />
        <img id='name' src="Group 50.svg" alt="" />
      </div>

      {/* About me Section */}
      <div id='aboutme'>
        <p className='heading'>About</p>
        <p className='description'>Lorem ipsum dolor sit amet consectetur. Morbi lorem ac eget aliquet vulputate at felis. Sit
          vel suscipit cras quis mattis eget lectus. Augue at cras semper mollis laoreet et dignissim consectetur. Libero
          urna urna mi ac habitasse id tincidunt. Euismod libero aliquet lobortis elementum semper. Enim orci id sed at id
          massa sed nunc pellentesque. Dignissim ut semper imperdiet nisl. In egestas ullamcorper nisl maecenas cursus
          tristique molestie. Vitae ultrices proin at sit. Est risus sapien gravida eget ac at iaculis consectetur.
          Pellentesque arcu nisi viverra turpis vestibulum augue mi ut.
          <br /><br />Sit porttitor aenean euismod mi dignissim morbi velit. Vel commodo diam sagittis leo varius ultrices augue gravida
          id. Dui nec id tincidunt dolor integer magna volutpat sodales. Pulvinar malesuada donec.
        </p>

        <div id='links'>
          <img className='link' src="instagram.svg" alt="" />
          <img className='link' src="dribbble.svg" alt="" />
          <img className='link' src="behance.svg" alt="" />
          <a href="https://www.upwork.com/freelancers/prateekk3" target="_blank">
            <img className='link' src="upwork.svg" alt="" />
          </a>
        </div>
      </div>

      {/* Experience section */}
      <div id='exp'>
        <p className='heading'>EXPERIENCE</p>

        <div className='xp'>
          <p className='head2'>Upwork</p>
          <p className='subhead2'>July 2022 - Present...</p>
          <p className='description'>Lorem ipsum dolor sit amet consectetur. Morbi lorem ac eget aliquet vulputate at felis. Sit vel suscipit cras quis mattis eget lectus. Augue at cras semper mollis laoreet et dignissim consectetur. Libero urna urna mi ac habitasse id tincidunt. Euismod libero aliquet lobortis elementum semper.</p>
        </div>

        <div className="xp">
          <p className="head2">Internship at WhiteHat Codes Pvt. Ltd.</p>
          <p className="subhead2">Feb 2023 - May 2023</p>
          <p className="description">I worked here as a graphic designer intern and learned a lot. I created many graphical
            elements as well as many others. It was a wonderful experience.</p>
        </div>
      </div>


      {/* skill section */}
      <div className="Skills">

        <p className="heading">SKILLS</p>
        <div className="arranged">
          <div className="line line-1">
            <div className="skill">Logo Design</div>
            <div className="skill">Vector Tracing</div>
            <div className="skill">Text Styling</div>
            <div className="skill">Website Design</div>
          </div>
          <div className="line line-2">
            <div className="skill">Character Design</div>
            <div className="skill">2D Illustration</div>
            <div className="skill">Icon Design</div>
          </div>
          <div className="line line-3">
            <div className="skill">Sketching</div>
            <div className="skill">Banner ADs</div>
            <div className="skill">Typography</div>
            <div className="skill">Mascots Design</div>
          </div>
        </div>
      </div>

      <div className='skills-2'>
        <p className="heading">SKILLS</p>
        <div className='skill-2'>
          <p>Logo Design</p>
          <p className="p2">Text Stying</p>
        </div>
        <div className='skill-2'>
          <p>Vector Tracing</p>
          <p className="p2">Banner ADs</p>

        </div>
        <div className='skill-2'>
          <p>2D Illustration</p>
          <p className="p2">Sketching</p>

        </div>
        <div className='skill-2'>
          <p>Website Design</p>
          <p className="p2">Typography</p>

        </div>
        <div className='skill-2'>
          <p>Icon Design</p>
          <p className="p2">Mascot Design</p>

        </div>
        <div className='skill-2'>
          <p className='p3'>Character Design</p>
        </div>
      </div>

      {/* <!-- Software Section  --> */}

      <div className="Skills ">
        <p className="heading">SOFTWARES</p>
        <div className="arranged">
          <div className="line">
            <div className="skill">Adobe Indesign</div>
          </div>
          <div className="line">
            <div className="skill">Figma</div>
            <div className="skill">Canva</div>
          </div>
          <div className="line">
            <div className="skill">Adobe Illustrator</div>
          </div>
        </div>
      </div>

      {/* for mobile */}
      <div className="sf-Skills">
        <p className="heading">SOFTWARES</p>
        <div className="skill"><p>Adobe Indesign</p></div>
        <div className="skill"><p>Figma</p></div>
        <div className="skill"><p>Canva</p></div>
        <div className="skill"><p>Adobe Illustrator</p></div>
      </div>
    </div>
  )
}

export default About
