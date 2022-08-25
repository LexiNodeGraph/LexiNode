import * as React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
  
  
const Form = () => {
  const [loop, setLoop] = useState([
  "name0"
  ]);
  const num = loop;

  function addInput() {
    setLoop([...loop, "name" + num.length]); 
  }
  console.log(loop);

  return (
    <>
    <div className="grid justify-center">

      {
        num.map((item, index) => {
          return (
            <div key={index}>
              <input className="border border-1" type="text" name={item} id="" />
            </div>
          )
        }
        )
      }
        <div className="flex justify-between">
          <div>
            <button className="bg-black w-14 h-5 text-white rounded-sm" onClick={addInput}>add</button>
          </div>
          <div>
            <button className="bg-black w-14 h-5 text-white rounded-sm" onClick={Submit => console.log("h1")}>submit</button>
          </div>
        </div>
      </div>
    </>
  )
}
  

export default Form;