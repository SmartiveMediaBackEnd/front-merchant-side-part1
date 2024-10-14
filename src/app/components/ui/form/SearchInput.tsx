import { SearchIcon } from "src/app/utils/icons";

const SearchInput = ({ setSearchQuery }: { setSearchQuery: (query: string) => void; }) => {

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="relative xs:w-full ">
            <input
                onChange={handleSearch}
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border rounded outline-none text-subtitle"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer">
                <SearchIcon className='fill-hint' />
            </div>
        </div>
    )
}

export default SearchInput;