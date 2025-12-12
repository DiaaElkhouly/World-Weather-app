import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const WeatherCard = () => {
  const [selectedCity, setSelectedCity] = useState("Cairo");
  let [data, setData] = useState({
    location: "",
    date: "",
    temperature: null,
    condition: "",
    icon: null,
    pressure: null,
    cloud: null,
    humidity: null,
    windSpeed: null,
  });

  const worldCapitals = [
    "Cairo",
    "London",
    "New York",
    "Tokyo",
    "Paris",
    "Berlin",
    "Moscow",
    "Beijing",
    "Sydney",
    "Rome",
    "Madrid",
    "Amsterdam",
    "Vienna",
    "Prague",
    "Budapest",
    "Warsaw",
    "Athens",
    "Lisbon",
    "Dublin",
    "Stockholm",
    "Oslo",
    "Copenhagen",
    "Helsinki",
    "Reykjavik",
    "Brussels",
    "Luxembourg",
    "Zurich",
    "Geneva",
    "Monaco",
    "Andorra la Vella",
    "San Marino",
    "Vatican City",
    "Ljubljana",
    "Zagreb",
    "Sarajevo",
    "Belgrade",
    "Bucharest",
    "Sofia",
    "Tirana",
    "Podgorica",
    "Skopje",
    "Chisinau",
    "Kiev",
    "Minsk",
    "Vilnius",
    "Riga",
    "Tallinn",
    "Hanoi",
    "Bangkok",
    "Jakarta",
    "Manila",
    "Seoul",
    "Taipei",
    "Singapore",
    "Kuala Lumpur",
    "Islamabad",
    "New Delhi",
    "Dhaka",
    "Kathmandu",
    "Colombo",
    "Male",
    "Abu Dhabi",
    "Doha",
    "Riyadh",
    "Jeddah",
    "Kuwait City",
    "Manama",
    "Muscat",
    "Sana'a",
    "Amman",
    "Beirut",
    "Damascus",
    "Jerusalem",
    "Baghdad",
    "Tehran",
    "Ankara",
    "Tbilisi",
    "Yerevan",
    "Baku",
    "Astana",
    "Tashkent",
    "Dushanbe",
    "Ashgabat",
    "Bishkek",
    "Ulaanbaatar",
    "Pyongyang",
    "Harare",
    "Lusaka",
    "Gaborone",
    "Windhoek",
    "Pretoria",
    "Cape Town",
    "Maputo",
    "Lilongwe",
    "Blantyre",
    "Dodoma",
    "Dar es Salaam",
    "Kampala",
    "Nairobi",
    "Addis Ababa",
    "Djibouti",
    "Mogadishu",
    "Khartoum",
    "Juba",
    "Asmara",
    "Algiers",
    "Tunis",
    "Tripoli",
    "Rabat",
    "Nouakchott",
    "Bamako",
    "Ouagadougou",
    "Niamey",
    "N'Djamena",
    "Bangui",
    "Yaounde",
    "Libreville",
    "Brazzaville",
    "Kinshasa",
    "Luanda",
    "Lima",
    "Bogota",
    "Caracas",
    "Georgetown",
    "Paramaribo",
    "Cayenne",
    "Asuncion",
    "Montevideo",
    "Buenos Aires",
    "Santiago",
    "Quito",
    "Guayaquil",
    "La Paz",
    "Sucre",
    "Brasilia",
    "Sao Paulo",
    "Mexico City",
    "Guatemala City",
    "San Salvador",
    "Tegucigalpa",
    "Managua",
    "San Jose",
    "Panama City",
    "Havana",
    "Port-au-Prince",
    "Santo Domingo",
    "Kingston",
    "Nassau",
    "Bridgetown",
    "Castries",
    "Roseau",
    "St. George's",
    "Port of Spain",
    "Basseterre",
    "St. John's",
    "Willemstad",
    "Oranjestad",
    "Philipsburg",
    "Marigot",
    "Gustavia",
    "Washington D.C.",
    "Ottawa",
    "Mexico City",
    "Havana",
    "Kingston",
    "Port-au-Prince",
    "Santo Domingo",
    "San Jose",
    "Panama City",
    "Bogota",
    "Quito",
    "Lima",
    "La Paz",
    "Santiago",
    "Buenos Aires",
    "Montevideo",
    "Asuncion",
    "Brasilia",
    "Georgetown",
    "Paramaribo",
    "Cayenne",
    "Caracas",
  ];

  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=fba723b410644b75868132256251212&q=${selectedCity}`
      )
      .then(function (response) {
        // handle success
        console.log(response.data);
        const location = response.data.location.name;
        const date = response.data.current.last_updated;
        const temperature = Math.round(response.data.current.temp_c);
        const condition = response.data.current.condition.text;
        const icon = response.data.current.condition.icon;
        const humidity = response.data.current.humidity;
        const windSpeed = response.data.current.wind_kph;
        const pressure = response.data.current.pressure_mb;
        const cloud = response.data.current.cloud;
        setData({
          location,
          temperature,
          date,
          condition,
          icon,
          humidity,
          windSpeed,
          pressure,
          cloud,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, [selectedCity]);

  return (
    <div className="glass p-1 text-white rounded-2xl w-full max-w-md mx-auto animate-fade-in bg-gray-300/20 ">
      {/* City Selector */}
      <div className="mb-6">
        <label
          htmlFor="city-select"
          className="block text-center text-sm font-semibold text-blue-300 uppercase tracking-wider mb-2"
        >
          Select City
        </label>
        <select
          id="city-select"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
        >
          {worldCapitals.map((city) => (
            <option key={city} value={city} className="bg-slate-800 text-white">
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Header Section */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-white mb-1">{data.location}</h2>
        <div className="flex justify-center gap-3 items-end">
          <p className="text-xl">Last Updated :</p>{" "}
          <p className="text-blue-200">{data.date}</p>
        </div>
      </div>

      {/* Main Weather Display */}
      <div className="text-center mb-8">
        <div className="text-7xl font-light text-white mb-2">
          {data.temperature}°
        </div>
        <div className="text-6xl flex justify-center gap-10 items-center">
          <p className="text-xl text-blue-100">{data.condition}</p>
          <img src={data.icon} alt="" />
        </div>
      </div>

      {/* Temperature Details */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider">
            Pressure
          </p>
          <p className="text-2xl font-medium text-white flex justify-center gap-1 pl-1">
            {data.pressure} <p className="text-xl">mb</p>
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider">
            Cloud
          </p>
          <p className="text-2xl font-medium text-white">{data.cloud}%</p>
        </div>
        <div className="text-center">
          <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider">
            Humidity
          </p>
          <p className="text-2xl font-medium text-white">{data.humidity}%</p>
        </div>
      </div>

      {/* Wind Speed */}
      <div className="text-center border-t border-white/20 pt-3">
        <p className="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-2">
          Wind Speed
        </p>
        <p className="text-xl font-medium text-white">{data.windSpeed} km/h</p>
      </div>
    </div>
  );
};

export default WeatherCard;
