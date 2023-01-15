import React from "react";
import { useState, useEffect } from "react";

import getQuote from "../../utils/api"

import GetForm from "../GetForm/GetForm";
import Results from "../Results/Results";


export default function QuoteGenerator() {
    const [currentQuote, setCurrentQuote] = useState()

    const handleFetch = async (event) => {
        event.preventDefault()
        const category = event.target.category.value
        console.log(event.target.category.value)
        const response = await getQuote(category)
        setCurrentQuote(response)
      }

    return (
        <div>
            <GetForm handleFetch={handleFetch}/>

            {currentQuote}
  
            <Results currentQuote={currentQuote}/>
        </div>
    );
  }