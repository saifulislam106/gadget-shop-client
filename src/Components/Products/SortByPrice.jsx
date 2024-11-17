

const SortByPrice = () => {
    return (
        <div>
            <select className="max-w-md p-3 border border-black rounded-md">
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
            </select>
        </div>
    );
};

export default SortByPrice;