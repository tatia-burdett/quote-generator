import React from "react";

export default function GetForm({ handleFetch }) {

  return (
    <div>
      <form onSubmit={handleFetch}>
        <legend>Get Quote</legend>

        <label htmlFor="category">Category</label>
        <input type="text" name="category" id="category" placeholder="money"/>

        <button type="submit" value="Submit">Submit</button>
      </form>
    </div>
  );
}