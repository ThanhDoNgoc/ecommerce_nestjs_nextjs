import Image from "next/image";
import { notFound } from "next/navigation";
import PriceTag from "@/components/PriceTag";
import { products, Product } from "../../../../utils/product";

interface ProductPageProps {
  params: {
    id: string;
  };
}

function getProduct(id: string): Product {
  const product = products.find((e) => e.id === +id);
  if (!product) notFound();
  return product;
}

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const product = getProduct(id);

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={500}
        height={500}
        className="rounded-lg"
        priority
      />

      <div>
        <h1 className="text-5xl font-bold">{product.name}</h1>
        <PriceTag price={product.price} className="mt-4" />
        <p className="py-6">{product.description}</p>
      </div>
    </div>
  );
}
