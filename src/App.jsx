import React from 'react';
import Post from './components/Post';
import Form from './components/Form';
import Feed from './components/Feed';
import {useState} from "react"

function App(){

    let handleNewSubmission = (event) => {
      setFavLinks([...favLinks, data])
    }
  
  return(
    <div>
      <h1>Social Media</h1>

        <Form onNewSubmit={handleNewSubmission} />

        <Feed posts={favLinks} />

        <Post content="This is a test post!" />
        <Post content="This is another test post!" />

    </div>
  )
}

export default App