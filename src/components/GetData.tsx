import UseGetData from "../hooks/UseGetData";
import { useEffect, useState } from "react";

const GetData = () => {
  const { data, loading, error } = UseGetData();
  const [searchData, setSearchData] = useState<string[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    // Set searchData to data once it's available
    setSearchData(data);
  }, [data]);

  const handleSearch = (e: any) => {
    setSearch(e);
  };

  const handleSubmit = (e: any) => {
    console.log("working");
    e.preventDefault();
    const searchedValue = search.toLowerCase();
    // If search is empty, set searchData to the full data
    if (searchedValue === "") {
      setSearchData(data);
    } else {
      // Filter data based on the search input
      const filteredData = data?.filter((item: any) =>
        item.title.toLowerCase().includes(searchedValue)
      );
      setSearchData(filteredData);
    }
  };

  return (
    <div className="mt-[100px] w-full">
      <div className="w-[400px] mx-auto">
        <h1 className="mb-2 font-bold">
          Get Data and Search Functionality Component
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            className="outline-none border-[2px] mb-3 p-2"
            type="text"
            name="search"
            id="search"
            placeholder="Search Product"
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button className="bg-black text-white p-2 rounded-md" type="submit">
            Search
          </button>
        </form>
      </div>
      {/* Data Display */}
      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="text-center">Error...</div>}
      <div className="w-full mt-[50px] p-[50px] flex flex-wrap text-center gap-5 justify-center">
        {searchData?.length === 0 && (
          <div className="text-center">No Data Found</div>
        )}
        {searchData?.map((item: any) => (
          <div
            key={item.id}
            className="flex flex-col mb-3 border-[1px] p-2 items-center cursor-pointer"
          >
            <h1 className="text-white font-bold mb-4 bg-black p-1">
              {item.title}
            </h1>
            <div className="w-[200px] h-[200px] mb-2">
              <img className="w-full h-full " src={item.thumbnail} alt="" />
            </div>
            <h1 className="text-white w-[300px]">{item.description}</h1>
            <h1 className="text-white font-bold mt-[10px] bg-black px-5 rounded-lg">
              Rs. {item.price}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetData;
