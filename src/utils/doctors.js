import axios from "axios";
import { api_base_url } from "../../config";

export async function getDoctorById(id) {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${api_base_url}/doctors/${id}`,
    headers: {
      accept: "application/json",
    },
  };

  const response = await axios.request(config).catch((err) => {
    console.log("Error: ", err);
  });

  return response.data;
}

export async function listDoctors() {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${api_base_url}/doctors`,
    headers: {
      accept: "application/json",
    },
  };

  const response = await axios.request(config).catch((err) => {
    console.log("Error: ", err);
  });

  return response.data;
}
