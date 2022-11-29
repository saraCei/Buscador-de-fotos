import React from 'react'
import { GridCard } from './GridCard';
import { useFetchPhotos } from '../hooks/useFetchPhotos';

export const GridCategory = ({category}) => {

    const {photosCategory, isLoading} = useFetchPhotos(category);

  return (
    <section>
        <h2>{category}</h2>

        <div>
        {
            // (isLoading) ? true (
            //     <div>
            //         <img src="https://media.tenor.com/wfEN4Vd_GYsAAAAC/loading.gif" alt="" />
            //     </div>
            // ):(
            photosCategory.map(photo=>(
                <GridCard key={photo.id} {...photo}/>
                ))
                // )
        }
        </div>
    </section>
  )
}
