import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/api",
});

export const getAllJobs = () => {
  return api.get("/jobs");
};

export const getJobById = (id) => api.get(`/jobs/${id}`);

export const searchJobs = (title, location) => {
  return api.get("/jobs/search", {
    params: { title, location },
  });
};

export const getJobsByCategory = (category) => {
  return api.get(`/jobs/category/${category}`);
};

export const loginUser = (email, password) => {
  return api.post("/users/login", { email, password });
};

export const registerUser = (fullName, email, password) => {
  return api.post("/users/register", { fullName, email, password });
};

export const applyToJob = (applicationData) =>
  api.post("/applications", applicationData);

export const getMyApplications = (userId) =>
  api.get(`/applications/user/${userId}`);

export default api;
