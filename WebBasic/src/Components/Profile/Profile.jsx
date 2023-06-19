import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import download from '../../Assets/download.jpg'
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { Outlet, Link, useParams } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';

const Profile = () => {
    let navigate = useNavigate();

    const { userName } = useParams();
   
    const [User, setUser] = useState({
        // ko nen viet hoa cac chu cai dau
        id: 1,
        username: "",
        password:"",
        roles: [
            {
                id:"",
                name: ""
            }
        ]
    });

    const {id,username,password,roles } = User
    const onChangeInput = (e) => {
        setUser({ ...User, [e.target.name]: e.target.value })
    };

    useEffect(() => {
        
        loadUser();
    },[]);

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(User);
        await axios.put(`http://localhost:8080/Users/Update/${username}`, User);

        navigate("/");
    };

    const loadUser = async () => {
        // const token = localStorage.getItem("accessToken")

        //         const result= await axios.get(`http://localhost:8080/account/getProfile/${localStorage.getItem("userName")}`, {
        //             headers : {
        //                 Authorization : `Bearer ${token}`
        //             }
        //         });
        var myHeaders = new Headers();
       
        myHeaders.append("Authorization", "Bearer "+localStorage.getItem("accessToken"));

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/user/getProfile/User", requestOptions)
            .then(response => {
                if(response.ok){
                    return response.json()
                } throw new Error(response.status)
            }) 
            .then(result =>{
                console.log(result);
                
                setUser(result);
               
            } )
            // .then(response => response.text())
            // .then(result => console.log(result))
            .catch(error => {
                console.log('error', error)
                this.logout();
            });
      
    }

    const logout=()=>{
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userName");

        alert("Logout success")
        navigate('/login');
    }

    return (
        <section className='Profile'>
            <div className="cardProile">
                <div className="imgDiv">
                    <img src={download} alt="" />
                </div>
                <div className="pro_Inform">
                    <div className='flex'>
                        <div>
                            <Form className='FormRes' onSubmit={(e) => onSubmit(e)}>
                                <Form.Group className="mb-3 flex" controlId="formBasicPassword">
                                    <div className='container'>
                                        <Form.Label >UserName</Form.Label>
                                        <Form.Control type="text" placeholder="UserName"
                                            name='username'
                                            value={username}
                                            // name='user_Name'
                                            onChange={(e) => onChangeInput(e)}
                                        />
                                    </div>
                                    <div className='container'>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password"
                                            value={password}
                                            name='password'
                                            onChange={(e) => onChangeInput(e)}
                                            readOnly
                                        />
                                    </div>
                                </Form.Group>
                                <hr style={{ color: "red" }}></hr>
                                {/* <Form.Group className="mb-3 flex" controlId="formBasicPassword">
                                    <div className='container'>
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control className='rounded-3xl' type="email" placeholder="Enter email"
                                            value={email}
                                            name='email'
                                            onChange={(e) => onChangeInput(e)}
                                        // name='Email'
                                        />
                                    </div>
                                    <div className='container'>
                                        <Form.Label>phone</Form.Label>
                                        <Form.Control type="text" maxLength={12} placeholder="phone"
                                            value={phone}
                                            name='phone'
                                            onChange={(e) => onChangeInput(e)}
                                        />
                                    </div>

                                </Form.Group> */}
                                <hr style={{ color: "red" }}></hr>
                                <div className="bt_function">
                                    <Button variant="primary" type="submit"  >
                                        Update
                                    </Button>
                                    <Button variant="primary"  onClick={logout}  >
                                logout
                            </Button>

                                </div>

                            </Form>
                        </div>
                    </div>


                </div>
                {/* md =width */}

            </div>
            <Outlet/>
        </section>
    );
};

export default Profile;