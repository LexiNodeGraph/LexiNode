import * as React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
  
  
const Form = () => {
  const [loop, setLoop] = useState([
  "0"
  ]);
  const num = loop;

  function addInput() {
    setLoop([...loop, "" + num.length]); 
  }
  
  function removeInput() {
    if(loop.length > 1) {
      const index = loop.length - 1;
      const allNames = [...loop];
      allNames.splice(index, 1);
      setLoop(allNames);
    }
  }

  return (
    <>
      <div className="grid justify-center">
        <form method="POST" action="/api/paper/create">
          <div className="grid">
            <label htmlFor="name">Título</label>
            <input className="border border-1" type="text" name="title" id="" />
          </div>
          <div className="grid">
            <label htmlFor="name">Título do Journal</label>
            <input className="border border-1" type="text" name="journal_title" id="" />
          </div>
          <div className="grid">
            <label htmlFor="name">Área de pesquisa</label>
            <input className="border border-1" type="text" name="field" id="" />
          </div>
          <div className="grid">
            <label htmlFor="name">Ano de publicação</label>
            <input className="border border-1" type="text" name="year" id="" />
          </div>
          <div className="grid">
            <label htmlFor="name">Internacional(Sim/Não)</label>
            <input className="border border-1" type="text" name="international" id="" />
          </div>
          <div className="grid">
            <label htmlFor="name">Link Web</label>
            <input className="border border-1" type="text" name="web_link" id="" />
          </div>
          <div className="grid">
            <label htmlFor="name">Palavras-chave:</label>
            <input className="border border-1" type="text" name="keyword" id="" />
          </div>
          <div className="grid">
            <label htmlFor="name">Resumo</label>
            <input className="border border-1" type="text" name="abstract" id="" />
          </div>
          <div className="flex gap-2">

            <label>Autores:</label>
            
            <a className="bg-black w-14 h-5 text-white rounded-sm flex justify-center mouse-pointer" onClick={addInput}>+</a>
            <span>|</span>
            <a className="bg-black w-14 h-5 text-white rounded-sm flex justify-center mouse-pointer" onClick={removeInput}>-</a>

          </div>
          
          <div>
            {
              num.map((item, index) => {
                return (
                  <div key={index}>
                    <hr className="border-2 mt-2 border-black"/>
                    <div className="grid">
                      <label>Primeiro nome</label>
                      <input className="border border-1" type="text" name={"first_name" + item} />
                    
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