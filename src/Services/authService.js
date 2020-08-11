import { Http } from "Utils";

export const loginService = (payload) => Http.post("/login", payload);
export const getUser = () => Http.get("/user");
export const signupService = (payload) => Http.post("/register", payload);
