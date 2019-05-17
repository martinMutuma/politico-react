export const mainUrl = "https://mmmpolitical.herokuapp.com/api/v2/";

export const reqConfig = () => {
  return {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("token")
    }
  };
};
