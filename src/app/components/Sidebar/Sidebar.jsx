"use client";

import Link from "next/link";
import styles from "./sidebar.module.css";
import Layout from "../Layout";
import Navbar from "../navbar/Navbar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/app/context/CartContext";


const Sidebar = () => {
  const pathname = usePathname();
  const { addToCart } = useCart();

  const links = [
    { href: "/", label: "Art Prints" },
    { href: "/canvas", label: "Canvas Prints" },
    { href: "/framed", label: "Framed Prints" },
    { href: "/metal", label: "Metal Prints" },
    { href: "/acrylic", label: "Acrylic Prints" },
    { href: "/wood", label: "Wood Prints" },
    { href: "/teens", label: "Prints for Teens" },
  ];

  // const Cardcontent = [
  //   {  label: "Art Prints" },
  //   { label: "Canvas Prints" },
  //   {  label: "Framed Prints" },
  //   {  label: "Metal Prints" },
  //   { label: "Acrylic Prints" },
  //   {  label: "Wood Prints" },
  //   {  label: "Prints for Teens" },
  // ];

  const defaultLinkStyle = {
    // padding: '10px',
    textDecoration: "none",
  };

  const activeLinkStyle = {
    backgroundColor: "#E5E0DB",
    color: "white",
    padding: "10px 15px",
    fontWeight: "bold",
    borderRadius:"7px"
  };

  const cards = [
    {
      id: 1,
      src: "/ocean3.jpg",
      name: "The Great wave of Kanagawa",
      subprice: 15.99,
      reviews: "1,000+ reviews",
    },
    {
      id: 2,
      src: "/ocean3.jpg",
      name: "The Great wave of Kanagawa",
      subprice: 15.99,
      reviews: "1,000+ reviews",
    },
    {
      id: 3,
      src: "/ocean3.jpg",
      name: "The Great wave of Kanagawa",
      subprice: 15.99,
      reviews: "1,000+ reviews",
    },
    {
      id: 4,
      src: "/ocean3.jpg",
      name: "The Great wave of Kanagawa",
      subprice: 15.99,
      reviews: "1,000+ reviews",
    },
    {
      id: 5,
      src: "/ocean3.jpg",
      name: "The Great wave of Kanagawa",
      subprice: 15.99,
      reviews: "1,000+ reviews",
    },
    {
      id: 6,
      src: "/ocean3.jpg",
      name: "The Great wave of Kanagawa",
      subprice: 15.99,
      reviews: "1,000+ reviews",
    },
    {
      id: 7,
      src: "/ocean3.jpg",
      name: "The Great wave of Kanagawa",
      subprice: 15.99,
      reviews: "1,000+ reviews",
    },
    {
      id: 8,
      src: "/ocean3.jpg",
      name: "The Great wave of Kanagawa",
      subprice: 15.99,
      reviews: "1,000+ reviews",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.sidebarContainer}>
        <div className={styles.sidebar}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <div
                style={
                  pathname === link.href
                    ? { ...defaultLinkStyle, ...activeLinkStyle }
                    : defaultLinkStyle
                }
              >
                {link.label}
              </div>
            </Link>
          ))}
        </div>
        <div>
          <button className={styles.button}>View all prints</button>
        </div>
      </div>

      <div className={styles.aside}>
        <div className={styles.priceClass}>
          <p className={styles.price}>$10 - $25</p>
          <p className={styles.price}>$25 - $50</p>
          <p className={styles.price}>$50 - $100</p>
          <p className={styles.price}>$100 - $150</p>
          <p className={styles.price}>$150 - $200</p>
        </div>
        <div className={styles.imgClass} >
        {cards.map((card) => (
          <  >
            <div className={styles.card} key={card.id}>
              <Image
                src={card.src}
                alt=""
                width={300}
                height={250}
                className={styles.image}
              />
              <h2 className={styles.name}>{card.name}</h2>
              <p className={styles.subprice}>${card.subprice}</p>
              <p className={styles.reviews}>({card.reviews})</p>
              <button className={styles.addtocart}>Add to Cart</button>
            </div>
            
          </>
        ))}
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
