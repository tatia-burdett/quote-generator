import React from "react";
import { useState, useEffect } from "react";

import getQuote from "../../utils/api"

import GetForm from "../GetForm/GetForm";
import Results from "../Results/Results";


export default function QuoteGenerator() {
    const [currentQuote, setCurrentQuote] = useState()
    const [currentAuthor, setCurrentAuthor] = useState()

    const handleFetch = async (event) => {
        event.preventDefault()
        const category = event.target.category.value
        const response = await getQuote(category)
        console.log(response.data[0].quote, "RESPONSE")
        setCurrentQuote(response.data[0].quote)
        setCurrentAuthor(response.data[0].author)
    }

    return (
        <div>
            <GetForm handleFetch={handleFetch}/>

            <Results currentQuote={currentQuote} currentAuthor={currentAuthor}/>
        </div>
    );
  }