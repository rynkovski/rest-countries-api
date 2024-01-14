import { Link } from "react-router-dom";

function CountryCard(country: Country) {
  const getCountry = () => {
    console.log(country.cca3);
  };
  return (
    <>
      <Link className="flex-1" to={country.cca3}>
        <div
          className="flex flex-col overflow-hidden rounded-md shadow-lg cursor-pointer dark:bg-slate-700 hover:dark:bg-slate-700/50"
          onClick={getCountry}
        >
          <div className="h-1/2">
            <img
              className="w-full aspect-video"
              src={country.flags.png}
              alt={country.name.official}
            />
          </div>

          <div className="flex flex-col items-start gap-1 p-4 h-1/2">
            <p className="py-2 font-bold text-md">{country.name.common}</p>
            <p className="font-semibold">
              Population:
              <span className="pl-1 font-normal">
                {country.population.toLocaleString()}
              </span>
            </p>
            <p className="font-semibold">
              Region:
              <span className="pl-1 font-normal">{country.region}</span>
            </p>
            <p className="font-semibold">
              Capital:
              <span className="pl-1 font-normal">{country.capital}</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
export default CountryCard;
