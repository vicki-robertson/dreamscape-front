import { API_ENDPOINT } from "./index";
import axios from "axios";

export async function getDestinationById(id){
  try {
    console.log('Fetching data for detail:');
    const response = await axios.get(`${API_ENDPOINT}/api/destinations/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}