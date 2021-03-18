import axios from "axios";
import { apiEndpoint } from "../config";

export const getUser = async (idToken: string) => {
  console.log("getting User");
  try {
    const response = await axios.get(`${apiEndpoint}/users`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
    });

    console.log("User:", response.data);

    return response.data.user;
  } catch (e) {
    // return e.response.data.user;
  }
};

export const createUser = async (idToken: string, userData: any) => {
  const { uid } = userData;
  console.log("Creating User");

  const response = await axios.post(
    `${apiEndpoint}/users`,
    { uid },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
    }
  );

  console.log("User:", response.data);

  return response.data.user;
};
