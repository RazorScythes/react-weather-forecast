import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Authentication from './components/Authentication';
import Navbar from './components/Navbar';
import Table from './components/Table'
import Welcome from './components/Welcome';

//openweathermap API
const API = {
  key: import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY,
  base: import.meta.env.VITE_OPEN_WEATHER_MAP_BASE
}

const App = () => {

    const { isAuthenticated, isLoading } = useAuth0();
    const [searchInput, setSearchInput] = useState('')
    const [weatherData, setWeatherInfo] = useState([])

    useEffect(() => {
      if(searchInput){
        //fetching data from the input value collected in the Searchbar component
        
        fetch(`${API.base}weather?q=${searchInput}&units=metric&appid=${API.key}`) 
        .then((res) => res.json())
        .then((result) => {
          setWeatherInfo((prevArray) => [...prevArray, result])
        })

      }
    }, [searchInput])

    return (
      <div className="w-full overflow-hidden">
          <Navbar/> 
          {
            isAuthenticated ? //when the user is logged in. This part will be render
              <>
                { 
                  !weatherData.length > 0 ? // check if state has a value. [True] User display and searchbar will be rendered : [False] Table data will be rendered
                    <Authentication setSearchInput={setSearchInput}/>
                  :
                    <Table setSearchInput={setSearchInput} setWeatherInfo={setWeatherInfo} search={searchInput} weatherData={weatherData}/>
                }
              </>
            : 
            isLoading ? // when getting user information. This part will be render
              <div className="flex justify-center items-center flex-col space-y-6 mt-7 mb-7 font-poppins">
                <p className="text-lg font-semibold text-gray-800">Loading ...</p>
              </div>
            : // when no user is logged in. This part will be render
              <>
                <Welcome/>
              </>
          }
      </div>
    )
};

export default App;
