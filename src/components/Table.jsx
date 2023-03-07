import { useState } from 'react';
import City from '../assets/city.png'

// This is a functional component called UserProfile
// Display the weather data
/*
    Props:
    setSearchInput , setWeatherInfo = clear the value to reset the search function
    search = displays city on upper left of the table
    weatherData = table data
*/
const Table = ({ setSearchInput, setWeatherInfo, search, weatherData }) => {

    //Convert timezone and dt to = mm/dd/yyyy
    const dateFormat = (dt, timezone) => {
            var date = new Date(dt*1000-(timezone*1000))
            var newdate = (('0' + (date.getMonth()+1)).slice(-2)) + '/' + ('0' + (date.getDate()+1)).slice(-2) + '/' +  date.getFullYear();

            return newdate
    }

    return (
        <div className="max-w-7xl m-auto overflow-x-auto mt-20">
            {
                weatherData[0].cod === 200 ? // check is status code is successfull, if not it will render the not found element
                    <>
                    <div className="text-gray-800 my-4 font-bold text-xl font-poppins">{search}</div>
                    <table className="min-w-full divide-y divide-gray-200 bg-gray-800 font-poppins">
                        <thead>
                            <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-50 uppercase tracking-wider">Date (mm/dd/yyyy)</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-50 uppercase tracking-wider">Temp(F)</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-50 uppercase tracking-wider hidden sm:table-cell">Description</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-50 uppercase tracking-wider hidden sm:table-cell">Main</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-50 uppercase tracking-wider hidden sm:table-cell">Pressure</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-50 uppercase tracking-wider hidden sm:table-cell">Humidity</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {
                                weatherData.map((data) => {
                                    return (
                                        <tr key={data.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="text-sm text-gray-500">{dateFormat(data.dt, data.timezone)}</div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-500">{data.main.temp}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">{data.weather[0].description}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">{data.weather[0].main}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">{data.main.pressure}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden sm:table-cell">{data.main.humidity}</td>
                                        </tr>
                                    )
                                })
                            }
                        
                        </tbody>
                    </table>
                    <button 
                        className="bg-gray-800 hover:bg-transparent float-right mt-12 hover:text-gray-800 text-white font-semibold py-2 px-8 border border-gray-800 rounded-lg transition-colors duration-300 ease-in-out"
                        onClick={() => {
                            setSearchInput("")
                            setWeatherInfo([]) // return value to the parent component
                        }}
                    >
                        Back
                    </button>
                    </>
                :
                    <div className="flex flex-col items-center justify-center mt-28">
                        <img
                            className="h-64 w-64 mb-8"
                            src={City}
                            alt="Not Found"
                        />
                        <h1 className="text-4xl font-bold mb-4">Oops! City Not Found</h1>
                        <p className="text-lg mb-8">The city you are looking for does not exist.</p>
                        <div className="flex justify-center items-center">
                            <button 
                                className="bg-gray-800 hover:bg-transparent float-right mt-12 hover:text-gray-800 text-white font-semibold py-2 px-8 border border-gray-800 rounded-lg transition-colors duration-300 ease-in-out"
                                onClick={() => {
                                    setSearchInput("")
                                    setWeatherInfo([]) // return value to the parent component
                                }}
                            >
                                Back
                            </button>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Table;