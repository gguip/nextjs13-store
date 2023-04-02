import Image from "next/image";
import { Stripe } from "stripe";
import ProductCard, { ProductCardProps } from "./ProductCard";

async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET ?? "", {
    apiVersion: "2022-11-15",
  });

  const response = await stripe.prices.list({
    expand: ["data.product"],
  });

  const prices = response.data;
  return prices;
}

export default async function Home() {
  const products = await getStripeProducts();
  return (
    <main className="p-4 flex flex-col">
      <div className="max-w-[1000px] w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product, key) => (
          <ProductCard
            key={key}
            product={product as unknown as ProductCardProps}
          />
        ))}
      </div>
    </main>
  );
}
