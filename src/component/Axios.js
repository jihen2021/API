import React from "react";
import axios from "axios";

const App = () => {
  axios.defaults.baseURL = "https://reqres.in/api";
  const instance = axios.create({
    baseURL: "https://reqres.in/api",
    timeout: 1000,
    headers: { "X-Custom6Header": "foobar" },
  });
  const instanceData = () => {
    instance.get("/users").then((res) => console.log(res.data));
  };

  const getData = () => {
    axios.get("/users").then((res) => console.log(res.data));
  };
  const config = {
    name: "John Doe",
    job: "Junior Devoloper",
  };
  const postData = () => {
    axios.post("/users", config).then((res) => console.log(res.data));
  };

  const updateData = async () => {
    try {
      const res = await axios.put("/2", {
        name: "Jane Doe",
        job: "Senior Developer",
      });
      console.log(res);
    } catch (error) {}
  };
  const deleteData = () => {
    axios.delete("/2").then((res) => console.log(res.status));
  };
  const multiple = () => {
    Promise.all([
      axios.get("https://reqres.in/api/users"),
      axios.post("https://reqres.in/api/users", config),
    ]).then((res) => console.log(res[0]));
  };

  return (
    <div>
      <button onClick={instanceData}>Instance</button>
      <button onClick={getData}>get</button>
      <button onClick={postData}>Post</button>
      <button onClick={updateData}>update</button>
      <button onClick={deleteData}>delete</button>
      <button onClick={multiple}>Multiple</button>
    </div>
  );
};
export default App;
