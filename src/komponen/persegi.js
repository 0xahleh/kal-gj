import React from 'react'
import RumusPersegiLuas from '../rumus/persegi/luas'

const persegi = () => {
    const {
        sisi,
        luas,
        handleSisiChange,
        handleHitungLuas,
    } = RumusPersegiLuas();
  return (
    <div>
        <h1>Perhitungan Luas Persegi</h1>
        <label>Sisi: </label>
        <input type="number" value={sisi} onChange={handleSisiChange} />
        <br />
        <button onClick={handleHitungLuas}>Hitung Luas</button>
        <br />
        {luas !== null && <p>Luas Persegi: {luas}cm</p>}
    </div>
  )
}

export default persegi