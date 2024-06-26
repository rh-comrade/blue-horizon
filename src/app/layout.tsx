'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { BootstrapInstallation } from "@/components/bootstrap";
import appStore from "@/Redux/store";
import { Provider } from "react-redux";


const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {
        <Provider store={appStore}>
          <BootstrapInstallation/>
          {children}
        </Provider>
      }
      </body>
    </html>
  );
}
