import { useEffect, useState } from "react";
import countryApi from "../api/country.api";
import { CountryObj } from "../api/country.type";
import CountryCard from "./CountryCard";

function CountryList() {
  const [contries, setContries] = useState<CountryObj[]>([]);
  const [selectedContries, setSelectedContries] = useState<CountryObj[]>([]);

  const selectedContryNames = selectedContries.map(
    (selectedContry) => selectedContry.name.common
  );

  const handleClick = (country: CountryObj) => {
    if (
      selectedContries.find(
        (selectedContry) => selectedContry.name.common === country.name.common
      )
    ) {
      setSelectedContries((prevState) =>
        prevState.filter(
          (prevCountry) => prevCountry.name.common !== country.name.common
        )
      );
    } else {
      setSelectedContries((prevState) => [...prevState, country]);
    }
  };

  useEffect(() => {
    countryApi.getCountryAll().then((response) => setContries(response));
  }, []);
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mt-12">
        Favorite Countries
      </h2>
      <div className="selected-country-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {selectedContries.map((selectedCountry) => (
          <CountryCard
            key={selectedCountry.name.common}
            country={selectedCountry}
            onClick={handleClick}
            isSelected={true}
          />
        ))}
      </div>
      <h1 className="text-3xl font-bold text-center mb-8">Countries</h1>
      <div className="country-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {contries
          .filter(
            (country) => !selectedContryNames.includes(country.name.common)
          )
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                country={country}
                onClick={handleClick}
                isSelected={false}
              />
            );
          })}
      </div>
    </div>
  );
}

export default CountryList;
