import { useEffect, useState } from "react";
import FormAddCategory from "./FormAddCategory";
import { GridCategory } from "./GridCategory";


export const Galeria = () => {

    const [categories, setCategories] = useState([])

    const onNewCategory = (newCategory) =>{
        const encontrada=categories.find(item=>item.toLowerCase()===newCategory.toLowerCase())
        if(encontrada) return
        setCategories([newCategory,...categories])
    }

  return (
    <>
        <h1 className="">Buscador de fotos</h1>

        {/* {Formulario} */}

        <FormAddCategory onNewCategory={onNewCategory}/>

        {/* Grid de cada categoría */}

        {/* <h1>Nombre Categoria</h1> */}

            {/* <h1>Nombre Categoria</h1> */}
                {
                    categories.map(category=>(
                        <GridCategory key={category} category={category}/>
                    ))
                }

        {/* {Cada grid tendrá un grid item} */}

    </>
  )
}
