import React from "react";
import { useState } from "react";

import getQuote from "../../utils/api"

import GetForm from "../GetForm/GetForm";
import Results from "../Results/Results";


export default function QuoteGenerator() {
    const handleFetch = (e) => {
        e.preventDefault()
        console.log(e.target.category.value)
        const category = e.target.category.value
        getQuote(category)
      }


    return (
      <div>
        <div>
            <GetForm handleFetch={handleFetch}/>
  
            <Results/>
        </div>
      </div>
    );
  }