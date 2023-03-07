import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <button className="bg-gray-800 hover:bg-transparent hover:text-gray-800 text-white font-semibold my-8 py-2 px-8 border border-gray-800 rounded-lg transition-colors duration-300 ease-in-out" onClick={() => loginWithRedirect()}>
                Log in
            </button>
        )
    )
}

export default LoginButton