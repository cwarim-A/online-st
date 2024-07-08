import React from 'react'
import styles from "./footer.module.css"
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.container}>
            <div className={styles.logo}>
                    <h1 className={styles.header}>Artistic Expressions</h1>
                    <p>Funding freemium long tail hypotheses first mover advantage assets ownership niche market startup investor.</p>
                    <div className={styles.email}>
                    <span><MdOutlineEmail size={22} /></span> <p>agensi@mail.com</p>
                    </div>
                    <div className={styles.phone}>
                    <span><MdOutlineLocalPhone size={22} /></span> <p>123-456-7890</p>
                    </div>
                    
            </div>
            <div clasName={styles.services}>
                  <h2 className={styles.header}>Services</h2>
                  <p>Digital Marketing</p>
                    <p>Branding</p>
                    <p>Market Promotion</p>
                    <p>Digital Campaign</p>
            </div>
            <div className={styles.aboutus}>
                  <h2 className={styles.header}>About Us</h2>
                  <p>Milestone</p>
                    <p>Check ur pricing</p>
                    <p>Exper Team</p>
                    <p>Exciting News</p>
            </div>
            <div className={styles.address}>
                <h2 className={styles.header}>Address</h2>
                <p>123 Lorem Ipsum Street
                    Jakarta, Indonesia</p>
                    <div>
                    <FaFacebookF />
                    <FaGoogle />
                    </div>
            </div>
    </div>
  )
}

export default Footer
