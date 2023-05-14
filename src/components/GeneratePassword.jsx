import React, { useState } from "react";
import Button from "./Button";

const GeneratePassword = () => {

  const [lengthPassword, setLengthPassword] = useState(5);
  const [showPassword, setShowPassword] = useState('---password will be here---')

  const passwordGenerator = (lengthPassword) => {
    let password = "";
    const chars = [
      "abcdefghijklmnopqrstuvwxyz",
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "0123456789",
      "!@#$%^&*()_+|?><-+*/°",
      "öäüß",
    ];

    let charStr = chars.toString();
    for (let i = 0; i < lengthPassword ; i++) {
      password += charStr.charAt(Math.floor(Math.random() * charStr.length))
    }
    return password
  };

  console.log(passwordGenerator(lengthPassword))

  return <div>
    <input type="text" value={lengthPassword} onChange={(e)=> setLengthPassword(e.target.value)}/>
    <Button onClick = {()=>passwordGenerator(setLengthPassword())}/>
    <p>{showPassword}</p>
  </div>;
};

export default GeneratePassword;
