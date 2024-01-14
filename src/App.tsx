import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const BASE_URL = "https://restcountries.com/v3.1";

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  useEffect(() => {
    const fetchCountries = async () => {
      const data = await fetch(BASE_URL + "/all");
      const parsedData = await data.json();
      setCountries(parsedData);
    };
    fetchCountries();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage {...countries} />} />
          <Route path="/:id" element={<CountryPage {...countries} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
