import axios from "axios";

const _URL = "http://localhost:5003";

export const sendMsg = (msg) => {
  console.log("message", msg);
  axios
    .post(_URL + "/contact", msg)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

export const newCar = (car) => {
  const owner = localStorage.getItem("userId");

  console.log("owner", owner);
  axios
    .post(_URL + "/car", { ...car, owner })
    .then(function (response) {
      // handle success
      console.log(response);
      alert("your ad has been successfully created");
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};
export const deleteCar = (id) => {
  axios
    .delete(_URL + "/car/" + id)
    .then(function (response) {
      // handle success
      console.log(response);
      alert("the ad has been removed");
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
};

export const getAllCars = () => {
  return axios
    .get(_URL + "/car/all")
    .then(function (response) {
      return response.data.data;
    })
    .catch(function (error) {
      return error;
    });
};

export const getMyCars = (id) => {
  return axios
    .get(_URL + "/car/user/" + id)
    .then(function (response) {
      console.log("xxxxxxxxxxxxxxx", response.data, id);
      return response.data.data;
    })
    .catch(function (error) {
      return error;
    });
};

export const api_login = async (credentials) => {
  try {
    const api = axios.create({
      withCredentials: true,
      baseURL: _URL,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const response = await api.post(_URL + "/auth/user/login", credentials);

    return response.data;
  } catch (err) {
    console.log("yyyyyy", err);
    alert("password/login is incorrect");
    return err.response.data;
  }
};

export const api_signup = async (credentials) => {
  try {
    const response = await axios.post(_URL + "/auth/user/signup", credentials);
    // localStorage.setItem("email", JSON.stringify(response.data.email));
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const api_logout = async () => {
  localStorage.removeItem("userId");
  return true;
};
