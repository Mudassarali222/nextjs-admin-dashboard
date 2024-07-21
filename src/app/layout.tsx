"use client";
// import "jsvectormap/dist/css/jsvectormap.css";
import "flatpickr/dist/flatpickr.min.css";
import "@/css/satoshi.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "@/components/common/Loader";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

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

  const isLogin = getCookie("logIn");

  console.log("line 30", isLogin);

  if (isLogin === undefined || isLogin === 'undefined') {
    router.push(`/auth/signin`);
  }

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {/* <Loader /> */}
        {isLogin && isLogin!== 'undefined' ? <DefaultLayout>{children}</DefaultLayout>: children}
      </body>
    </html>
  );
}
