import React, { useState } from 'react';

const Account = ({ user, updateUser }) => {
  const [shippingAddress, setShippingAddress] = useState(user.shippingAddress);

  const handleSave = () => {
    updateUser({ ...user, shippingAddress });
  };

  return (
    <div>
      <h1>Account</h1>
      <label>
        Shipping Address:
        <input
          type="text"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
        />
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Account;
