import { Nunito_Sans, IBM_Plex_Serif, League_Spartan } from "next/font/google";
import "./globals.css";

const nuno = Nunito_Sans({ subsets: ["latin"], weight: ['200', '300', '400', '500', '600', '700', '800', '900', '1000'], variable: '--font-nuno', });
const ibm = IBM_Plex_Serif({ subsets: ["latin"], weight: ['100','200', '300', '400', '500', '600', '700'], variable: '--font-ibm', });
const spartan = League_Spartan({ subsets: ["latin"], weight: ['100','200', '300', '400', '500', '600', '700', '800', '900'], variable: '--font-spartan', });

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
          className={`${nuno.variable} ${ibm.variable} ${spartan.variable}`}
        >
          {children}
        </body>
      </html>
    );
  }
