import {Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import { CartProvider } from "./context/CartContext";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Online Shop",
  description: "where you can order your goods easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
    <CartProvider>
      <Navbar/>
        {children}
    </CartProvider>
        </body>
    </html>
  );
}
