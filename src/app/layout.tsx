import { Nunito_Sans, IBM_Plex_Serif, League_Spartan, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const nuno = Nunito_Sans({ subsets: ["latin"], weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'], variable: '--font-nuno', display: 'swap', adjustFontFallback: false });
const ibm = IBM_Plex_Serif({ subsets: ["latin"], weight: ['100','200', '300', '400', '500', '600', '700'], variable: '--font-ibm', display: 'swap', adjustFontFallback: false });
const spartan = League_Spartan({ subsets: ["latin"], weight: ['100','200', '300', '400', '500', '600', '700', '800', '900'], variable: '--font-spartan', display: 'swap', adjustFontFallback: false });
const dm = DM_Serif_Display({ subsets: ["latin"], weight: ['400'], variable: '--font-dm', display: 'swap', adjustFontFallback: false });

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
          className={`${nuno.variable} ${ibm.variable} ${spartan.variable} ${dm.variable}`}
        >
            <Header />
            {children}
            <Footer />
        </body>
      </html>
    );
  }
