import axios from "axios";
import { api_base_url } from "../../config";
import { getCurrentUser } from "./user";

export async function getLatestPrescription() {
  const currentUser = await getCurrentUser();

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${api_base_url}/prescriptions/patient/${currentUser.id}`,
    headers: {
      accept: "application/json",
    },
  };

  const response = await axios.request(config).catch((err) => console.log(err));

  return response.data[0];
}
