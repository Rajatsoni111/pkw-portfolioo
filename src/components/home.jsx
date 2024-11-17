import React from 'react'
import './stylesheet/home.css'
import { useRef, useState, useEffect } from 'react'
import { useSwipeable } from "react-swipeable";


const Home = () => {
    const [activeIndex, setActiveIndex] = useState(1); // Start with second item as active
    const trackRef = useRef(null);
  
    const items = [1, 2, 3, 4, 5]; // Array of items for the carousel
  
    // Update carousel position when activeIndex changes
    useEffect(() => {
      const itemWidth = trackRef.current.children[0].offsetWidth + 10; // Adjust for margin/gap
      const offset = -itemWidth * (activeIndex - 1); // Center the active item
      trackRef.current.style.transform = `translateX(${offset}px)`;
    }, [activeIndex]);
  
    const handleSwipe = (direction) => {
        if (direction === "left") {
          handleNext();
        } else if (direction === "right") {
          handlePrev();
        }
      };
    
      const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe("left"),
        onSwipedRight: () => handleSwipe("right"),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
      });
    // Move to next or previous item
    const handleNext = () => setActiveIndex((index) => Math.min(index + 1, items.length - 1));
    const handlePrev = () => setActiveIndex((index) => Math.max(index - 1, 0));
  

    return (
        <>
            <div id="boxes">
                <div id="outer-box">
                    <div className="show-boxes" id='show-boxes-1'>
                        <div id="show-box-1" className="show-box">
                            <p className="skill">Logo</p>
                        </div>
                        <div id="show-box-2" className="show-box">
                            <p className="skill">Character</p>
                        </div>
                    </div>
                    <div className="show-boxes">
                        <div id="show-box-4" className="show-box">
                            <p className="skill">Icons</p>
                        </div>
                        <div id="show-box-5" className="show-box">
                            <p className="skill">Banner Ads</p>
                        </div>
                        <div id="show-box-6" className="show-box">
                            <p className="skill">Typography</p>
                        </div>
                    </div>
                    <div className="show-boxes" id="show-boxes-3">
                        <div id="show-box-7" className="show-box">
                            <p className="skill">Fonts</p>
                        </div>
                        <div id="show-box-8" className="show-box">
                            <p className="skill">Illustrations</p>
                        </div>
                        <div id="show-box-9" className="show-box">
                            <p className="skill">Infographics</p>
                        </div>
                    </div>
                </div>
                <button id="more-button">More</button>
            </div>

            <div id="review-box">
                <h1>Client's Reviews</h1>
                <div id="crousel-arrows">
                    <svg onClick={handlePrev} id="prev" width="20" height="50" viewBox="0 0 30 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.46427 28.5323C-0.488091 26.5799 -0.488091 23.4093 1.46427 21.4569L21.4565 1.46471C22.8934 0.0277672 25.0332 -0.393943 26.9075 0.387002C28.7817 1.16795 30 2.97974 30 5.0102V44.9946C30 47.0094 28.7817 48.8368 26.9075 49.6178C25.0332 50.3987 22.8934 49.9614 21.4565 48.5401L1.46427 28.5479V28.5323Z"
                            fill="#A4A4A4" />
                    </svg>

                    <svg onClick={handleNext} id="next" width="20" height="50" viewBox="0 0 30 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M28.5357 28.5323C30.4881 26.5799 30.4881 23.4093 28.5357 21.4569L8.54354 1.46471C7.1066 0.0277672 4.96681 -0.393943 3.09254 0.387002C1.21828 1.16795 0 2.97974 0 5.0102V44.9946C0 47.0094 1.21828 48.8368 3.09254 49.6178C4.96681 50.3987 7.1066 49.9614 8.54354 48.5401L28.5357 28.5479V28.5323Z"
                            fill="#A4A4A4" />
                    </svg>

                </div>
                <div id="reviews">
                    <div className="carousel">
                        <div className="carousel-track" {...swipeHandlers} >
                            {Array.from({ length: 1 }).map((_, index) => (
                                <div
                                className='carousel-item'
                                onClick={() => setActiveIndex(index) }
                                style={{width:'100%',height:'100%',transform:`translateX(-${activeIndex*100}%)`}}
                                ref={trackRef} >
                                <div id="review-box-1" key={index} className={`review ${index+0 === activeIndex ? 'active' : ''}`}>
                                            <div className="client">
                                                <div className="profile" >
                                                    <img src="../1701736478455.jfif" alt="" />
                                                </div>
                                                <p className="name">Sophia Fisher</p>
                                            </div>
                                            <p className="review-text">
                                                "Prateek was wonderful to work with on our graphic design project.
                                                He was timely and produced exactly what we wanted! 100% recommend
                                                working with him."
                                            </p>
                                        </div>
                                <div id="review-box-2 "key={index} className={`review ${index+1 === activeIndex ? 'active' : ''}`}>
                                            <div className="client">
                                                <div className="profile" >
                                                    <img src="../1593239473337.jfif" alt="" />
                                                </div>
                                                <p className="name">Wilder Buchanan</p>
                                            </div>
                                            <p className="review-text">
                                                "Prateek did amazing design work for me. He was open to feedback and
                                                critique and finished all work early and to my satisfaction!"
                                            </p>
                                        </div>
                                <div id="review-box-3" key={index}  className={`review ${index+2 === activeIndex ? 'active' : ''}`}>
                                            <div className="client">
                                                <div className="profile">
                                                    <img src="../Group13.png" alt="" />
                                                </div>
                                                <p className="name">Himani Wright</p>
                                            </div>
                                            <p className="review-text">
                                                "Prateek was wonderful to work with on our graphic design project. He was timely and produced exactly what we wanted 100% recommend working with him."
                                            </p>
                                        </div>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                </div>
                <p className='swipe-text'>swipe to check</p>

            </div>

            <div id="About">
                <img src="../profile-pic (4).png" className="profile_photo" alt="" />

                <div className="description">
                    <p id="myname">Prateek Kumar</p>
                    <p id="designation">Graphic Design</p>
                    <p id="written">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod a est
                        error minus doloremque, suscipit ipsa, facilis laborum repellat ut
                        corrupti consequuntur repudiandae ipsam. Exercitationem aliquid
                        architecto ea aliquam provident.
                    </p>
                    <a href="http://127.0.0.1:5500/about%20me/about.html" id="read_more">Read More</a>
                </div>
            </div>
        </>
    )
}

export default Home
