import { useEffect, useState } from "react";
import useUserData from "../../../Hooks/useUserData";
import axios from "axios";
import ProductCard from "../../ProductCard";
import Loading from "../../../Pages/Loading";

const MyWishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [removeWishlist, setRemoveWishlist] = useState(false);
  const userData = useUserData();
  const token = localStorage.getItem("access-token");

  useEffect(() => {
    const fetchWishlist = async () => {
      setLoading(true);
      await axios
        .get(`http://localhost:4000/wishlist/${userData._id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setWishlist(res.data);
          setLoading(false);
        });
    };
    if (userData._id && token) {
      fetchWishlist();
    }
  }, [token, userData._id, removeWishlist]);

  return (
    <div>
      <h2 className="font-bold text-2xl text-center">My Wishlist</h2>
      <div className="m-4">
        {loading ? (
          <Loading />
        ) : (
          <>
            {wishlist?.length === 0 ? (
              <div className="w-full h-full flex items-center justify-center">
                <h3 className="text-2xl font-bold mt-20">
                  No Products in your wishlist
                </h3>
              </div>
            ) : (
              <div className="min-h-screen grid grid-cols-3 gap-3">
                {wishlist?.map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    isInWishlist
                    setRemoveWishlist ={setRemoveWishlist}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MyWishlist;
