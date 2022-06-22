import axios from "axios";

const API_URL = "https://notregrandbleu.herokuapp.com/api/users";

export class AuthService {
  static login(email, password) {
    return axios
      .post(API_URL + "/login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  static logout() {
    localStorage.removeItem("user");
  }
  static register(name, email, password, password2) {
    return axios.post(API_URL + "/register", {
      name,
      email,
      password,
      password2,
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
}
