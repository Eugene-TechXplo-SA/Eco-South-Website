import { type Metadata } from "next";
import { type ReactNode } from "react";

export const metadata: Metadata = {
  title: "Project Gallery — Eco South Partnership",
  description: "From township streets to rural landscapes, here is the work that happens when planning meets the ground.",
};

export default function GalleryLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
