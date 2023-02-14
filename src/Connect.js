import React from 'react'
import './App.css'
import {FacebookShareButton, TwitterShareButton, LinkedinShareButton, InstapaperShareButton} from 'react-share';
import {FacebookIcon,TwitterIcon,LinkedinIcon, } from 'react-share';


export default function Connect() {
  return (
    <div className="Connect">
      <h2>Let Connect</h2>
     
      <a href="https://www.instagram.com/gerald_n_d/"><p1>Instagram</p1></a> 
      <p1>{"\t\n"}</p1>

      <a href="https://www.linkedin.com/in/gerald-ndawula-2552a0215/"><p1>Linked In</p1></a> 
      <p1>{"\t"}</p1>
      <a href="https://github.com/geraldketu"><p1>Git hub</p1></a> 
      <p1>{"\t"}</p1>

      <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjsnxJZhQrtHpCmdVdRXQPVGKMvHSDJXSznBnmpMdVzsSgmbnLXVBphhJhwqkJjSdnvJnL"><p1>Gmail</p1></a> 


    </div>
  )
}
