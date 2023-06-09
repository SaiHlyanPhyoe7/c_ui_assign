import "./globals.scss";
import { Inter } from "next/font/google";
import { Providers } from "../redux/Provider";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "C-Apple Assignment SHP",
  description: "Coder Sai Hlyan Phyoe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
      <Footer />
    </html>
  );
}
