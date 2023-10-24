import { api } from "../lib/axios";

function createUser() {
  api
    .post("/users", {
      name: "Helena Rossi",
      email: "helena@gmail.com",
      password: "123456",
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}

createUser();
