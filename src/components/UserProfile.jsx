// This is a functional component called UserProfile
// It receives three props: name, githubUrl, and picture
// Display profile name, githubUrl and the profile image

const UserProfile = ({name, githubUrl, picture}) => {
    return (
      <div>
        {githubUrl && (
            <>
                <div className="flex justify-center items-center flex-col space-y-6 mt-7 mb-7 font-poppins transition-all duration-500 scale-100 opacity-100">
                    <img src={picture} alt="profile picture" className="w-36 h-36 border-4 border-gray-800 p-1 rounded-full shadow-lg object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"/>
                    <div className="flex flex-col items-center space-y-2">
                        <p className="text-lg font-semibold text-gray-800">{name}</p>
                        <p className="text-sm text-gray-500"><a href={githubUrl}>{githubUrl}</a></p>
                    </div>
                </div>
            </>
        )}
      </div>
    );
  };

export default UserProfile