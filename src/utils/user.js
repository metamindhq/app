import { api_base_url } from "../../config";
import storage from "./localStorage";
import axios from "axios";

export async function getCurrentUser() {
  const currentUser = await storage
    .load({
      key: "currentUser",
    })
    .catch((err) => {
      console.log("Error: ", err);
    });

  return currentUser;
}

export async function setCurrentUser(username, password, isDoctor) {
  const endpoint = isDoctor ? "doctors/username" : "patients/username";

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${api_base_url}/${endpoint}/${username}`,
    headers: {
      accept: "application/json",
    },
  };

  const response = await axios.request(config).catch((err) => {
    console.log("Error: ", err);
  });

  if (response.data.password !== password) {
    throw new Error("Invalid username or password");
  }

  await storage
    .save({
      key: "currentUser",
      data: {
        isDoctor,
        ...response.data,
      },
    })
    .catch((err) => {
      console.log("Error: ", err);
    });

  return response.data;
}
