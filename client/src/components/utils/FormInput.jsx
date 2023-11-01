import React, { useState } from "react";

const FormInput = ({ text, setText, placeHolder }) => {
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        minLength={2}
        maxLength={200}
        placeholder={placeHolder}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
