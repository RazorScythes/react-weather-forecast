import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { UserProfile, Searchbar, LoginButton } from './index'

// This is a functional component called Authentication
// After successfully login the basic information gathered will be displayed in the home (name, github nickname and image)
// props: setSearchInput = pass the value to the parent component

const Authentication = ({ setSearchInput }) => {
  const { isAuthenticated, user } = useAuth0();

  // Initialize profile state with default values
  const [profile, setProfile] = useState({
        name: '',
        githubUrl: '',
        picture: ''
  });

  // Update profile state when user data is loaded
  useEffect(() => {
    if (user) {
        const githubUrl = `https://github.com/${user.nickname}`;
        const fullName = user.name;
        const picture = user.picture;

        setProfile((prevProfile) => ({
            ...prevProfile,
            name: fullName,
            githubUrl: githubUrl,
            picture: picture
        }));

    }
  }, [isAuthenticated, user]);

  // Display the user's name and a logout button if the user is authenticated.
  return (
        <div>
            <UserProfile name={profile.name} githubUrl={profile.githubUrl} picture={profile.picture}/>
            <Searchbar search={setSearchInput}/>
        </div>
  );
};

export default Authentication;