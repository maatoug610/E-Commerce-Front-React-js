import React, { useState, useEffect } from "react"
import { useHistory } from 'react-router-dom'
import { CButton } from '@coreui/react'
const AddNewProducts = (props) => {

    {/* Declaration */ }
    const history = useHistory();
    const [data, setData] = useState([]);
    const [NameProduit, setName] = useState("")
    const [PrixProduit, setPrix] = useState("")
    const [Description, setDes] = useState("")
    const [Categorie_id, setCat] = useState("")
    const [ImageProduit, setFile] = useState("")

    useEffect(async () => {
        getData();
    }, [])

    async function getData() {
        let result = await fetch("http://localhost:8000/api/listCategorie");
        result = await result.json();
        setData(result)
    }

    {/* Function add Product */ }

    async function addProduct() {

        console.warn(NameProduit, PrixProduit, ImageProduit, Categorie_id);
        const formData = new FormData();

        formData.append('NameProduit', NameProduit);
        formData.append('PrixProduit', PrixProduit);
        formData.append('ImageProduit', ImageProduit);
        formData.append('Description', Description);
        formData.append('Categorie_id', Categorie_id);
        console.log(ImageProduit);
        let result = await fetch("http://localhost:8000/api/addProduit", {
            method: 'POST',
            body: formData
        });
        alert("Product has been saved");
        history.push("/products/all-products")
    }

    return <div>
        <div className="card card-plain">
            <div className="card-header">
                <h4 className="font-weight-bolder">Add Product</h4>
                <p className="mb-0">Enter name & price & category and image </p>
            </div>
            <div className="card-body">
                <form role="form">
                    <div className="input-group input-group-outline mb-3">
                        <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} placeholder="Name Product" required />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                        <input type="text" className="form-control" onChange={(e) => setPrix(e.target.value)} placeholder="Price Product by $ (dollar)" required />
                    </div>
                    <div className="input-group input-group-outline mb-3">
                        <input type="text" className="form-control" onChange={(e) => setDes(e.target.value)} placeholder="Description" required />
                    </div>

                    <label>Category</label>
                    <div className="input-group input-group-outline mb-3">

                        <select onChange={(e) => setCat(e.target.value)} className="form-control">
                            <option className="form-control">Select Categorie</option>
                            {
                                data.map((item) => {
                                    return <option value={item.id}>{item.NameCategorie}</option>
                                })
                            }

                        </select>

                    </div>
                    <label>Image</label>
                    <div className="input-group input-group-outlin e mb-3">
                        <input type="file" className="form-control" onChange={(e) => setFile(e.target.files[0])} required />
                    </div>

                    <div className="text-center">
                        <div className="d-grid">
                            <CButton onClick={addProduct} color="success">Save</CButton>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>
        ;
};
export default AddNewProducts;
