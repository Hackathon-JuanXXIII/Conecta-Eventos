//esta funcion recibe un id de un evento y devuelve o un json con el evento o un error

export const fObtenerDetalleEvento = async(idEvento) => {
    const ENDPOINT = `https://hackathon.lausnchez.es/api/v1/evento/${idEvento}`
    const TOKEN = '47|GCKRMdY2MK3wxew1bXbRiiubDlNmFnf1xUTfmCcC75c00333'

    try {
        const respuesta = await fetch(ENDPOINT, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${TOKEN}`,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        
        if (!respuesta.ok) {
            console.error("Error al obtener detalle del evento:", respuesta.status);
            return null;
        }

        const respuestaJSON = await respuesta.json();
        
        
        return respuestaJSON;
       
            
    } catch (error) {
        console.error("Error al obtener detalle del evento:", error);
        return null;
    }
}