import React, { useState } from "react";

const GeneratePassword = () => {
  const [lengthPassword, setLengthPassword] = useState(5);
  const [showPassword, setShowPassword] = useState(
    "---password will be here---"
  );

  const passwordGenerator = (len) => {
    let password = "";
    const chars = [
      "abcdefghijklmnopqrstuvwxyz",
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "0123456789",
      "!@#$%^&*()_+|?><-+*/°",
      "öäüß",
    ];
    let charStr = chars.toString();
    for (let i = 0; i < len; i++) {
      password += charStr.charAt(Math.floor(Math.random() * charStr.length));
    }
    return password;
  };

  const handleClick = (e) => {
    e.preventDefault();
    setShowPassword(passwordGenerator(lengthPassword));
    console.log(passwordGenerator(lengthPassword));
  };

  //console.log(passwordGenerator(lengthPassword))

  return (
    <div>
      <input
        type="text"
        value={lengthPassword}
        onChange={(e) => setLengthPassword(e.target.value)}
      />
      <button onClick={handleClick}>Click</button>
      {!lengthPassword || lengthPassword == 0 ? (
        <p>Please provide the length for the passoword</p>
      ) : (
        lengthPassword && <p>{showPassword}</p>
      )}
    </div>
  );
};

export default GeneratePassword;
