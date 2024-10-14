import { useEffect, useState } from "react";

function Product() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://66f68256436827ced9776af5.mockapi.io/all-data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);


  
  return (
    <div className="table-admin container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.type}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td className="description">{item.description}</td>
                <td>{item.color}</td>
                <td>
                  <i className="fa-solid fa-arrow-right fa-xl"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Product;
