import { LoginButton } from './index'

// If the anonymous user is not logged in this will be display in the landing page 
const Welcome = () => {

    return (
        <div className='max-w-2xl mx-auto px-4 sm:px-6 lg:px-8'> 
            <p className='max-w-4xl overflow-x-auto font-poppins mt-28'>Welcome to the weather forecast web application. Please login with your Github user to use the application and view the weather in your city</p>
            <LoginButton />
        </div>
  )
}

export default Welcome