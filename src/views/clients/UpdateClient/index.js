import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { CButton } from '@coreui/react'
import axios from 'axios';

export default class UpdateClient extends Component {

    constructor(props) {
        super(props)
        this.onChangeNameClient = this.onChangeNameClient.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        // State
        this.state = {
            NameClient: '',
            email: '',
            password: '',
            phone: ''

        }
    }
    componentDidMount() {
        axios.get('http://localhost:8000/api/getClient/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    NameClient: res.data.NameClient,
                    email: res.data.email,
                    password: res.data.password,
                    phone: res.data.phone
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeNameClient(e) {
        this.setState({ NameClient: e.target.value })
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }
    onChangePhone(e) {
        this.setState({ phone: e.target.value })
    }



    onSubmit(e) {
        e.preventDefault()

        const expenseObject = {
            NameClient: this.state.NameClient,
            email: this.state.email,
            password: this.state.password,
            phone: this.state.phone
        };

        axios.put('http://localhost:8000/api/updateClient/' + this.props.match.params.id, expenseObject)
            .then((res) => {
                console.log(res.data)
                console.log('Client successfully updated')
            }).catch((error) => {
                console.log(error)
            })

        // Redirect to Expense List 
        this.props.history.push('/clients/all-clients')
    }


    render() {
        return (<div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="NameCategorie">
                    <Form.Label>Name Client</Form.Label>
                    <Form.Control type="text" value={this.state.NameClient} onChange={this.onChangeNameClient} />
                </Form.Group>

                <Form.Group controlId="Email">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="email" value={this.state.email} onChange={this.onChangeEmail} />
                </Form.Group>

                <Form.Group controlId="Password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={this.state.password} onChange={this.onChangePassword} />
                </Form.Group>

                <Form.Group controlId="Phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="tel" value={this.state.phone} onChange={this.onChangePhone} />
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
