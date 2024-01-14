import { Link, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

const BASE_URL = "https://restcountries.com/v3.1";

function CountryPage(countries: Country[]) {
  let { id } = useParams();
  const [country, setCountry] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountry = async () => {
      const data = await fetch(BASE_URL + `/alpha/${id}`);
      const parsedData = await data.json();
      setCountry(parsedData);
    };
    fetchCountry();
  }, []);

  console.log(id);
  console.log(country);
  console.log(countries);

  return (
    <>
      <div className="h-screen bg-stone-50 dark:bg-slate-800">
        <div className="p-4 px-8 mx-auto max-w-7xl">
          <div className="flex items-center justify-center gap-2 p-4 my-2 bg-white rounded shadow-md cursor-pointer w-36 hover:bg-slate-100 dark:hover:bg-slate-700/50 dark:bg-slate-700">
            <ArrowLeft />
            <Link className="font-semibold" to="/">
              Go back
            </Link>
          </div>
          {country.map((countryItem) => (
            <div
              className="flex flex-col items-center justify-center gap-24 mt-4 md:flex-row"
              key={countryItem.name.common}
            >
              <div className="md:w-1/2">
                <img
                  className="w-full"
                  src={countryItem.flags.png}
                  alt={countryItem.name.common}
                />
              </div>
              <div className="md:w-1/2">
                <h1 className="py-8 text-4xl font-bold">
                  {countryItem.name.common}
                </h1>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  <p>
                    <span className="font-semibold">Native name: </span>
                    {countryItem.name.official}
                  </p>
                  <p>
                    <span className="font-semibold">Population: </span>
                    {countryItem.population}
                  </p>
                  <p>
                    <span className="font-semibold">Region: </span>
                    {countryItem.region}
                  </p>
                  <p>
                    <span className="font-semibold">Sub region: </span>
                    {countryItem.subregion}
                  </p>
                  <p>
                    <span className="font-semibold">Capital: </span>
                    {countryItem.capital}
                  </p>
                  <p>
                    <span className="font-semibold">Top level domain: </span>
                    {countryItem.tld}
                  </p>
                  <p>
                    <span className="font-semibold">Currencies: </span>
                    {countryItem.currencies.symbol}
                  </p>
                  <p>
                    <span className="font-semibold">Languages: </span>
                    {/* {countryItem.languages} */}
                  </p>
                </div>
                <div className="flex gap-2 py-20">
                  <span className="font-semibold">Border countries: </span>

                  {countryItem.borders.map((border) => (
                    <button> {border}</button>
                  ))}
                  {/* {countryItem.borders.map((border) => (
                    <Link to={`${border}`} key={border}>
                      {border}
                    </Link>
                  ))} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default CountryPage;
