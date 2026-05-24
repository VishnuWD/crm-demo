import "./globals.css";

export const metadata = {
  title: "Estate CRM",
  description: "Premium CRM Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}