

const Products = () => {
    return (
        <div className="container mx-auto">
            <h3 className="text-2xl font-bold text-center my-8">All Product</h3>
            <div className="flex items-center justify-between">
                {/* searching  */}
                <h4>searce</h4>
                <h4>sort</h4>
            </div>
            <div className="grid grid-cols-12 my-6 ">
                <div className="col-span-2">
                   <p>sbar</p>
                </div>
                <div className="col-span-10">
                    <p>content</p>
                </div>
            </div>
        </div>
    );
};

export default Products;