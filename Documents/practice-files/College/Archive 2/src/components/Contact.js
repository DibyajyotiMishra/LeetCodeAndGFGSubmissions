import { color } from "framer-motion";
import React from "react";

const Contact = () => {
  return (
    <><div className="about h-screen" id="contact" style={{
      'textAlign':'center',
      'justifyContent':'center',
      'position':'block'

    }}>
      <div style={{
        'fontSize':'40px',
        'color':'whitesmoke',
        'padding':'4px'
      }}>Contact us</div>
      <div class='container my-5' style={{
        'justifyContent':'center',
        'position':'relative',
        'display':'block'
      }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3883.414986991295!2d80.02406811461535!3d13.261987490665847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52814946112d6f%3A0x57a644f6f25f9b0c!2sAmrita%20Vishwa%20Vidyapeetham%20Chennai%20Campus!5e0!3m2!1sen!2sin!4v1677748461568!5m2!1sen!2sin" width="1000" height="300"></iframe>
       <h4 style={{
        'textAlign':'center',
        'position':'relative',
        'paddingTop':'5px',
        'fontSize':'30px',
        'color':'whitesmoke',

       }}>Address</h4>
        <h4 style={{
          'textAlign':'center',
          'fontSize':'20px',
          'color':'whitesmoke',
          'padding':'20px',
          'justifyContent':'center'
        }}>337/1 A, Vallal RCK Nagar, SH 50A, Vengal, Tamil Nadu 601103</h4>
        <h4 style={{
          'textAlign':'center',
          'fontSize':'20px',
          'color':'whitesmoke',
          'justifyContent':'center'
        }}>phno:12345678910</h4>
        <h4 style={{
          'textAlign':'center',
          'fontSize':'20px',
          'color':'whitesmoke',
          'justifyContent':'center'
        }}>examplegmail.com</h4>
        </div>
      </div>
    </>
);
}

export default Contact;
