import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Register.css"
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import background from "../../Assets/download.jpg";

const Register = () => {

    let navigate = useNavigate();

    const [User, setUser] = useState({
        // ko nen viet hoa cac chu cai dau
        username:"",
        password:"",
        role:"user"

    });

    const { username, password, role } = User
    const onChangeInput = (e) => {
        setUser({ ...User, [e.target.name]: e.target.value })
    };


    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(User);
        await axios.post(`http://localhost:8080/account/register`,User)
        // await axios.post(`http://localhost:8080/Users/UserAdd`, User);
        navigate("/");
    };

    return (
        <section className='Register' style={{ backgroundImage: `url(${background})` }}>

            <div className="div_Res">

                <div className='side'>
                    <h3>Register Form</h3>
                    <hr></hr>
                    <Form className='FormRes' onSubmit={(e) => onSubmit(e)} >

                        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control className='rounded-3xl' type="email" placeholder="Enter email"
                                value={email}
                                name='email'
                                onChange={(e) => onChangeInput(e)}
                            // name='Email'
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group> */}

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>UserName</Form.Label>
                            <Form.Control type="text" placeholder="UserName"
                                name='username'
                                value={username}
                                // name='user_Name'
                                onChange={(e) => onChangeInput(e)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"
                                value={password}
                                name='password'
                                onChange={(e) => onChangeInput(e)}
                            />
                        </Form.Group>
                        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>phone</Form.Label>
                            <Form.Control type="text" maxLength={12} placeholder="phone"
                                value={phone}
                                name='phone'
                                onChange={(e) => onChangeInput(e)}
                            />
                        </Form.Group> */}
                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}
                         <p></p>
                         <Form.Text className="text-muted">
                         if you have account <a href="/login" style={{color:'red'}}>:login</a>
                            </Form.Text>
                        <div className="bt_function">
                            <Button variant="primary" type="submit"  >
                                Submit
                            </Button>

                            <Link to="/">
                                <Button variant="warning" style={{background:"red"}}  >cancel</Button>
                            </Link>

{/* 
                            <Link to="/login">
                                <Button variant="success"> Login
                                </Button>
                            </Link> */}

                        </div>

                    </Form>
                </div>
            </div>
        </section>
    );
};


export default Register;