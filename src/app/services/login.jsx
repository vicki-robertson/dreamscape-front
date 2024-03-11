import { API_ENDPOINT } from "./index";
import axios from 'axios';

export const handleSubmit = async (e, formData, setMessage, setErrors) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_ENDPOINT}/api/login`, formData);
      console.log(response.data);

      if (response.status === 200) {
        setMessage(response.data.message);
        console.log(response.data.message);
      }
    } catch (error) {
      if (error.response && error.response.data.errors) {
        const errorData = error.response.data.errors;
        setErrors({
          email: errorData.email ? errorData.email : "",
          password: errorData.password ? errorData.password : ""
        });
      } else {
        setMessage("Error: " + error.response.data.message);
      }
    }
  };
