import React from "react";

export default function AccountDetails() {
  return <div>AccountDetails</div>;
}

export function AccountAdd() {
  const [account, setAccount] = useState({
    fname: "",
    lname: "",
    age: "",
    sex: "",
    cnum: "",
    email: "",
    address: "",
    type: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "sex") {
      setAccount((prev) => ({ ...prev, sex: e.target.value }));
    } else if (e.target.name === "type") {
      setAccount((prev) => ({ ...prev, type: e.target.value }));
    } else {
      setAccount((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="First name..."
        name="fname"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last name..."
        name="lname"
        onChange={handleChange}
      />
      <input type="number" placeholder="Enter age..." name="age" />
      <select name="sex" onChange={handleChange} value={account.sex}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <input
        type="number"
        placeholder="Enter contact number..."
        name="cnum"
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Enter email address..."
        name="email"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Enter address..."
        name="address"
        onChange={handleChange}
      />
      <select name="type" onChange={handleChange} value={account.type}>
        <option>Customer</option>
        <option>Admin</option>
        <option>Staff</option>
      </select>
    </div>
  );
}
