export const getUserName = () => {
    const getUserDetails = JSON.parse(localStorage.getItem("signedUserDetails"));
    return getUserDetails.name;
  };