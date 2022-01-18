import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { CButton } from '@coreui/react'
import axios from 'axios';

export default class UpdateProduct extends Component {

  constructor(props) {
    super(props)
    this.onChangeNameProduit = this.onChangeNameProduit.bind(this);
    this.onChangePrixProduit = this.onChangePrixProduit.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCategorie_id = this.onChangeCategorie_id.bind(this);
    this.onChangeImageProduit = this.onChangeImageProduit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      NameProduit: '',
      PrixProduit: '',
      Description: '',
      Categorie_id: '',
      ImageProduit: ''

    }
  }
  componentDidMount() {
    axios.get('http://localhost:8000/api/getProduit/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          NameProduit: res.data.NameProduit,
          PrixProduit: res.data.PrixProduit,
          Description: res.data.Description,
          Categorie_id: res.data.Categorie_id,
          ImageProduit: res.data.ImageProduit
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeNameProduit(e) {
    this.setState({ NameProduit: e.target.value })
  }

  onChangePrixProduit(e) {
    this.setState({ PrixProduit: e.target.value })
  }

  onChangeDescription(e) {
    this.setState({ Description: e.target.value })
  }

  onChangeCategorie_id(e) {
    this.setState({ Categorie_id: e.target.value })
  }

  onChangeImageProduit(e) {
    this.setState({ ImageProduit: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const expenseObject = {
      NameProduit: this.state.NameProduit,
      PrixProduit: this.state.PrixProduit,
      Description: this.state.Description,
      Categorie_id: this.state.Categorie_id,
      ImageProduit: this.state.ImageProduit
    };

    axios.put('http://localhost:8000/api/updateProduit/' + this.props.match.params.id, expenseObject)
      .then((res) => {
        console.log(res.data)
        console.log('Expense successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to Expense List 
    this.props.history.push('/products/all-products')
  }


  render() {
    return (<div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="NameProd">
          <Form.Label>name Produit</Form.Label>
          <Form.Control type="text" value={this.state.NameProduit} onChange={this.onChangeNameProduit} />
        </Form.Group>

        <Form.Group controlId="PrixPord">
          <Form.Label>Price</Form.Label>
          <Form.Control type="text" value={this.state.PrixProduit} onChange={this.onChangePrixProduit} />
        </Form.Group>

        <Form.Group controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" value={this.state.Description} onChange={this.onChangeDescription} />
        </Form.Group>

        <Form.Group controlId="categorie">
          <Form.Label>Categorie</Form.Label>
          <Form.Control type="text" value={this.state.Categorie_id} onChange={this.onChangeCategorie_id} />
        </Form.Group>

        <Form.Group controlId="Image">
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" value={this.state.ImageProduit} onChange={this.onChangeImageProduit} />
        </Form.Group>

        <div className="text-center">
          <div className="d-grid">
            <CButton type="submit" color="success">Save</CButton>
          </div>
        </div>
      </Form>
    </div>);
  }
}
