import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/Components/SharedPage/navbar";
import Footer from "@/Components/SharedPage/Footer";
import Authprovider from "@/Components/services/Authprovider";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "Car Doctor",
    template: "%s | Car Doctor",
  },
  description: "Car Reaper Workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <ToastContainer/>
        <Authprovider>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </Authprovider>
      </body>
   
    </html>
  );
}
