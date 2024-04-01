import {useState} from "react"

function Form(props){

    const [author, setAuthor] = useState("")
    const [content, setContent] = useState("")

    let handleSubmit = (event) => {
        event.preventDefault()

        if(author === "" || content === ""){
            alert("Author and content are required!")
        } else {
            console.log(author, content)
            props.onNewSubmit({author, content})
            setAuthor("")
            setContent("")
        
        }
    }

    let handleAuthorChange = (event) => {
        setAuthor(event.target.value)
    }

    let handleContentChange = (event) => {
        setContent(event.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label for="linkAuthor">Author Name</label>
            <input type="text" name="linkAuthor" onChange={handleAuthorChange} value={author}/>
            <br/>
            <label for="linkContent">Content</label>
            <input type="text" name="linkContent" onChange={handleContentChange} value={content}/>

            <br/>
            <br/>

            <input type="submit" disabled={author === "" || content === ""}/>
        </form>
    )
}

export default Form