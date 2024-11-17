

const FilterBar = () => {
    return (
        <div className="bg-gray-200 p-4 min-h-screen rounded-t-md flex flex-col gap-3">
            <h3 className="font-bold text-xl">Filter</h3>

            <select className="select w-full max-w-xs">
                <option disabled selected>Brend</option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
            </select>
            <select className="select w-full max-w-xs">
                <option disabled selected>Cetagory</option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
            </select>
            <button className="btn btn-outline">Reset </button>
        </div>
    );
};

export default FilterBar;