import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


const FormEditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentName, setCurrentName] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");

  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setRole(response.data.role);
        setCurrentName(response.data.name);
        setCurrentEmail(response.data.email);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getUserById();
  }, [id]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
        const nameExists = await axios.get(`http://localhost:5000/users/check-name/${name}`);
        if (nameExists.data.exists && currentName !== name) {
          setMsg("Name already exists. Please choose another name.");
          return;
        }

        const emailExists = await axios.get(`http://localhost:5000/users/check-email/${email}`);
        if (emailExists.data.exists && currentEmail !== email) {
          setMsg("Email already exists. Please choose another email.");
          return;
        }
    
        
        const response = await axios.patch(`http://localhost:5000/users/${id}`, {
            name: name,
            email: email,
            password: password,
            confPassword: confPassword,
            role: role,
        });

        if (response.data) {
            navigate("/users");
        } else {
            // Handle the case where response.data is undefined or doesn't have the expected structure.
            console.error("Unexpected response:", response);
        }
    } catch (error) {
        if (error.response) {
            setMsg(error.response.data.msg);
        }
    }
  };

  return (
    <div>
        <h1 className='title'>Users</h1>
        <h2 className='subtitle'>Update User</h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                  <form onSubmit={updateUser}>
                    <p className="has-text-centered">{msg}</p>
                        <div className="field">
                            <label className="label">
                                Name
                            </label>
                            <div className="control">
                                <input type="text" className="input" value={name} onChange={(e) =>setName(e.target.value)} placeholder='Name'/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">
                                Email
                            </label>
                            <div className="control">
                                <input type="email" className="input" value={email} onChange={(e) =>setEmail(e.target.value)} placeholder='Email'/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">
                                Password
                            </label>
                            <div className="control">
                                <input type="password" className="input" value={password} onChange={(e) =>setPassword(e.target.value)} placeholder='******'/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">
                                Confirm Password
                            </label>
                            <div className="control">
                                <input type="password" className="input" value={confPassword} onChange={(e) =>setConfPassword(e.target.value)} placeholder='******'/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">
                                Role
                            </label>
                            <div className="control">
                                <div className="select is-fullwidth">
                                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button type="submit" className="button is-success">
                                    Update
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default FormEditUser;