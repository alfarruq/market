import { useEffect, useState } from "react";

function Tyoe() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://66f68256436827ced9776af5.mockapi.io/types")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, );

  function handleDelete(id) {

    // console.log(`https://66f68256436827ced9776af5.mockapi.io/types/${id}`);
    fetch(`https://66f68256436827ced9776af5.mockapi.io/types/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((info) => {
        alert("malumot yoq qilindi", info);
        fetch("https://66f68256436827ced9776af5.mockapi.io/types")
          .then((response) => response.json())
          .then((data) => setData(data));
      });
  }

  return (
    <table className="table-type container">
      <thead>
        <tr>
          <th>#</th>
          <th>img</th>
          <th>Name</th>
          <th>type </th>
          <th>Action </th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item, index) => {
          return (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>
                <img className="table-img" src={item.img} alt="" />
              </td>
              <td>{item.title}</td>
              <td>{item.type}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Tyoe;
