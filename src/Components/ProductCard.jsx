/* eslint-disable react/prop-types */
import axios from "axios";
import useUserData from "../Hooks/useUserData";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ product }) => {
  //   eslint-disable-next-line react/prop-types
  const { title , brand, price, stock, category, description, imageUrl } =
    product;
    const userData = useUserData();
    const userEmail = userData.email;

    const handleWishlist = async()=>{
      await axios.patch("http://localhost:4000/wishlist/add" , {
        userEmail: userEmail,
        productId: product._id
      }).then((res)=> {
        if(res.data.modifiedCount){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Product added sucessfully",
            showConfirmButton: false,
            timer: 1500
          });
        }
      });
    }
  // console.log(product);
  return (
    <div className="bg-slate-200 p-4 shadow-md border-1 rounded-md flex flex-col flex-grow">
      <img src={imageUrl} className="w-full object-cover" alt="Product img" />
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="font-medium">Brand: {brand}</p>
        <p className="text-sm">
          <span className="font-bold">Price</span>:{" "}
          <span className="text-red-600 ">{price}</span>
        </p>
        <p className="text-sm">
          <span className="font-bold">Stock</span>:{" "}
          <span className="text-red-600 ">{stock}</span>
        </p>
        <p className="text-sm">
          <span className="font-bold">Category</span>: {category}
        </p>
        <p className="text-sm">
          <span className="font-bold">Description</span>: {description}
        </p>
        <div className="card-actions w-full">
          <button className="btn btn-outline w-full">Add to wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
