import { Nunito_Sans } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Script from 'next/script'

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
  title: "Tritek Academy",
  description: "Learning tech skills to push your career forward.",
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
            <head>
                <Script
                id="freshsales-script"
                strategy="beforeInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    function createFcn(nm){(window.freshsales)[nm]=function(){(window.freshsales).push([nm].concat(Array.prototype.slice.call(arguments,0)))}; }
                    (function(url,appToken,formCapture){
                        window.freshsales=window.freshsales||[];
                        if(window.freshsales.length==0){
                        list='init identify trackPageView trackEvent set'.split(' ');
                        for(var i=0;i<list.length;i++){
                            var nm=list[i];createFcn(nm);
                        }
                        var t=document.createElement('script');
                        t.async=1;
                        t.src='//assets.freshsales.io/assets/analytics.js';
                        var ft=document.getElementsByTagName('script')[0];
                        ft.parentNode.insertBefore(t,ft);
                        freshsales.init('https://tritekconsultingltd.freshsales.io','908167afb6a99743322f0d4f91521a2b9a20dea2150d2cf9a733f5bf7a682396',true);
                        }
                    })();
                    `,
                }}
                />
        </head>
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
