import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/app/StoreProvider";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import FooterComponent from "@/components/footer/FooterComponent";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";
import Loading from "@/app/(user)/loading";
import Error from "@/app/(user)/error";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Newjeans Store",
  description: "Newjeans Store - The best place to buy jeans online!",
  icons: "https://img1.picmix.com/output/stamp/normal/3/1/2/5/2525213_cf584.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <NavbarComponent />
          
          <ErrorBoundary errorComponent={Error}>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </ErrorBoundary>
          <footer>
            <FooterComponent />
          </footer>
        </StoreProvider>
      </body>
    </html>
  );
}
