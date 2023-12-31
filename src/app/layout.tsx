"use client";
import Providers from "@/lib/Providers";
// import type { Metadata } from "next";
import { StyleProvider } from "@ant-design/cssinjs";
// import { Playfair_Display } from "next/font/google";
import "./globals.css";

// const inter = Playfair_Display({ subsets: ["cyrillic"], weight: "500" });

// export const metadata: Metadata = {
//   title: "Next Js Starter",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyleProvider hashPriority="high">
      {/* <ErrorBoundary> */}

      <Providers>
        <html lang="en">
          <body
            // style={{
            //   maxWidth: "1990px",
            //   marginInline: "auto",
            //   boxShadow:
            //     "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            // }}
            className={
              "scrollbar scrollbar-track-transparent scrollbar-thumb-blue-200 scrollbar-track-rounded-full scrollbar-thumb-rounded-full"
            }
          >
            {children}
          </body>
        </html>
      </Providers>
      {/* </ErrorBoundary> */}
    </StyleProvider>
  );
}
