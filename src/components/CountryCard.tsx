import { CountryObj } from "../api/country.type";

interface CountryCardProps {
  country: CountryObj;
  onClick: (country: CountryObj) => void;
  isSelected: boolean;
}

function CountryCard({ country, onClick, isSelected }: CountryCardProps) {
  return (
    <div
      onClick={() => onClick(country)}
      className={`country-card p-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-transform transform ${
        isSelected ? "border border-solid border-green-500" : ""
      }`}
    >
      <img className="w-20 h-auto mx-auto mb-4" src={country.flags.png} />
      <h3 className="text-xl font-semibold mb-2">{country.name.common}</h3>
      <p className="text-gray-600">
        {country.capital ? country.capital[0] : "N/A"}
      </p>
    </div>
  );
}

export default CountryCard;
