import "../styles/globals.css";
import "../styles/audioBar.css";

import { TRPCProvider } from "src/provider/trpcProvider";
import AuthProviders from "src/provider/authProvider";
import Script from "next/script";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6LVJQD584R" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-6LVJQD584R');
        `}
      </Script>
      <body suppressHydrationWarning={true}>
        <TRPCProvider>
          <AuthProviders>{children}</AuthProviders>
        </TRPCProvider>
      </body>
    </html>
  );
}
