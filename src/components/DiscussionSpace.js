import React from 'react'
import Header from './Header'
import {getUserName} from './functions/getUserName'
import { useState } from 'react';

export default function DiscussionSpace() {
    const loggedInUser = getUserName();
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Calculate the response based on the question
      // In this example, we just return the question in all caps
    //   const calculatedResponse = question.toUpperCase();
      // Update component state with the response
    //   setResponse(calculatedResponse);
    setResponse(question)
    }
  
    const handleChange = (e) => {
      setQuestion(e.target.value);
    }
  return (
    <div>
        <Header/>
        <h1>Hi {loggedInUser} ,Pls ask your question below: </h1>
        <form onSubmit={handleSubmit}>
        <label>
          Question:
          <input type="text" value={question} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>
        {response}
      </div>
    </div>
  )
}
