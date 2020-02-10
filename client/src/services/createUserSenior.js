import http from "./httpServices";
import config from "../config";

const apiToCreateUser = config.authApiUrl + "/regsiterClient"; // Api url to create a new user

// Function to create a new User (Junior/Auditor)
export async function createUser({
  name,
  email,
  role,
  designation,
  panNumber,
  contact,
  companyName,
  registeredBy
}) {
  const result = http.post(apiToCreateUser, {
    name,
    email,
    role,
    designation,
    panNumber,
    contact,
    companyName,
    registeredBy
  });
  return result;
}
