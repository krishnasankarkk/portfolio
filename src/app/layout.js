import { Poppins } from "next/font/google";
import "./globals.css";

const roboto = Poppins({
  weight: '400',
  subsets: ['latin'],
})


export const metadata = {
  title: "Krishnasankar",
  description: "Welcome to the digital realm where code comes to life and innovation knows no bounds. I am Krishnasankar, aspiring Python developer weaving dreams into lines of code. Step into my world, where technology meets creativity, and every project is a canvas for innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
