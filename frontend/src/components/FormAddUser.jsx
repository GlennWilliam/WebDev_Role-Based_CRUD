import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddUser = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("admin");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
  e.preventDefault();
  if (!password) {
    setMsg("Password is required.");
    return;
  }
  
  try {
    // Check if name already exists
    const nameExists = await axios.get(`http://localhost:5000/users/check-name/${name}`);
    if (nameExists.data.exists) {
      setMsg("Name already exists. Please choose another name.");
      return;
    }

    // Check if email already exists
    const emailExists = await axios.get(`http://localhost:5000/users/check-email/${email}`);
    if (emailExists.data.exists) {
      setMsg("Email already exists. Please choose another email.");
      return;
    }

    // If name and email don't exist, proceed with user creation
    await axios.post("http://localhost:5000/users", {
      name: name,
      email: email,
      password: password,
      confPassword: confPassword,
      role: role,
    });
    navigate("/users");
  } catch (error) {
    if (error.response) {
      setMsg(error.response.data.msg);
    }
  }
};



  return (
    <div>
        <h1 className='title'>Users</h1>
        <h2 className='subtitle'>Add New User</h2>
        <div className="card is-shadowless">
            <div className="card-content">
                <div className="content">
                    <form onSubmit={saveUser}>
                        <p className="has-text-centered">{msg}</p>
                        <p className="has-text-centered"></p>
                        <div className="field">
                            <label className="label">
                                Name
                            </label>
                            <div className="control">
                                <input type="text" className="input" value={name} onChange={(e) => setName(e.target.value)} placeholder='Username'/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">
                                Email
                            </label>
                            <div className="control">
                                <input type="email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">
                                Password
                            </label>
                            <div className="control">
                                <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='******'/>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">
                                Confirm Password
                            </label>
                            <div className="control">
                                <input type="password" className="input" value={confPassword} onChange={(e) => setConfPassword(e.target.value)} placeholder='******'/>
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
                                    Save
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

export default FormAddUser;