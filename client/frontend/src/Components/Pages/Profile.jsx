
import React from "react";
import "./Profile.css";

const Profile = () => {

  return (
    <div className="profile-page">

      <div className="profile-card">

        <img
          src="https://i.pravatar.cc/150"
          alt="profile"
        />

        <h1>Aman Sharma</h1>

        <p>aman@gmail.com</p>

        <div className="profile-info">
          <div>
            <h3>Total Trips</h3>
            <p>18</p>
          </div>

          <div>
            <h3>Wallet</h3>
            <p>₹2500</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Profile;
