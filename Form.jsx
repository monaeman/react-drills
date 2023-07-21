import React from 'react'
import {useState} from 'react'


function Form() {


    const [form,setForm] =useState({
        name:'',
        age:0
    })

    const handleChange =(event) =>{

        setForm({

            ...form,
            [event.target.name]: event.target.value 
        
        })
    }
const handleSubmit =(e) => {
    e.preventDefault();
    console.log(form)
}

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={form.name}
            name='name'
            placeholder='enter name'
            onChange={handleChange}
            />
            <input
            type="number"
            value={form.age}
            name='age'
            placeholder='enter age'
            onChange={handleChange}
            />
            <input type="submit" value="submit form" />

        </form>
    </div>
  )
}

export default Form