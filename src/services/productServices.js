const apiUrl = "http://localhost/barber-backend/api/listar.php";


export const getAllProductos =  async () =>{
    try{
    const response = await fetch(apiUrl,{
        method:"GET",
        headers:{
            "Content-Type": "application/json",
        },
    
    });

    const data = await response.json();
    return data;


    }catch(e){
        console.error("Error al obtener productos", e);
        return [];
        
    }
}