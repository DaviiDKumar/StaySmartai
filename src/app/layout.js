import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Stay Smart AI",
  description: "Smart insights and blogs on Artificial Intelligence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      
        {children}
      </body>
    </html>
  );
}
