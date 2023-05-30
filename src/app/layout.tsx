import "@/styles/globals.css";
import { TrpcProvider } from "src/provider/trpcProvider";
import AuthProviders from "src/provider/authProvider";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <TrpcProvider>
          <AuthProviders>{children}</AuthProviders>
        </TrpcProvider>
      </body>
    </html>
  );
}
