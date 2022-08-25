import * as React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
  
  
const Form = () => {
  const [loop, setLoop] = useState([
  "name0"
  ]);
  const num = loop;

  function addInput() {
    setLoop([...loop, "name" + num.length]); 
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
        <form method="POST" action="/">
          <div className="grid">
            <label htmlFor="name">Título</label>
            <input className="border border-1" type="text" name="titulo" id="" />
          </div>
          <div className="grid">
            <label htmlFor="name">Título do Journal</label>
            <input className="border border-1" type="text" name="titulo" id="" />
          </div>
          <div className="grid">
            <label htmlFor="name">Área de pesquisa</label>
            <input className="border border-1" type="text" name="titulo" id="" />
          </div>
          <div className="grid">
            <label htmlFor="name">Ano de publicação</label>
            <input className="border border-1" type="text" name="titulo" id="" />
          </div>
          <div className="grid">
            <label htmlFor="name">Internacional(Sim/Não)</label>
            <input className="border border-1" type="text" name="titulo" id="" />
          </div>
          <div className="grid">
            <label htmlFor="name">Link Web</label>
            <input className="border border-1" type="text" name="titulo" id="" />
          </div>
          <div className="grid">
            <label htmlFor="name">Palavras-chave:</label>
            <input className="border border-1" type="text" name="titulo" id="" />
          </div>
          <div className="grid">
            <label htmlFor="name">Resumo</label>
            <input className="border border-1" type="text" name="titulo" id="" />
          </div>
          <div className="flex gap-2">

            <label>Autores:</label>
            
            <a className="bg-black w-14 h-5 text-white rounded-sm flex justify-center" onClick={addInput}>+</a>
            <span>|</span>
            <a className="bg-black w-14 h-5 text-white rounded-sm flex justify-center" onClick={removeInput}>-</a>

          </div>
          
          <div>
            {
              num.map((item, index) => {
                return (
                  <div key={index}>
                    <hr className="border-2 mt-2 border-black"/>
                    <div className="grid">
                      <label>Primeiro nome</label>
                      <input className="border border-1" type="text" name={item} />
                    
                    </div>
                    <div className="grid">
                      <label>Nome do meio</label>
                      <input className="border border-1" type="text" name={item} />
                    
                    </div>
                    <div className="grid">
                      <label>Último nome</label>  
                      <input className="border border-1" type="text" name={item} />
                    
                    </div>
                    <div className="grid">
                      <label>Email</label>  
                      <input className="border border-1" type="text" name={item} />
                    
                    </div>
                    <div className="grid">
                      <label>Instituição</label>  
                      <input className="border border-1" type="text" name={item} />
                    
                    </div>
                    <div className="grid">
                      <label>Autor principal/colaborador</label>  
                      <input className="border border-1" type="text" name={item} />
                    
                    </div>
                    <div className="grid">
                      <label>Cidade</label>  
                      <input className="border border-1" type="text" name={item} />
                    
                    </div>
                    <div className="grid">
                      <label>País</label>  
                      <input className="border border-1" type="text" name={item} />
                    
                    </div>
                    <div className="grid">
                      <label>Área de atuação</label>  
                      <input className="border border-1" type="text" name={item} />
                    
                    </div>
                  </div>
                )
              }
              )
            }
          </div>
          <div className="flex justify-center mb-96">
            <button className="bg-black w-14 h-5 text-white rounded-sm">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}
  

export default Form;