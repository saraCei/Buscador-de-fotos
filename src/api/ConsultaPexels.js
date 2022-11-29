export const ConsultaPexels = async(category)=>{
        const resp=await fetch(`https://api.pexels.com/v1/search?query=${category}&orientation=landscape&per_page=5`, {
            method:'GET',
            headers: {
                Authorization: '563492ad6f917000010000015b0382a93c804f5488fe5bb9199de585'
            },
            mode: 'cors',
            cache: 'force-cache'
        })

        // const {photos}= await resp.json()
        // setPhotosCategory(photos)   
        return await resp.json()

    }

