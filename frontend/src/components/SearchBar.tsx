/* eslint-disable @typescript-eslint/no-explicit-any */
import { setQuery } from "../redux/features/search/searchSlice";
import { useAppDispatch, useAppSelector } from "../redux/hook";


const SearchBar = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector((state: { search: { query: any } }) => state.search.query);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
  };

  return (
    <div className="flex justify-end p-4">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search by name, brand or category"
          className="input rounded-2xl input-bordered pl-10 sm:w-1/2 md:w-3/4 lg:w-full"
          value={query}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
