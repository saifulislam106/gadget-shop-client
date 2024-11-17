

// eslint-disable-next-line react/prop-types
const ProductCard = ({product}) => {
    
   // eslint-disable-next-line react/prop-types
   const {title , brand ,price  , stock , category ,description , imageUrl } =product;
   console.log(product);
    return (
        <div className="">
                <img
                    src={imageUrl}
                    alt="Product img" />   
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
               <p>{brand}</p>
               <p>{price}</p>
               <p>{stock}</p>
               <p>{category}</p>
               <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;