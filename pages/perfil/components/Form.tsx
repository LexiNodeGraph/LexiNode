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

  const [formValue, setformValue] = useState({ // useState
    title: '',
    journal_title: '',
    field: '',
    year: '',
    international: '',  
    web_link: '',
    keyword: '',    
    abstract: '',
    first_name0: '',
  });

  const handleSubmit = async () => {
    
    let body = {
      title: formValue.title,
      journal_title: formValue.journal_title,
      field: formValue.field,
      year: formValue.year,
      international: formValue.international,
      web_link: formValue.web_link,
      keyword: formValue.keyword,
      abstract: formValue.abstract,
      first_name0: formValue.first_name0,
    }

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
    setformValue({
      ...formValue,
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
              value={formValue.title}
              onChange={() => handleChange}
            />
          </div>
          <div className="grid">
            <label htmlFor="name">Título do Journal</label>
            <input className="border border-1" type="text" name="journal_title"
              value={formValue.journal_title}
              onChange={() => handleChange} 
            />
          </div>
          <div className="grid">
            <label htmlFor="name">Área de pesquisa</label>
            <input className="border border-1" type="text" name="field" 
            value={formValue.field}
            onChange={() => handleChange} />
          </div>
          <div className="grid">
            <label htmlFor="name">Ano de publicação</label>
            <input className="border border-1" type="text" name="year" 
            value={formValue.year}
            onChange={() => handleChange} />
          </div>
          <div className="grid">
            <label htmlFor="name">Internacional(Sim/Não)</label>
            <input className="border border-1" type="text" name="international" 
            value={formValue.international}
            onChange={() => handleChange} />
          </div>
          <div className="grid">
            <label htmlFor="name">Link Web</label>
            <input className="border border-1" type="text" name="web_link" 
            value={formValue.web_link}
            onChange={() => handleChange} />
          </div>
          <div className="grid">
            <label htmlFor="name">Palavras-chave:</label>
            <input className="border border-1" type="text" name="keyword" 
            value={formValue.keyword}
            onChange={() => handleChange} />
          </div>
          <div className="grid">
            <label htmlFor="name">Resumo</label>
            <input className="border border-1" type="text" name="abstract" 
            value={formValue.abstract}
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
                      <label>Primeiro nome</label>
                      <input className="border border-1" type="text" name={"first_name" + index} 
                      value={formValue.first_name0}
                      onChange={handleChange}/>
                    
                    </div>
                    <div className="grid">
                      <label>Nome do meio</label>
                      <input className="border border-1" type="text" name={"middle_name" + item} />
                    
                    </div>
                    <div className="grid">
                      <label>Último nome</label>  
                      <input className="border border-1" type="text" name={"last_name" + item} />
                    
                    </div>
                    <div className="grid">
                      <label>Email</label>  
                      <input className="border border-1" type="text" name={"email" + item} />
                    
                    </div>
                    <div className="grid">
                      <label>Instituição</label>  
                      <input className="border border-1" type="text" name={"institution" + item} />
                    
                    </div>
                    <div className="grid">
                      <label>Autor principal/colaborador</label>  
                      <input className="border border-1" type="text" name={"author_role" + item} />
                    
                    </div>
                    <div className="grid">
                      <label>Cidade</label>  
                      <input className="border border-1" type="text" name={"city" + item} />
                    
                    </div>
                    <div className="grid">
                      <label>País</label>  
                      <input className="border border-1" type="text" name={"country" + item} />
                    
                    </div>
                    <div className="grid">
                      <label>Área de atuação</label>  
                      <input className="border border-1" type="text" name={"field" + item} />
                    
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