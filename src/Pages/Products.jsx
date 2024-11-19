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
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [uniqueBrand , setUniqueBrand]= useState([]);
  const [uniqueCategory , setUniqueCategory]= useState([]);

  console.log(search , sort);

  useEffect(() => {
    setLoading(true);
    const fetch = () => {
      axios.get(`http://localhost:4000/all-products?title=${search}&sort=${sort}&brand=${brand}&category=${category}`).then((res) => {
        setProducts(res.data.products);
        setUniqueBrand(res.data.brands)
        setUniqueCategory(res.data.categorys)
        // console.log(res);
        setLoading(false);
      });
    };
    fetch();
  }, [search,sort, brand, category]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = ""  
  };

  
  return (
    <div className="container mx-auto">
      <h3 className="text-2xl font-bold text-center my-8">All Product</h3>
      <div className="flex items-center justify-between">
        {/* searching  */}
        <SearchBar 
        handleSearch={handleSearch} />
        <SortByPrice 
        setSort={setSort} />
      </div>
      <div className="grid grid-cols-12 gap-3 my-6 ">
        <div className="col-span-2">
          <FilterBar 
          setBrand={setBrand}
          setCategory={setCategory}
          uniqueBrand={uniqueBrand}
          uniqueCategory={uniqueCategory}
          
           />
        </div>

        {/* Show product card  */}
        <div className="col-span-10">
          {loading ? (
            <Loading />
          ) : (
            <>
              {products.length === 0 ? (
                <div className="w-full h-full flex items-center justify-center">
                  <h3 className="text-2xl font-bold">No Products found</h3>
                </div>
              ) : (
                <div className="min-h-screen grid grid-cols-3 gap-3">
                  {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
