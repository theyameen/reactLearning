import { Input, Pagination, ProductCard } from "@/components";
import { FetchProductsAction } from "@/store/product.slice";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function DashboardPage() {
    const dispatch: any = useDispatch();
    const { products, loading, total } = useSelector((state: any) => state.product);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("title");
    const [order, setOrder] = useState("asc");
    const [perPage] = useState(4);
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = (page: number = 1) => {
        dispatch(FetchProductsAction(perPage, (page - 1) * perPage, sortBy, order));
        setCurrentPage(page);
    }

    return <div className="container mx-auto space-y-6">
        <h2 className="text-4xl font-bold">Products</h2>
        {loading ? <div>Loading</div> :
            <div className="grid grid-cols-4 gap-4">
                {products.map((product: Product, index: number) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>}

        <Pagination totalPages={Math.ceil(total / perPage)} currentPage={currentPage} onPageChange={fetchProducts} />
    </div>


}