"use client";
// import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
// pages/_app.js
import 'antd/dist/reset.css'; // Import Ant Design styles by using reset.css
import { ConfigProvider } from 'antd'; // Import ConfigProvider for custom theming

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

import { ProgressLoader } from 'nextjs-progressloader';
import LoginLayout from "@/components/Layouts/LoginLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1000);
  // }, []);

  const router = useRouter();

  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    const isLogin = getCookie("logIn");
    // If the user is not logged in and not on the login page, redirect to login
    if (isLogin ==='undefined' && pathname !== "/auth/signin") {
      router.push(`/auth/signin`);
    }
  }, [router, pathname]);

  // Choose layout based on current route
  const isLoginPage = pathname === "/auth/signin";
  const LayoutComponent = isLoginPage ? LoginLayout : DefaultLayout;

  return (
    <html lang="en">
    <body suppressHydrationWarning={true}>
      <ProgressLoader showSpinner={false} />
      <ConfigProvider>
        <LayoutComponent>{children}</LayoutComponent>
      </ConfigProvider>
    </body>
  </html>
  );
}
