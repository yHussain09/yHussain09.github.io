import Head from "next/head";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yasir Hussain",
  description: "Personal portfolio website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Personal - Start Bootstrap Theme</title>
        {/* Favicon*/}
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        {/* Custom Google font*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Bootstrap icons*/}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        {/* Core theme CSS (includes Bootstrap)*/}
        {/* <link href="css/styles.css" rel="stylesheet" /> */}
      </Head>
      <body className={inter.className}>
        <main className="flex-shrink-0">
          <Nav />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
