import ax70 from "@/assets/ax70.jpg";
import axcannon from "@/assets/axcannon.jpg"
import ax90 from "@/assets/ax90.png";
import ax100 from "@/assets/ax100.png"
import { StaticImageData } from "next/image";

export interface Product {
  id: number;
  imageUrl: StaticImageData;
  name: string;
  description: string;
  createdAt: Date;
  price: number;
}

const products: Product[] = [
  {
    id: 0,
    imageUrl: ax100,
    name: "Lining Axforce 100",
    description: "Looking for a powerful and stylish badminton racket? Check out the Li Ning AxForce 100 Kilin Badminton Racket! With its sleek black and gold color scheme, this racket is perfect for players who like to attack on the court",
    createdAt: new Date(),
    price: 19900,
  },
  {
    id: 1,
    imageUrl: ax90,
    name: "Lining Axforce 90 Max",
    description: "Super Limited release. The Li Ning AxForce 90 Max Gift Pack is 2022 most super racket from Li Ning with special racket box, which include one dragon racket, tee shirt, N61 badminton string and hand grip.",
    createdAt: new Date('2022-1-1'),
    price: 14900,
  },
  {
    id: 2,
    imageUrl: ax70,
    name: "Lining Axforce 70",
    description: "Following successful release of AXforce 90 and AXFORCE 80, Li Ning just bring us the AXFORCE 70 in 2023 spring. Currently Xu Chen is using AxForce 70 for badminton match.",
    createdAt: new Date(),
    price: 9900,
  },
  {
    id: 3,
    imageUrl: axcannon,
    name: "Lining Axforce Cannon",
    description: "Li Ning AxForce Cannon is new racket for beginners or intermediate badminton players, which is offensive racket with lightweight and high tension design.",
    createdAt: new Date(),
    price: 4999,
  },
];

export { products };
