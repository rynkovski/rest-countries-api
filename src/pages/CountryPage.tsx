import { Link, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";

const BASE_URL = "https://restcountries.com/v3.1";

function CountryPage() {
  let { id } = useParams();
  const [country, setCountry] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountry = async () => {
      const data = await fetch(BASE_URL + `/name/${id}`);
      const parsedData = await data.json();
      setCountry(parsedData);
    };
    fetchCountry();
  }, []);

  console.log(id);
  console.log(country);

  return (
    <>
      <div className="bg-stone-50 h-auto ">
        <div className="max-w-7xl mx-auto p-4 px-8">
          <div className="flex items-center my-2 w-fit p-4 shadow-gray-600 shadow-md rounded">
            <ArrowLeft />
            <Link to="/">Go back</Link>
          </div>
          {country.map((countryItem) => (
            <div
              className="flex flex-col md:flex-row items-center justify-center gap-24 mt-4"
              key={countryItem.name.common}
            >
              <div className="w-96">
                <img
                  src={countryItem.flags.svg}
                  alt={countryItem.name.common}
                />
              </div>
              <div>
                <h2 className="font-bold text-md py-2">
                  {countryItem.name.common}
                </h2>
                {/* <p>{countryItem.name.nativeName}</p> */}
                <p>{countryItem.tld}</p>
                <p>{countryItem.currencies.symbol}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default CountryPage;
