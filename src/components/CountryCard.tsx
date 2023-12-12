import { Link } from "react-router-dom";

function CountryCard(country: Country) {
  const getCountry = () => {
    console.log(country.name.common);
  };
  return (
    <>
      <Link to={country.name.common}>
        <div
          className="w-64 h-80 flex shadow-lg dark:bg-slate-500 flex-col justify-center cursor-pointer"
          onClick={getCountry}
        >
          <div className="h-full ">
            <img className="aspect-[16/10]" src={country.flags.svg} />
          </div>

          <div className="flex flex-col items-start gap-1 p-4">
            <p className="font-bold text-md py-2">{country.name.common}</p>
            <p className="font-semibold">
              Population:
              <span className="font-normal pl-1">
                {country.population.toLocaleString()}
              </span>
            </p>
            <p className="font-semibold">
              Region:
              <span className="font-normal pl-1">{country.region}</span>
            </p>
            <p className="font-semibold">
              Capital:
              <span className="font-normal pl-1">{country.capital}</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
export default CountryCard;
