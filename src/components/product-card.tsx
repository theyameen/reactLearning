import { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
    return <div className="border rounded-lg p-4 space-y-4">
        <img src={product.images[0]} alt={product.title} className="w-full h-48 object-contain" />
        <h4 className="text-lg font-bold">{product.title}</h4>
        <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>

        <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">${product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Add to Cart</button>
        </div>
    </div>;
}