  import { API_ENDPOINT } from "./index";
  import axios from 'axios';
  
  export const handleSubmit = async (e, formData, setMessage, setErrors, setShowModal) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_ENDPOINT}/api/login`, formData);
      if (response.status === 200) {
        setMessage(response.data.message);
        setShowModal(true);
      }
    } catch (error) {
      if (error.response && error.response.data.errors) {
        const errorData = error.response.data.errors;
        setErrors({
          email: errorData.email ? errorData.email : "",
          password: errorData.password ? errorData.password : ""
        });
      } else if (error.response && error.response.data.message) {
        setMessage(error.response.data.message);
        setShowModal(true);
      }
    }
  };