import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TeacherProvider } from "@/providers/teacher-provider";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Faculty Performance Monitor",
  description: "AI-Powered Faculty Performance Monitoring System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <TeacherProvider>{children}</TeacherProvider>
      </body>
    </html>
  );
}
