import React from 'react'
import { useState } from 'react'
import DisplayDataForChild from './DisplayDataForChild';

export default function MemoExample() {

    const [data,setData] = useState([]);
    const [form,setform]= useState({
        firstName : "",
        lastName : ""
    })

    const delteInf= React.useCallback(()=>{

      let d= [...data];

      d.splice(index,1);

      setData(d);


    },[])

   

    const handleChange = (e)=>{

        setform({...form,[e.target.name]:e.target.value});
    }

    const saveInfo = ()=>{

        let p = [...data];
        p.push(form);
        setData(p);

    }
  return (
    <div>
        <input type='text' name="firstName" onChange={handleChange}/>

        <input type='text' name="lastName" onChange={handleChange}/>

        <input type='button' value="save" onClick={saveInfo} />
   

     <DisplayDataForChild datainfo={data} deleteInfo={delteInf}/> 
    </div>
  )
}
