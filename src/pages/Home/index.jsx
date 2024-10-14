import { NavLink } from "react-router-dom";
import ModelCard from "../../components/ModelCard";
import "./style.css";
import { useEffect, useState } from "react";
import Loading from "../../components/Loading/loading";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://66f68256436827ced9776af5.mockapi.io/types")
      .then((response) => response.json())
      .then((info) => {
        setData(info);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="container root-main">
      <h2>Modellari</h2>

      {loading ? (
        <Loading />
      ) : (
        <section className="model-cards">
          {data?.map((model) => {
            return (
              <NavLink key={model.id} to={"/product/" + model.type}>
                <ModelCard key={model.id} data={model} />
              </NavLink>
            );
          })}
        </section>
      )}
    </main>
  );
}

export default Home;
