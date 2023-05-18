import React, { useState } from "react";
import CopyButton from "./CopyButton";

const GeneratePassword = () => {
  const [lengthPassword, setLengthPassword] = useState("");
  const [showPassword, setShowPassword] = useState("");

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
  };

  //console.log(passwordGenerator(lengthPassword))

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mb-3 p-5">
      <input
        type="text"
        value={lengthPassword}
        onChange={(e) => setLengthPassword(e.target.value)}
        className="form-control mb-3 mt-3"
        placeholder="Type the length of the password..."
      />
      <button onClick={handleClick} className="btn btn-primary mt-3">
        Click
      </button>
      {!lengthPassword || lengthPassword == 0 ? (
        <p className="text-main mt-3 ">
          Please provide the length for the password
        </p>
      ) : (
        lengthPassword && (
          <p className="text-main fw-bold mt-3">{showPassword}</p>
        )
      )}
      <CopyButton txtToCopy={showPassword} />
    </div>
  );
};

export default GeneratePassword;
