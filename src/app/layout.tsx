import { Nunito_Sans } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const paragraph = Nunito_Sans({ subsets: ["latin"], 
    weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'], 
    variable: '--font-paragraph',
    display: 'swap', 
    adjustFontFallback: false });
    
const heading = localFont({
    src: [
      {
        path: '../../public/assets/font/GlacialIndifference-Bold.otf',
        weight: '700',
        style: 'normal',
      },
      {
        path: '../../public/assets/font/GlacialIndifference-Regular.otf',
        weight: '400',
        style: 'normal',
      },
    ],
    variable: '--font-heading',
    display: 'swap',
    adjustFontFallback: false  
  })

export const metadata = {
  title: "Tritek Consulting",
  description: "Consulting.",
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body
          className={`${paragraph.variable} ${heading.variable}`}
        >
            <Header />
            {children}
            <Footer />
        </body>
      </html>
    );
  }
