import { useState } from "react";

const ExerciceComponent: React.FC = () => {
  const [value, setValue] = useState("");
  const [foundData, setFoundData] = useState();
  const [previousValue, setPreviousValue] = useState([]);
  const mockData = {
    London: {
      temperature: "18deg",
      wind: "20km/h",
    },
    "South Africa": {
      temperature: "28deg",
      wind: "0km/h",
    },
    "New York": {
      temperature: "5deg",
      wind: "0km/h",
    },
  };

  const handleSearchData = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const getData = () => {
    const cityName = Object.keys(mockData).find((city) => {
      return city.toLowerCase().includes(value.toLowerCase());
    });
    setFoundData(mockData[cityName]);
  };

  // create a search which will show the data once it is clicked.
  return (
    <div>
      <input placeholder="Search for weather" onChange={handleSearchData} />
      <button onClick={getData}> Search</button>

      {foundData ? (
        <>
          <h1>Found Data</h1>
          <p>Temperature: {foundData.temperature}</p>
          <p>Wind: {foundData.wind}</p>
        </>
      ) : (
        <p>No Found Data</p>
      )}
    </div>
  );
};

export default ExerciceComponent;
