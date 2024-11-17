import { BiSearch } from "react-icons/bi";


const SearchBar = () => {
    return (
        <div>
            <form className="  p-4">
                <div className="flex gap-[2px]">
                    <input type="text" name="search" placeholder="Search Product" id="" className="max-w-md p-3 border border-black rounded-l-md" />
                    <button className=" p-3 border border-black rounded-r-md bg-slate-300">
                        <BiSearch />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;