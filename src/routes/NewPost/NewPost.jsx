import { useNavigate } from "react-router-dom";
import blogFetch from "../../axios/config";
import { useState } from "react";
import "./NewPost.css";


const NewPost = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [artigo, setArtigo] = useState();

  const createPost = async (e) =>{
    e.preventDefault();
    const post = {
      title,
      artigo,
      userId: 1
    };

    await blogFetch.post("/posts", {
      body: post,
    });

    navigate("/");
  };

  return (
    <div className="new-post">
      <h2>Inserir novo Post:</h2>
      <from onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Titulo:</label>
          <input 
              type="text" 
              name="title" 
              id="title" 
              placeholder="Digite o Titulo do Post"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="title">Artigo:</label>
          <textarea 
            name="artigo" 
            id="artigo" 
            placeholder="Digite o Artigo do Post"
            value={artigo}
            onChange={(e) => setArtigo(e.target.value)}
          >            
          </textarea>
        </div>
        <input type="submit" value="Criar Artigo" className="btn"/>
      </from>
    </div>
  );
};

export default NewPost;