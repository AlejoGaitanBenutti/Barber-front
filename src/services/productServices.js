const apiUrl = import.meta.env.VITE_API_URL;

export const getAllProductos =  async () =>{
    try{
    const response = await fetch(apiUrl,{
        method:"GET",
        headers:{
            "Content-Type": "application/json",
        },
         mode: "cors",
         credentials:"include"
    
    });

    const text = await response.text();
    

    const data= JSON.parse(text);
    return data


    }catch(e){
        console.error("Error al obtener productos", e);
        return [];
        
    }
}