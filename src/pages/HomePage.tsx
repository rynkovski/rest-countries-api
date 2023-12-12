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
      <div className="bg-stone-50 h-auto dark:bg-slate-800">
        <div className="max-w-7xl mx-auto p-4 px-8">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="relative">
              <Search
                size={24}
                strokeWidth={2.5}
                className="absolute right-4 top-4 dark:stroke-black"
              />
              <input
                name="search"
                className="p-4 w-64"
                placeholder="Search for a country..."
                onChange={(e) => searchItems(e.target.value)}
              />
            </div>
            <select
              defaultValue={"Filter by Region"}
              className="p-4"
              onChange={(e) => searchItems(e.target.value)}
            >
              <option hidden value="">
                Filter by Region
              </option>
              {regions.map((region) => {
                return (
                  <option key={region} value={region}>
                    {region}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-wrap items-center justify-center text-center gap-8 py-2">
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
