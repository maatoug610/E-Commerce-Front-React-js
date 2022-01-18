import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { CButton } from '@coreui/react'
const AddNewCategories = (props) => {

    {/* Declaration */ }
    const history = useHistory();
    const [NameCategorie, setNameC] = useState("")
    const [Description, setDes] = useState("")

    async function addCategorie() {

        const formData = new FormData();
        formData.append('NameCategorie', NameCategorie);
        formData.append('Description', Description);

        let result = await fetch("http://localhost:8000/api/addCategorie", {
            method: 'POST',
            body: formData
        });
        
        console.log(result);
        alert("Categorie Data Has Been Saved ...")
        history.push("/categories/all-categories");
    }

    return <div>
        <div className="card card-plain">
            <div className="card-header">
                <h4 className="font-weight-bolder">Add Categorie</h4>
                <p className="mb-0">Enter name Categorie & Description </p>
            </div>
            <div className="card-body">
                <form role="form">

                    <div className="input-group input-group-outline mb-3">
                        <input type="text" className="form-control" onChange={(e) => setNameC(e.target.value)} placeholder="Name Categorie" required />
                    </div>

                    <div className="input-group input-group-outline mb-3">
                        <input type="text" className="form-control" onChange={(e) => setDes(e.target.value)} placeholder="Description Categorie" required />
                    </div>

                    <div className="text-center">
                        <div className="d-grid">
                            <CButton onClick={addCategorie} color="success">Save</CButton>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
        ;
};
export default AddNewCategories;
