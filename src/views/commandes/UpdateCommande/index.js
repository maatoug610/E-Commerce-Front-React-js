import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { CButton } from '@coreui/react'
import axios from 'axios';

export default class UpdateCommande extends Component {

    constructor(props) {
        super(props)
        this.onChangeNameCategorie = this.onChangeNameCategorie.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // State
        this.state = {
            NameCategorie: '',
            Description: ''

        }
    }
    componentDidMount() {
        axios.get('http://localhost:8000/api/getCommande/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    NameCategorie: res.data.NameCategorie,
                    Description: res.data.Description
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeNameCategorie(e) {
        this.setState({ NameCategorie: e.target.value })
    }


    onChangeDescription(e) {
        this.setState({ Description: e.target.value })
    }



    onSubmit(e) {
        e.preventDefault()

        const expenseObject = {
            NameCategorie: this.state.NameCategorie,
            Description: this.state.Description
        };

        axios.put('http://localhost:8000/api/updateCommande/' + this.props.match.params.id, expenseObject)
            .then((res) => {
                console.log(res.data)
                console.log('Expense successfully updated')
            }).catch((error) => {
                console.log(error)
            })

        // Redirect to Expense List 
        this.props.history.push('/commandes/all-commandes')
    }


    render() {
        return (<div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="NameCategorie">
                    <Form.Label>name Categorie</Form.Label>
                    <Form.Control type="text" value={this.state.NameCategorie} onChange={this.onChangeNameCategorie} />
                </Form.Group>

                <Form.Group controlId="Description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={this.state.Description} onChange={this.onChangeDescription} />
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
