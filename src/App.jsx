import Post from './components/Post';
import Form from './components/Form';
import Feed from './components/Feed';
import {useState} from "react"

function App(){

    let [feedData, setFeedData] = useState([])

    let onNewMessage = (data) => {
      feedData([...feedData, data])
    }
  }

  return(
    <div>
      <h1>Social Media</h1>

        <Form handleSubmit={onNewMessage} />

        <Feed data={feedData} />

        <Post content="This is a test post!" />
        <Post content="This is another test post!" />

    </div>
  )


export default App