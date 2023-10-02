import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Space page",
  description: "Stars",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
