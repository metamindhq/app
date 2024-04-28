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

export async function setCurrentUser() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return;
  }

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${api_base_url}/patients/${currentUser.id}`,
    headers: {
      accept: "application/json",
    },
  };

  const response = await axios.request(config).catch((err) => {
    console.log("Error: ", err);
  });

  await storage
    .save({
      key: "currentUser",
      data: response.data,
    })
    .catch((err) => {
      console.log("Error: ", err);
    });

  return response.data;
}
