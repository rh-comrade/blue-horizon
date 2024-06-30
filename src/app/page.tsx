import { Home } from "@/home";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blue Horizon",
  description: "This is dream project",
};
export default function Homie() {
  return (
    <Home/>
  );
}
