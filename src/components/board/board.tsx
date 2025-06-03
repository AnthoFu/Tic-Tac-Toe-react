// *! Deberia mejorar la visualizacion del boton cuando no tiene nada asignado, cuando esta nulo se ve mal el height
import { useState } from "react";

interface squareProps{
    valor: string,
    onSquareClick: () => void //* ESTO ES BIEN DIFICIL DE TIPAR
}

// Este es el cuadrado del juego de Tic Tac Toe
function Square({valor, onSquareClick}:squareProps) {


    // Este es el 'HTML' que retorna
    return <button className="square"
    onClick={onSquareClick}>
        {valor}
        </button>; 
}

// Haría algún tipo de chiste pero esto lo pienso guardar en el github, te salvas Aaron 

// Este será el cuadro donde se muestren los cuadrados
export default function Board() {

    const [xEsElSiguiente, setXEsElSiguiente] = useState(true); // Este es el cambiador de estados para declarar si x es el siguiente o no

    const [cuadrados, setCuadrados] = useState(Array(9).fill(null) // Este es el array de los 9 cuadrados, con el setCuadrados
    // se crea un array aparte para evitar modificar el original
)



function handleClik(i:number){
    
    if (cuadrados[i]){ // Esta es una condicion para ver si los cuadrados ya tiene el 'i' asignado.
        return; // Si es verdadero, retorna de forma temprana
    }
    const siguienteCuadrado = cuadrados.slice();
    if (xEsElSiguiente){ // Si el valor es verdadero
        siguienteCuadrado[i] = 'X';
    } else { // Sino
        siguienteCuadrado[i] = 'O';
    }
    setXEsElSiguiente(!xEsElSiguiente) // Aqui cambiamos el valor
    setCuadrados(siguienteCuadrado);
}

const ganador = declararGanador(cuadrados)
let estado;
if (ganador){
    estado = 'Ganador: ' + ganador
} else {
    estado = 'Siguiente jugador: ' + (xEsElSiguiente ? 'X' : 'O')
}


    // Este es el 'HTML' que retorna
    return (
        <>
            <div className="estado">{estado}</div>
            <div className="board-row">
                <Square valor={cuadrados[0]} onSquareClick={() => handleClik(0)}/>
                <Square valor={cuadrados[1]} onSquareClick={() => handleClik(1)}/>
                <Square valor={cuadrados[2]} onSquareClick={() => handleClik(2)}/>
            </div>
            <div className="board-row">
                <Square valor={cuadrados[3]} onSquareClick={() => handleClik(3)}/>
                <Square valor={cuadrados[4]} onSquareClick={() => handleClik(4)}/>
                <Square valor={cuadrados[5]} onSquareClick={() => handleClik(5)}/>
            </div>
            <div className="board-row">
                <Square valor={cuadrados[6]} onSquareClick={() => handleClik(6)}/>
                <Square valor={cuadrados[7]} onSquareClick={() => handleClik(7)}/>
                <Square valor={cuadrados[8]} onSquareClick={() => handleClik(8)}/>
            </div>
        </>
    );
}



function declararGanador(cuadrados: (string | null)[]): string | null {
    const lineas: number[][] = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lineas.length; i++) {
        const [a, b, c]: number[] = lineas[i];
        if (cuadrados[a] && cuadrados[a] === cuadrados[b] && cuadrados[b] === cuadrados[c]) {
            return cuadrados[a];
        }
    }
    return null;
}