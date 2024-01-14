type Country = {
  flags: {
    png: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  borders: string[];
  currencies: {
    symbol: string;
  };
  languages: string[];
  tld: string;
  cca3: string;
};
