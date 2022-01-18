import React, { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
const AllClients = (props) => {
    const [data, setData] = useState([]);
    useEffect(async () => {
        getData();
    }, [])
    async function deleteOperation(id) {
        {/*alert(id)*/ }
        let result = await fetch("http://localhost:8000/api/deleteClient/" + id, {
            method: 'DELETE'
        });
        result = await result.json();
        console.warn(result)
        getData();
    }

    async function getData() {
        let result = await fetch("http://localhost:8000/api/listClient");
        result = await result.json();
        setData(result)
    }

    return <div className="row">
        <div className="col-12">
            <div className="card my-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                    <div className="bg-warning shadow-primary border-radius-lg pt-4 pb-3">
                        <h6 className="text-black text-capitalize ps-3">Client table</h6>
                    </div>
                </div>
                <div className="card-body px-0 pb-2">
                    <div className="table-responsive p-0">
                        <table className="table align-items-center justify-content-center mb-0">
                            <thead>
                                <tr>
                                    <th className="text-uppercase text-black text-xxs font-weight-bolder opacity-7">ID_Cl</th>
                                    <th className="text-uppercase text-black text-xxs font-weight-bolder opacity-7 ps-2">Name</th>
                                    <th className="text-uppercase text-black text-xxs font-weight-bolder opacity-7 ps-2">Email</th>
                                    <th className="text-uppercase text-black text-xxs font-weight-bolder opacity-7 ps-2">Phone</th>
                                    <th className="text-uppercase text-black text-xxs font-weight-bolder opacity-7 ps-2">Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                        data.map((item) =>
                                            <tr>
                                                <td scope="row">{item.id}</td>
                                                <td>{item.NameClient}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                
                                                <td>
                                                    <button onClick={() => deleteOperation(item.id)} className="btn btn-danger"><i className="fa fa-trash-o"></i></button>
                                                    <Link to={"/clients/update-clients/" + item.id}>
                                                        <button className="btn btn-success"><i className="fa fa-edit"></i></button>
                                                    </Link>
                                                </td> 
                                            </tr>
                                        )
                                    }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
;
}
export default AllClients;