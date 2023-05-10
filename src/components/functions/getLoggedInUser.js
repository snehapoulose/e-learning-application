export const getLoggedInUser = () => {
    const signedUser = JSON.parse(localStorage.getItem("signedUserDetails"));
    return signedUser.firstname;
  };
