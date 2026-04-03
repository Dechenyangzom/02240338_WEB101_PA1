import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import ClientLayout from "./clientLayout";

export const metadata = { title: "Threads", description: "Threads app" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#000", color: "#fff" }}>
        <AuthProvider>
          <ClientLayout>{children}</ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}