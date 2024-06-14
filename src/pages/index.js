import Image from "next/image";
import { Inter } from "next/font/google";
import Products from "@/components/Products";
import ShopingCart from "@/components/ShopingCart";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
     <Products/>

<ShopingCart/>
    </>
  
  );
}
