import React from 'react'
import useSegitigaCalculatorLogic from '../rumus/segitiga/segitiga.js'


const LuasSegitiga = () => {
    const {
        alas,
        tinggi,
        luas,
        handleAlasChange,
        handleTinggiChange,
        handleHitungLuas,
    } = useSegitigaCalculatorLogic()
    return (
        <div>
            <h1>Kalkulator Luas Segitiga</h1>
            <label>Alas: </label>
            <input type="number" value={alas} onChange={handleAlasChange} />
            <br />
            <label>Tinggi: </label>
            <input type="number" value={tinggi} onChange={handleTinggiChange} />
            <br />
            <button onClick={handleHitungLuas}>Hitung Luas</button>
            <br />
            {luas !== null && <p>Luas Segitiga: {luas}cm</p>}
        </div>
    )
}

export default LuasSegitiga;