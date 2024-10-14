import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Product from "./products";
import Tyoe from "./type";

function Admin() {
  const navigate = useNavigate();

  const [active, setAcrive] = useState(true);

  return (
    <div className="admin ">
      <div className="header-admin container">
        <div className="linklar">
          <p onClick={() => setAcrive(true)} id={active ? "active" : ""}>
            Products
          </p>
          <p onClick={() => setAcrive(false)} id={active ? "" : "active"}>
            Kategoriyalar
          </p>
        </div>
        <div className="btns">
          <button onClick={() => navigate("/addtype")} className="admin-btn">
            <i className="fa-solid fa-plus fa-xl"></i>
            Kategoriya qo’shish
          </button>
          <button onClick={() => navigate("/addData")} className="admin-btn">
            <i className="fa-solid fa-plus fa-xl"></i>
            Maxsulot qo’shish
          </button>
        </div>
      </div>
      <div className="content">
      {active ? <Product /> : <Tyoe/>}
      </div>
    </div>
  );
}

export default Admin;
