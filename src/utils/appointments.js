import { api_base_url } from "../../config";
import { getCurrentUser } from "./user";
import axios from "axios";

export async function getMyAppointments() {
  const currentUser = await getCurrentUser();

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${api_base_url}/appointments/patient/${currentUser.id}`,
    headers: {
      accept: "application/json",
    },
  };

  const response = await axios.request(config).catch((err) => console.log(err));

  return response.data;
}

export async function createAppointment(body) {
  let data = JSON.stringify(body);

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `${api_base_url}/appointments/`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    data: data,
  };

  const response = await axios.request(config).catch((error) => {
    console.log(error);
  });

  return response.data;
}

export async function completeAppointment(id) {
  let config = {
    method: "patch",
    maxBodyLength: Infinity,
    url: `${api_base_url}/appointments/${id}/complete`,
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const response = await axios.request(config).catch((error) => {
    console.log(error);
  });

  return response.data;
}
