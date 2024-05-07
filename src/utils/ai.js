import axios from "axios";
import { api_base_url } from "../../config";

export async function getSpecialisationUsingAi(symptoms) {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `${api_base_url}/ai/specialization?specializations=%20&diagnosed_diseases=${symptoms}`,
    headers: {
      accept: "application/json",
    },
  };

  const response = await axios.request(config).catch((err) => console.log(err));

  return response.data;
}
