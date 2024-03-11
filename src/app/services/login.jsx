import { API_ENDPOINT } from "./index";
import axios from 'axios';

export const handleSubmit = async (e, formData, setMessage, setErrors, setShowModal) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_ENDPOINT}/api/login`, formData);
      console.log(response.data);
      setShowModal(true);

      if (response.status === 200) {
        setMessage(response.data.message);
        console.log(response.data.message);
      }
    } catch (error) {
      throw error;
    }
  };


