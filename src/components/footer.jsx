import React from "react";
import "./footer.css"
import {FaTwitter} from 'react-icons/fa6'


const Footer =() =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Getmaxsolution</h1>
                    <p>From Tech Titans to Healthcare Heroes - We Serve Them All! </p>
                </div>
                <div>
                    <a href="">
                        <img src={FaTwitter} alt="twitter"></img>
                    </a>
                    <a href="">
                        <img src={FaTwitter} alt="facebook"></img>
                    </a>
                    <a href="">
                        <img src={FaTwitter} alt="linkedln"></img>
                    </a>
                    <a href="">
                        <img src={FaTwitter} alt="instagram"></img>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Carrers</h4>
                    <a href="/">1</a>
                    <a href="/">2</a>
                    <a href="/">3</a>
                    <a href="/">4</a>
                </div>
                <div>
                    <h4>Blogs</h4>
                    <a href="/">1</a>
                    <a href="/">2</a>
                    <a href="/">3</a>
                    <a href="/">4</a>
                </div>
                <div>
                    <h4>Solutions</h4>
                    <a href="/">1</a>
                    <a href="/">2</a>
                    <a href="/">3</a>
                    <a href="/">4</a>
                </div>
                <div>
                    <h4>Services</h4>
                    <a href="/">1</a>
                    <a href="/">2</a>
                    <a href="/">3</a>
                    <a href="/">4</a>
                </div>

            </div>
        </div>
    )

}
export default Footer
