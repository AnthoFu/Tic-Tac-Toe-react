// *! Deberia mejorar la visualizacion del boton cuando no tiene nada asignado, cuando esta nulo se ve mal el height
import { useState } from "react";

interface squareProps{
    valor: string,
    onSquareClick: () => void // ESTO ES BIEN DIFICIL DE TIPAR
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

    const [cuadrados, setCuadrados] = useState(Array(9).fill(null)
)

function handleClik(i:number){
    const siguienteCuadrado = cuadrados.slice();
    siguienteCuadrado[i] = 'X';
    setCuadrados(siguienteCuadrado);
}


    // Este es el 'HTML' que retorna
    return (
        <>
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
