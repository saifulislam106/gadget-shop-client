

const ProductCard = ({p}) => {
   const {title , brend ,price ,description , stock , cetagory } =p;
   console.log(p);
    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />   
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h2 className="card-title">{brend}</h2>
                <h2 className="card-title">{price}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;