import * as React from "react";
import axios from "axios";
import { useState } from "react";
  
  
const Form = () => {

  const [paperForm, setPaperForm] = useState({ // useState -- data of the papers
    title: '',
    journal_title: '',
    research_field: '',
    year: '',
    international: 'false',  
    web_link: '',
    abstract: '',
  });
  
  const handleChange = (e:any) => {
    setPaperForm({
      ...paperForm,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async () => {
    
    let body = {
      title: paperForm.title,
      journal_title: paperForm.journal_title,
      research_field: paperForm.research_field,
      year: paperForm.year,
      international: paperForm.international,
      web_link: paperForm.web_link,
      abstract: paperForm.abstract,
      // keyword: paperForm.keyword,
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
  
  return (
    <>
      <div className="grid justify-center mb-96">
        <form onSubmit={() => handleSubmit()}>
          <div className="grid">
            <label htmlFor="name">Título</label>
            <input className="border border-1" type="text" name="title"
              value={paperForm.title}
              onChange={handleChange}
            />
          </div>
          <div className="grid">
            <label htmlFor="name">Título do Journal</label>
            <input className="border border-1" type="text" name="journal_title"
              value={paperForm.journal_title}
              onChange={handleChange}
            />
          </div>
          <div className="grid">
            <label htmlFor="name">Área de pesquisa</label>
            <input className="border border-1" type="text" name="research_field"
              value={paperForm.research_field}
              onChange={handleChange} />
          </div>
          <div className="grid">
            <label htmlFor="name">Ano de publicação</label>
            <input className="border border-1" type="text" name="year"
              value={paperForm.year}
              onChange={handleChange} />
          </div>
          <div className="grid">
            <label htmlFor="name">Internacional</label>
            <select name="international">
              {/* parei aqui */}
              <option value={paperForm.international }>Não</option> 
              <option value={paperForm.international }>Sim</option>
            </select>
            {/* <input className="border border-1" type="text" name="international"
              value={paperForm.international}
              onChange={handleChange} /> */}
          </div>
          <div className="grid">
            <label htmlFor="name">Link Web</label>
            <input className="border border-1" type="text" name="web_link"
              value={paperForm.web_link}
              onChange={handleChange} />
          </div>
          <div className="grid">
            <label htmlFor="name">Resumo</label>
            <input className="border border-1" type="text" name="abstract"
              value={paperForm.abstract}
              onChange={handleChange} />
          </div>
          {/* <div className="grid">
            <label htmlFor="name">Palavras-chave:</label>
            <input className="border border-1" type="text" name="keyword"
              value={paperForm.keyword}
              onChange={() => handleChange} />
          </div> */}
          <div className="flex justify-center mb-96">
            <button type="submit" value="save" className="bg-black w-14 h-5 text-white rounded-sm">Salvar</button>
          </div>
        </form>
      </div>
    </>
  )
}
  

export default Form;


{/* <>
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
                <hr className="border-2 mt-2 border-black" />
                <div className="grid">
                  <label>Nome Completo</label>
                  <input className="border border-1" type="text" name="first_name"
                    value={authorForm.name}
                    onChange={handleChange} />

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
</> */}