import { useEffect, useState } from "react";
import FilterBar from "../Components/Products/FilterBar";
import SearchBar from "../Components/Products/SearchBar";
import SortByPrice from "../Components/Products/SortByPrice";
import axios from "axios";
import Loading from "./Loading";
import ProductCard from "../Components/ProductCard";
import { IoArrowForwardCircle } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [uniqueBrand, setUniqueBrand] = useState([]);
  const [uniqueCategory, setUniqueCategory] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // console.log(search , sort);

  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
     try{
      const res = await axios.get(
        `http://localhost:4000/all-products?title=${search}&page=${page}&limit=${9}&sort=${sort}&brand=${brand}&category=${category}`
      );
      setProducts(res.data.products);
      // console.log(res.data.products);
      setUniqueBrand(res.data.brands);
      setUniqueCategory(res.data.categories);
      setTotalPages(Math.ceil(res.data.totalProducts / 9));
     } catch (err){
        console.error(err)
     }
      // console.log(totalProducts)
      setLoading(false);
    };
    fetch();
  }, [search, sort, brand, category, page]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.search.value);
    e.target.search.value = "";
  };

  const handleReset = () => {
    setSearch("");
    setSort("asc");
    setBrand("");
    setCategory("");
    setPage(1);
    // window.location.reload()
  };

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="container mx-auto">
      <h3 className="text-2xl font-bold text-center my-8">All Product</h3>
      <div className="flex items-center justify-between">
        {/* searching  */}
        <SearchBar handleSearch={handleSearch} />
        <SortByPrice setSort={setSort} />
      </div>
      <div className="grid grid-cols-12 gap-3 my-6 ">
        <div className="col-span-2">
          <FilterBar
            setBrand={setBrand}
            setCategory={setCategory}
            uniqueBrand={uniqueBrand}
            uniqueCategory={uniqueCategory}
            handleReset={handleReset}
          />
        </div>

        {/* Show product card  */}
        <div className="col-span-10">
          {loading ? (
            <Loading />
          ) : (
            <>
              {products?.length === 0 ? (
                <div className="w-full h-full flex items-center justify-center">
                  <h3 className="text-2xl font-bold">No Products found</h3>
                </div>
              ) : (
                <div className="min-h-screen grid grid-cols-3 gap-3">
                  {products?.map((product) => (
                    <ProductCard key={product._id} product={product} />
                  ))}
                </div>
              )}
            </>
          )}
          {/* pagination  */}
          <div className="my-8 flex items-center justify-center gap-2">
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="btn"
            >
              <IoArrowBackCircle />
            </button>
            <p>
              Page {page} of {totalPages}
            </p>
            <button
              onClick={() => handlePageChange(page + 1)}
              className="btn"
              disabled={page === totalPages}
            >
              <IoArrowForwardCircle />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
