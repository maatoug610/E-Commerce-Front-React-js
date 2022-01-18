import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { CButton } from '@coreui/react'
const AddNewCommandes = (props) => {

    {/* Declaration */ }
    const history = useHistory();
    const [data, setData] = useState([]);
    const [dataC, setDataC] = useState([]);
    const [Code_Com, setCode] = useState("")
    const [Total_Com, setTotal] = useState("")
    const [status, setStatus] = useState("")
    const [date_Com, setDate] = useState("")
    const [Prod_id, setProd] = useState("")
    const [Client_id, setClient] = useState("")

    useEffect(async () => {
        getData();
        getDataC();
    }, [])

    async function getData() {
        let result = await fetch("http://localhost:8000/api/listProduit");
        result = await result.json();
        setData(result)
    }
    async function getDataC() {
        let result = await fetch("http://localhost:8000/api/listClient");
        result = await result.json();
        setDataC(result)
    }

    async function addCommande() {

        const formData = new FormData();
        formData.append('Code_Com', Code_Com);
        formData.append('Total_Com', Total_Com);
        formData.append('status', status);
        formData.append('date_Com', date_Com);
        formData.append('Prod_id', Prod_id);
        formData.append('Client_id', Client_id);

        let result = await fetch("http://localhost:8000/api/addCommande", {
            method: 'POST',
            body: formData
        });

        console.log(result);
        alert("Commande Data Has Been Saved ...")
        history.push("/commandes/all-commandes");
    }

    return <div>
        <div className="card card-plain">
            <div className="card-header">
                <h4 className="font-weight-bolder">Add Commande</h4>
                <p className="mb-0">Enter Code & Produit & Client & Date &Total & Status </p>
            </div>
            <div className="card-body">
                <form role="form">

                    <div className="input-group input-group-outline mb-3">
                        <input type="text" className="form-control" onChange={(e) => setCode(e.target.value)} placeholder="Code Commande" required />
                    </div>

                    <select onChange={(e) => setProd(e.target.value)} className="form-control">
                        <option className="form-control">Choose Product</option>
                        {
                            data.map((item) => {
                                return <option value={item.id}>{item.NameProduit}</option>
                            })
                        }

                    </select>
                    <br />
                    <select onChange={(e) => setClient(e.target.value)} className="form-control">
                        <option className="form-control">Choose Client</option>
                        {
                            dataC.map((item) => {
                                return <option value={item.id}>{item.NameClient}</option>
                            })
                        }

                    </select>
                    <br />

                    <div className="input-group input-group-outline mb-3">
                        <input type="date" className="form-control" onChange={(e) => setDate(e.target.value)} placeholder="Date" required />
                    </div>

                    <div className="input-group input-group-outline mb-3">
                        <input type="text" className="form-control" onChange={(e) => setTotal(e.target.value)} placeholder="Totale" required />
                    </div>

                    <div className="input-group input-group-outline mb-3">
                        <input type="text" className="form-control" onChange={(e) => setStatus(e.target.value)} placeholder="Description Categorie" required />
                    </div>


                    <div className="text-center">
                        <div className="d-grid">
                            <CButton onClick={addCommande} color="success">Save</CButton>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
        ;
};
export default AddNewCommandes;
