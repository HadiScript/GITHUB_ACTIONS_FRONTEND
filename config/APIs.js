//const baseUrl = "http://localhost:5000";
const baseUrl = "https://actions-server.hadielearning.com";
//const baseUrl = "http://109.205.178.167:5000";

export const API = `${baseUrl}/api`;

export const toImageUrl = (filePath) => {
  return `${baseUrl}/${filePath.replace(/\\/g, "/")}`;
};
