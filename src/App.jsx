import React, { useState } from 'react';

function App() {
    // Paso 1: Crear un nuevo estado
    const [miTexto, setMiTexto] = useState('');

    // Paso 2 y 3: Crear event handler para onChange y actualizar estado
    const handleText = (event) => {
        // Tomar el valor de la caja de entrada
        const textoIngresado = event.target.value;
        // Actualizar el estado con el valor de la caja de entrada
        setMiTexto(textoIngresado);
    };

    return (
        <div>
          <div>
            Capture su texto
          </div>
          {/* Paso 5: Pase el estado a la entrada del valor del prop */}
          <input onChange={handleText} />
          <h3>Su Texto: </h3>
          {/* Paso 4: Mostrar el texto de la caja de entrada aquí */}
          <p>{miTexto}</p>
        </div>
    );
}

export default App;
