import { useState } from "react";
import CountryCard from "../components/CountryCard";
import { Search } from "lucide-react";

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

function HomePage(countries: Country[]) {
  const [searchInput, setSearchinput] = useState("");

  const searchItems = (searchValue: string) => {
    setSearchinput(searchValue);
  };

  const values = Object.values(countries);
  const filteredCountries = values.filter((item) => {
    return Object.values(item)
      .join("")
      .toLowerCase()
      .includes(searchInput.toLowerCase());
  });

  return (
    <>
      <div className="bg-stone-50 dark:bg-slate-800">
        <div className="p-4 px-8 mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="relative w-full sm:w-auto">
              <Search
                size={24}
                strokeWidth={3}
                className="absolute left-5 top-4 stroke-gray-400 dark:stroke-zinc-100"
              />
              <input
                name="search"
                className="w-full px-16 py-4 rounded-md shadow-md sm:w-96 dark:bg-slate-700 dark:text-zinc-100"
                placeholder="Search for a country..."
                onChange={(e) => searchItems(e.target.value)}
              />
            </div>
            <div className="">
              <select
                defaultValue={"Filter by Region"}
                className="p-4 rounded-md shadow-md cursor-pointer dark:bg-slate-700 dark:text-zinc-100"
                onChange={(e) => searchItems(e.target.value)}
              >
                <option hidden>Filter by Region</option>
                {regions.map((region) => {
                  return (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 py-6 text-center ">
            {filteredCountries.map((country) => {
              return <CountryCard key={country.name.common} {...country} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
