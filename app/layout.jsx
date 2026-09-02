import "./globals.css";

export const metadata = {
  title: "ScentFused | Fused by Scent. Defined by You",
  description: "Curated fragrances, grooming rituals and skin care essentials."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}