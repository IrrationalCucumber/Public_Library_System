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
  return (
    <div>
      <input type="text" placeholder="First name..." name="fname" />
      <input type="text" placeholder="Last name..." name="lname" />
      <input type="number" placeholder="Enter age..." name="age" />
      <select name="sex">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      <input type="number" placeholder="Enter contact number..." name="cnum" />
      <input type="email" placeholder="Enter email address..." name="email" />
      <input type="text" placeholder="Enter address..." name="address" />
      <select name="type">
        <option>Customer</option>
        <option>Admin</option>
        <option>Staff</option>
      </select>
    </div>
  );
}
