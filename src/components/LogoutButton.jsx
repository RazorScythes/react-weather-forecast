import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
    const { logout , isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <button className="px-4 py-2 text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-gray-800 transition-colors" onClick={() => logout()}>
                Log out
            </button>
        )
    )
}

export default LogoutButton