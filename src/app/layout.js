import "./globals.css";

export const metadata = {
  title: "WeFrame Tech",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`inter-font`}
      >
        {children}
      </body>
    </html>
  );
}