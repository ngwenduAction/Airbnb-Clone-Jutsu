import countries from "world-countries";

// defining formatted countries that we're going to use in our select input
const formattedCountries = countries.map((country) => ({
    value: country.cca2,
    label: country.name.common,
    flag: country.flag,
    latlng: country.latlng,
    region: country.region
}));

const useCountries = () => {
    const getAll = () => formattedCountries;

    const getByValue = (value: string) => {
        return formattedCountries.find((item) => item.value === 
        value);
    }
    // returning an object that exposes geAll & getByValue
    return {
        getAll,
        getByValue
    }
};

export default useCountries;