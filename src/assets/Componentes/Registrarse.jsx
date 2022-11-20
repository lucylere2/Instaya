export default function Registrarse (){
    const enviar =() => {
        alert("Registro Exitoso :)")
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
                <label htmlFor="">Direccion</label>
                <input type="text" />
            </p>
            <p>
                <label htmlFor="">Telefono</label>
                <input type="number" />
            </p>
            
            <button onClick={Registrarse}>Registrarse</button>

        </form>
    )
} 