import React from "react";

export default function GetForm(props) {

  return (
    <div>
      <form onSubmit={props.handleFetch}>
        <legend>Get Quote</legend>

        <label for="category">Category</label>
        <input type="text" name="category" id="category" placeholder="money"/>

        <button type="submit" value="Submit">Submit</button>
      </form>
    </div>
  );
}