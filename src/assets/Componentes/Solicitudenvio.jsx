export default function Solicitudenvio (){
    const enviar =() => {
        alert("Enviado :)")
    }
    return(
        <form>
            <p>
                <label htmlFor="">Identificacion</label>
                <input type="text" />
            </p>
            <p>
                <label htmlFor="">Nombre</label>
                <input type="text" />
            </p>
            <p>
                <label htmlFor="">Fecha</label>
                <input type="date" />
            </p>
            <p>
                <label htmlFor="">hora</label>
                <input type="time" />
            </p>
            
            <button onClick={enviar}>Enviar</button>

        </form>
    )
} 