import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

interface Car{
    id:number;
    brand:string;
    model:string;
    price:number;
}

function Cars(){
   const api_url = "https://67a97e126e9548e44fc3c722.mockapi.io/Cars";
    const[cars,setCars] = useState<Car[]>([]);
    const fetchCars = async() =>{
        const response = await fetch(api_url);
        const data = await response.json();
        setCars(data);
    };
    useEffect(()=>{
        fetchCars();
    })
    return(
        <>
        <div>
            <Link to="/add-course" className="btn btn-sucess mb-3">Add Cars</Link>

        </div>
        <h2>Car list</h2>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">brand</th>
                    <th scope="col">model</th>
                    <th scope="col">price</th>

                </tr>
            </thead>
            <tbody>
                {cars.map((car)=>(
                    <tr key={car.id}>
                        <th scope="row">{car.id}</th>
                        <td>{car.brand}</td>
                        <td>{car.model}</td>
                        <td>{car.price}</td>

                    </tr>
                ))}    
            
            </tbody>


        </table>
    

        
        </>

    )
}
export default Cars;

