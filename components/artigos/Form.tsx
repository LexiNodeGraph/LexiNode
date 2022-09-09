import * as React from "react";
import axios from "axios";
import { useState } from "react";
  
  
const Form = () => {

  const [loop, setLoop] = useState(["0"]); // useState
  const num = loop;

  function addInput() {
    if (num.length < 1) {
      setLoop([...loop, "" + num.length]); // add another input box
    }
  }
  
  function removeInput() {
      const index = loop.length - 1;
      const allNames = [...loop];
      allNames.splice(index, 1);
      setLoop(allNames);
  }

  const [paperForm, setPaperForm] = useState({ // useState
    title: '',
    journal_title: '',
    research_field: '',
    year: '',
    international: '',  
    web_link: '',
    abstract: '',
    keyword: '', 
    authors: [{}]   
  });

  const [authorForm, setAuthorForm] = useState({
    name: '',   
    email: '',
    institution: '',
    author_role: '',
    city: '',
    country: '',
    field: ''  
  }); // useState

  const handleSubmit = async () => {
    
    let body = {
      title: paperForm.title,
      journal_title: paperForm.journal_title,
      field: paperForm.research_field,
      year: paperForm.year,
      international: paperForm.international,
      web_link: paperForm.web_link,
      keyword: paperForm.keyword,
      abstract: paperForm.abstract,
    }

    let authors = {
      name: authorForm.name,

    };

    try {
      // make axios post request
      const response = await axios({
        method: "post",
        url: "/api/paper/create",
        data: body,
        headers: { "Content-Type": "application/json" },
      });
    } catch(error) {
      console.log(error)
    }
  }
  const handleChange = (event:any) => {
    setPaperForm({
      ...paperForm,
      [event.target.name]: event.target.value
    });
  }

  return (
    <>
      <div className="grid justify-center">
        <form onSubmit={() => handleSubmit()}>

          <div className="grid">
            <label htmlFor="name">Título</label>
            <input className="border border-1" type="text" name="title" 
              value={paperForm.title}
              onChange={() => handleChange}
            />
          </div>
          <div className="grid">
            <label htmlFor="name">Título do Journal</label>
            <input className="border border-1" type="text" name="journal_title"
              value={paperForm.journal_title}
              onChange={() => handleChange} 
            />
          </div>
          <div className="grid">
            <label htmlFor="name">Área de pesquisa</label>
            <input className="border border-1" type="text" name="field" 
              value={paperForm.research_field}
            onChange={() => handleChange} />
          </div>
          <div className="grid">
            <label htmlFor="name">Ano de publicação</label>
            <input className="border border-1" type="text" name="year" 
              value={paperForm.year}
            onChange={() => handleChange} />
          </div>
          <div className="grid">
            <label htmlFor="name">Internacional(Sim/Não)</label>
            <input className="border border-1" type="text" name="international" 
              value={paperForm.international}
            onChange={() => handleChange} />
          </div>
          <div className="grid">
            <label htmlFor="name">Link Web</label>
            <input className="border border-1" type="text" name="web_link" 
              value={paperForm.web_link}
            onChange={() => handleChange} />
          </div>
          <div className="grid">
            <label htmlFor="name">Palavras-chave:</label>
            <input className="border border-1" type="text" name="keyword" 
              value={paperForm.keyword}
            onChange={() => handleChange} />
          </div>
          <div className="grid">
            <label htmlFor="name">Resumo</label>
            <input className="border border-1" type="text" name="abstract" 
              value={paperForm.abstract}
            onChange={() => handleChange} />
          </div>
          <div className="flex gap-2">

            <label>Autores:</label>
            
            <a className="bg-black w-14 h-5 text-white rounded-sm flex justify-center mouse-pointer" onClick={addInput}>+</a>
            <span>|</span>
            <a className="bg-black w-14 h-5 text-white rounded-sm flex justify-center mouse-pointer" onClick={removeInput}>-</a>

          </div>
          
          <div>
            {
              num.map((item: any, index) => {

                return (
                  <div key={index}>
                    <hr className="border-2 mt-2 border-black"/>
                    <div className="grid">
                      <label>Nome Completo</label>
                      <input className="border border-1" type="text" name="first_name" 
                        value={authorForm.name}
                      onChange={handleChange}/>

                    </div>
                    <div className="grid">
                      <label>Email</label>  
                      <input className="border border-1" type="text" name="email" />
                    
                    </div>
                    <div className="grid">
                      <label>Instituição</label>  
                      <input className="border border-1" type="text" name="institution" />
                    
                    </div>
                    <div className="grid">
                      <label>Autor principal/colaborador</label>  
                      <input className="border border-1" type="text" name="author_role" />
                    
                    </div>
                    <div className="grid">
                      <label>Cidade</label>  
                      <input className="border border-1" type="text" name="city" />
                    
                    </div>
                    <div className="grid">
                      <label>País</label>  
                      <input className="border border-1" type="text" name="country" />
                    
                    </div>
                    <div className="grid">
                      <label>Área de atuação</label>  
                      <input className="border border-1" type="text" name="field" />
                    
                    </div>
                  </div>
                )
              }
              )
            }
          </div>
          <div className="flex justify-center mb-96">
            <button type="submit" value="save" className="bg-black w-14 h-5 text-white rounded-sm">Salvar</button>
          </div>
        </form>
      </div>
    </>
  )
}
  

export default Form;