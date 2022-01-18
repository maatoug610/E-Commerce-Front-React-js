import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { CButton } from '@coreui/react'
const AddNewClients = (props) => {

    {/* Declaration */ }
    const history = useHistory();
    const [NameClient, setNameC] = useState("")
    const [email, setE] = useState("")
    const [password, setPss] = useState("")
    const [phone, setPh] = useState("")

    async function addClient() {

        const formData = new FormData();
        formData.append('NameClient', NameClient);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('phone', phone);

        let result = await fetch("http://localhost:8000/api/addClient", {
            method: 'POST',
            body: formData
        });
        
        alert("Client Data Has Been Saved ...")
        history.push("/clients/all-clients");
    }

    return <div>
        <div className="card card-plain">
            <div className="card-header">
                <h4 className="font-weight-bolder">Add Categorie</h4>
                <p className="mb-0">Enter name Client & Email & Password & Phone </p>
            </div>
            <div className="card-body">
                <form role="form">

                    <div className="input-group input-group-outline mb-3">
                        <input type="text" className="form-control" onChange={(e) => setNameC(e.target.value)} placeholder="Name Client" required />
                    </div>

                    <div className="input-group input-group-outline mb-3">
                        <input type="email" className="form-control" onChange={(e) => setE(e.target.value)} placeholder="Email" required />
                    </div>

                    <div className="input-group input-group-outline mb-3">
                        <input type="password" className="form-control" onChange={(e) => setPss(e.target.value)} placeholder="Password" required />
                    </div>

                    <div className="input-group input-group-outline mb-3">
                        <input type="tel" className="form-control" onChange={(e) => setPh(e.target.value)} placeholder="phone" pattern="[0-9]{2} [0-9]{3} [0-9]{3}" required />
                    </div>

                    <div className="text-center">
                        <div className="d-grid">
                            <CButton onClick={addClient} color="success">Save</CButton>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
        ;
};
export default AddNewClients;
