"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterHandler() {
  const pathname = usePathname();
  if (!pathname) {
    return null; // Do not render Footer if pathname is null
  }

  // Paths where footer should not appear
  // const noFooterPaths = ["/dashboardPage"];
  const noFooterPaths = ["/details"];

  if (noFooterPaths.includes(pathname)) {
    return null; // Do not render Footer
  }

  return <Footer />;
}