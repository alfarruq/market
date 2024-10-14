import { useEffect, useState } from "react";
import "./style.css";

function ProductForm() {
  const [formData, setFormData] = useState({
    type: "",
    img: "",
    title: "",
    price: "",
    description: "",
    color: "",
    id: "1",
  });
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetch("https://66f68256436827ced9776af5.mockapi.io/types")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://66f68256436827ced9776af5.mockapi.io/all-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Success:", data);
        setFormData({
          type: "",
          img: "",
          title: "",
          price: "",
          description: "",
          color: "",
          id: "1",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        placeholder="Color"
        type="text"
        name="color"
        value={formData.color}
        onChange={handleChange}
        required
      />
      <input
        placeholder="Price"
        type="text"
        name="price"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <input
        placeholder="Description"
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />
      <input
        placeholder="Image URL"
        type="text"
        name="img"
        value={formData.img}
        onChange={handleChange}
        required
      />
      <select
        name="type"
        value={formData.type}
        onChange={handleChange}
        required
      >
        {data?.map((item) => {
          return (
            <option value={item?.type} key={item.id}>
              {item.title}
            </option>
          );
        })}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ProductForm;
