export const getUserName = () => {
    const getUserDetails = JSON.parse(localStorage.getItem("signedUserDetails"));
    return getUserDetails.first_name  + getUserDetails.last_name;
  };