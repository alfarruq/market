import { useEffect, useState } from "react";
import './style.css'
import { useParams } from "react-router-dom";



function Details() {

    const kalish = useParams()

    

    const [data, setData] = useState()

    useEffect(()=>{
        fetch('https://66f68256436827ced9776af5.mockapi.io/all-data/' + kalish.name)
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])




    return ( 
        <div className="container detail-main " >
                <h1>Deltailes</h1>
                <img  src={data?.img || ''} alt="" />
                <h2>Name: {data?.title}</h2>
                <p>Price: {data?.price}$</p>
        </div>
     );
}

export default Details;