import { useState } from 'react';

// This is a functional component called Searchbar
// search props return value from the parent after form submitted
// props: search = pass the value to the parent component

const Searchbar = ({ search }) => {
    // State to hold the value of the search input
    const [searchInput, setSearchInput] = useState("")

    // Function to handle form submission
    const Submit = (e) => {
        e.preventDefault()
        search(searchInput) // return the input value from the parent
    }

    return (
        <form onSubmit={Submit}>
            <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.5 1C4.35786 1 1 4.35786 1 8.5C1 12.6421 4.35786 16 8.5 16C10.0983 16 11.5667 15.4201 12.7103 14.4796L16.2929 18.0622C16.6834 18.4527 17.3166 18.4527 17.7071 18.0622C18.0976 17.6717 18.0976 17.0385 17.7071 16.648L14.1245 13.0654C15.04 11.9883 15.5 10.6837 15.5 9.25C15.5 5.41015 12.5899 2.5 8.75 2.5C4.91015 2.5 2 5.41015 2 9.25C2 13.0899 4.91015 16 8.75 16C12.5899 16 15.5 13.0899 15.5 9.25C15.5 7.8163 15.04 6.51169 14.1245 5.4346L10.5419 1.85202C9.60138 1.22149 8.43661 1 7.25 1H8.5ZM8.5 3C11.5376 3 14 5.46243 14 8.5C14 11.5376 11.5376 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3Z"></path>
                    </svg>
                </div>
                <input 
                    className="block w-full py-2 pl-10 pr-3 leading-5 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                    type="text" 
                    placeholder="Search" 
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
            </div>

            <div className="flex justify-center items-center my-5">
                <button className="bg-gray-800 hover:bg-transparent hover:text-gray-800 text-white font-bold py-2 px-4 border border-gray-800 rounded-lg transition-colors duration-300 ease-in-out">
                    Display Weather
                </button>
            </div>
        </form>
    )
}

export default Searchbar