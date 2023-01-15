import React from "react";

export default function Results({ currentQuote="Quote", currentAuthor="Author" }) {

    return (
      <div>
        {currentQuote} - {currentAuthor}
      </div>
    );
  }