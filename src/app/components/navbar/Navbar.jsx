"use client"


import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import styles from "./navbar.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {

  const router = useRouter();

  const links = [
    { href: "/", label: "Art Prints" },
    { href: "/canvas", label: "Canvas Prints" },
    { href: "/framed", label: "Framed Prints" },
    { href: "/metal", label: "Metal Prints" },
    { href: "/acrylic", label: "Acrylic Prints" },
    { href: "/wood", label: "Wood Prints" },
    { href: "/teens", label: "Prints for Teens" },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const goToCart = ()=>{
      router.push("/cart")
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
      <GiHamburgerMenu size={29} className={styles.hamburger} onClick={toggleSidebar} />
      {isSidebarOpen && (
        <div className={styles.sidebarContainer}>
        <div className={styles.sidebar}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} passHref>
              <div>
                {link.label}
              </div>
            </Link>
          ))}
        </div>
        <div>
          <button className={styles.button}>View all prints</button>
        </div>
      </div>
      )}
        <Image src="" alt="Logo"/>
        <h1>Artistic Expressions</h1>
      </div>
      <div className={styles.searchregion}>
        <div className={styles.searchBar}>
          <CiSearch size={25} />
          <input
            type="text"
            className={styles.searchfield}
            placeholder="Search"
          />
        </div>
        <div className={styles.cartIcon}>
        <BsCart3 size={25} onClick={goToCart}  />
        <p className={styles.cartNumber}>0</p>
        </div>
         
          <Image alt="" src="/User.jpg" width={50} height={50} className={styles.user}/>
      </div>
    </div>
  );
};

export default Navbar;
