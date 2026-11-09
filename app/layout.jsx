import "./globals.css";
import brand from "@/brand.config";

export const metadata = {
  title: `${brand.name} — Brand Hub`,
  description: brand.tagline,
};

const fontQuery = brand.typography.map((t) => `family=${t.googleFont}`).join("&");

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?${fontQuery}&display=swap`}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
