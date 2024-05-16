export default function GameOver({winner, onRestart}) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
                {winner && <p>{winner} à gagné!</p>}
                {!winner && <p>Match null !</p>}
            <p>
            <button onClick={onRestart}>Rejouer</button>
            </p>
            
        </div>
    )
}