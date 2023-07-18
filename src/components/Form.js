import React from "react";

const Form = ({ setCity, setFirst }) => {
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        const newCity = e.target.city.value.trim().toLowerCase();
        setCity(newCity);
        setFirst(false);
      }}
    >
      <input type="text" name="city" placeholder="City" />
      <button type="submit">Find</button>
    </form>
  );
};

export default Form;
