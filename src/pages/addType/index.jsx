import { useState } from "react";

function AddType() {
  const [data, setData] = useState({
    type: "",
    title: "",
    img: "",
  });

  function add(e) {
    e.preventDefault();
    fetch("https://66f68256436827ced9776af5.mockapi.io/types", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Success", data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <h1>Type qo`shish</h1>
      <div>
        <input
          onChange={(e) => setData({ ...data, type: e.target.value })}
          required
          placeholder="Type Name"
          type="text"
        />
        <input
          onChange={(e) => setData({ ...data, title: e.target.value })}
          required
          placeholder="Title"
          type="text"
        />
        <input
          onChange={(e) => setData({ ...data, img: e.target.value })}
          required
          placeholder="img"
          type="text"
        />
        <button onClick={add}>Submit</button>
      </div>
    </div>
  );
}

export default AddType;
