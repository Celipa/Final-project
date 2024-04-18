import React from 'react';
import { FaCircleUser } from "react-icons/fa6";
import './css/ProfilePage.css';

function ProfilePage() {
  return (
    <div className="Profile-page">
      <h1>Profile Page</h1>
      <label>
        <h2><FaCircleUser /></h2>
        <img className="Image-import" src="https://via.placeholder.com/150" alt="Profile" />
        <p>Change profile picture</p>
        <input type="file" />
      </label>
      <label>
        <p>Username</p>
        <input type="text" placeholder="Username" />
      </label>
      <label>
        <p>Email</p>
        <input type="email" placeholder="Email" />
      </label>
      <button>Save Changes</button>
      <div className="Fake">This is a mock website. It does not have any functions.</div>
    </div>
  );
}

export default ProfilePage;