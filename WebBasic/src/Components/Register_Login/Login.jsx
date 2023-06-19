import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Register.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import $, { error } from 'jquery';
import background from "../../Assets/download.jpg";

// var Ajax = require('react-ajax');

// <Ajax url="data.json" onResponse={this.responseHandler} />

const Login = () => {

   
    let navigate = useNavigate();

    // const client = axios.create({
    //     baseURL: "http://localhost:8080/"
    // });

    const [posts, setPosts] = useState([]);
    const [login, setLogin] = useState({
        // ko nen viet hoa cac chu cai dau
        username: "",
        password: ""
    })

    const { username, password } = login;
    const onChangeInput = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value })
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     onLogin(login);
    // };
    const ax = axios.create({
        baseURL: 'http://localhost:8080/',
        withCredentials: true,
    });

    const onLogin = async(e) => {
            e.preventDefault();
            console.log(login);
            // const myJSON = JSON.stringify(login);
            // const result = await axios.post(`http://localhost:8080/Login`,login)

            const result= await axios.post(`http://localhost:8080/Login`, login, {
                withCredentials: true,
            })
            console.log(result)
            if(result.data!=null){
                const jwt={
                    userName:result.data.userName,
                    accessToken:result.data.token
                }
                localStorage.setItem("userName", jwt.userName)
                localStorage.setItem('accessToken', jwt.accessToken);
                console.log(jwt);
                const userName=localStorage.getItem("userName");
                console.log(userName);
               
                // navigate(`/profile/${userName}`);

                window.location.href = `/profile/${userName}`

            }
            // .then(res => {

            //     console.log(res)
            //     const jwtTokenReponse={
            //         userName:res.data.userName,
            //         token:res.data.token
            //     }
            // }).catch(err=>console.log(err));
            // console.log(result.data);


            // jwtTokenReponse = {
            //     username: result.data.userName,
            //     token: result.data.token,
            // }


            // console.log(jwtTokenReponse);
            // navigate("/");
            // console.error(response.data);
    };


    return (
        <section className='Register' style={{ backgroundImage: `url(${background})` }}>

            <div className="div_Res">

                <div className='side'>
                    <h3>Login Form</h3>
                    <hr></hr>
                    <Form className='FormRes' onSubmit={(e) => onLogin(e)} >
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label >UserName</Form.Label>
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
                        <div className="bt_function">
                            <Button variant="primary" type="submit"  >
                                Login
                            </Button>
                            {/* <Link to="/" >
                                <Button variant="warning" >cancel</Button>
                            </Link> */}
                            <p style={{ transform: "translatey(+50%)" }}>if you don't have account <a href="/register" style={{ color: 'red' }}>: Login</a></p>
                        </div>

                    </Form>
                </div>
            </div>
        </section>
    );
};


export default Login;