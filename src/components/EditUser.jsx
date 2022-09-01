import { React, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
export const EditUser = () => {
  const history = useNavigate();
  const { id } = useParams();
  const [dashBoardUser, setdashBoardUser] = useState({
    id: new Date().getTime().toString(),
    first_name: "",
    Last_name: "",
    email: "",
  });
  const { first_name, Last_name, email } = dashBoardUser;
  const handleFormChange = (e) => {
    e.preventDefault();
    setdashBoardUser({ ...dashBoardUser, [e.target.name]: e.target.value });
  };
  const handleAddFormsubmit = async (e) => {
    e.preventDefault();
    await axios.put(`https://reqres.in/api/users/${id}`, dashBoardUser);
    history("/dashboard");
  };
  useEffect(() => {
    loaduser();
  }, []);
  const loaduser = async () => {
    const result = await axios.post(`https://reqres.in/api/users/${id}`);
    console.log(result);
    setdashBoardUser(result.data);
  };
  return (
    <div>
      <div className="container w-50">
        <h3>Edit User</h3>
        <form onSubmit={(e) => handleAddFormsubmit(e)}>
          <input
            className="form-control"
            type="text"
            name="first_name"
            value={first_name}
            placeholder="Enter Your First name"
            onChange={handleFormChange}
            required
          />
          <br />
          <input
            type="text"
            name="Last_name"
            value={Last_name}
            className="form-control"
            placeholder="Enter Your Last name"
            onChange={handleFormChange}
            required
          />
          <br />
          <input
            type="text"
            name="email"
            value={email}
            className="form-control"
            placeholder="Enter Your Email"
            onChange={handleFormChange}
            required
          />
          <br />

          <button type="submit" className="btn btn-primary">
            Update user
          </button>
        </form>
      </div>
    </div>
  );
};
