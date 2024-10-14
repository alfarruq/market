import { useEffect, useState } from "react";
import "./style.css";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading/loading";

function ProductCard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const path = useParams();
  useEffect(() => {
    setLoading(true)
    fetch("https://66f68256436827ced9776af5.mockapi.io/all-data")
      .then((response) => response.json())
      .then((info) => {
        setData(
          info.filter((item) => {
            return item.type == path.name;
          })
        );
        setLoading(false)
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="product-cards">
      {loading ? (
        <Loading />
      ) : (
        data?.map((item) => {
          return (
            <div
              onClick={() => navigate("/details/" + item.id)}
              key={item.id}
              className="product-card"
            >
              <img
                src={
                  item.img ||
                  "https://i.ytimg.com/vi/AMEvGef4YCc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCV96MJVuJFDGkVeGfMMeRQ9x80fg"
                }
                alt=""
              />

              <div className="product-info">
                <h4>{item.title}</h4>
                <p>
                  <b>Price:</b>{" "}
                  <span style={{ color: "orangered" }}> {item.price}$</span>
                </p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default ProductCard;
