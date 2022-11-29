import React from 'react'
import { useState } from 'react';

const FormAddCategory = ({onNewCategory}) => {

    const [valorInput, setValorInput] = useState('');

    const handleChange=({target})=>{
        setValorInput(target.value)
    }

    const handleSubmit=(ev)=>{
        ev.preventDefault()
        if(valorInput.trim().length<=0) return
        onNewCategory(valorInput.trim())
        // setCategory([...category,valorInput.trim()])
        setValorInput('')
    }


  return (
    <>


    <form className="row my-5" onSubmit={handleSubmit}>
    <div className="col-md-10">
        <input 
            type="text" 
            name="buscar"
            id="buscar"
            placeholder="Buscar"
            className="form-control mb-2" 
            value={valorInput}
            onChange={handleChange}/>
    </div>

    <div className="col-md-2 d.grid">
        <button type="submit"
                    className="btn btn-dark">
                        Buscar
        </button>
    </div>

</form>
</>
  )
}

export default FormAddCategory
