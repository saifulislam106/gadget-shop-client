/* eslint-disable react/prop-types */


const FilterBar = ({setBrand,setCategory,uniqueCategory ,uniqueBrand ,handleReset}) => {
    return (
        <div className="bg-gray-200 p-4 min-h-screen h-full rounded-t-md flex flex-col gap-3">
            <h3 className="font-bold text-xl">Filter</h3>

            <select onChange={(e)=>setBrand(e.target.value)} className="select w-full max-w-xs">
                <option value="">Brend</option>
                {
                    uniqueBrand?.map((brand ,i)=>{
                        <option key={i} value={brand}>
                            {brand}
                        </option>
                    })
                }
            </select>
            <select onChange={(e)=>setCategory(e.target.value)} className="select w-full max-w-xs">
                <option value="">Cetagory</option>
               {uniqueCategory?.map((category)=>{
                <option value={category}>
                    {category}
                </option>
               })
                
               }
            </select>
            <button onClick={handleReset} className="btn btn-outline">Reset </button>
        </div>
    );
};

export default FilterBar;