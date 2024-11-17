import { useEffect, useState } from "react";
import FilterBar from "../Components/Products/FilterBar";
import SearchBar from "../Components/Products/SearchBar";
import SortByPrice from "../Components/Products/SortByPrice";
import axios from "axios";
import Loading from "./Loading";
import ProductCard from "../Components/ProductCard";


const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const fetch = () => {
            axios.get(`http://localhost:4000/all-products`).then((res) => {
                setProducts(res.data);
                // console.log(res);
                setLoading(false)
            });
        }

        fetch();
    }, [])
    return (
        <div className="container mx-auto">
            <h3 className="text-2xl font-bold text-center my-8">All Product</h3>
            <div className="flex items-center justify-between">
                {/* searching  */}
                <SearchBar></SearchBar>
                <SortByPrice></SortByPrice>
            </div>
            <div className="grid grid-cols-12 gap-3 my-6 ">
                <div className="col-span-2">
                    <FilterBar></FilterBar>
                </div>

                {/* Show product card  */}
                <div className="col-span-10">
                    {
                        loading ? <Loading /> :
                            (
                                <>
                                    {
                                        products.length === 0 ?
                                            (<div className="w-full h-full flex items-center justify-center">
                                                <h3 className="text-2xl font-bold">No Products found</h3>
                                            </div>) :
                                            (<div className="min-h-screen grid grid-cols-3 gap-3">
                                                {
                                                    products.map(product =>(
                                                        
                                                        <ProductCard key={product._id} product={product} />
                                                        
                                                    ))
                                                    
                                                }

                                            </div>)
                                    }
                                </>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;