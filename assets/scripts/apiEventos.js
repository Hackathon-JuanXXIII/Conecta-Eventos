export const fConsumirAPIEventos = async() => {
    const ENDPOINT = 'https://hackathon.lausnchez.es/api/v1/eventos'
    // Cambiar el token por el que venga del login, el que esta es de prueba
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
        
        if (!respuesta.ok) return null;

        const respuestaJSON = await respuesta.json();
        
        if (respuestaJSON.data && Array.isArray(respuestaJSON.data) && respuestaJSON.data.length > 0) {
            return respuestaJSON.data
        } else {
            return []
        }
            
    } catch (error) {
        console.error("Error al consumir la API:", error);
        
        return null;
    }
}

