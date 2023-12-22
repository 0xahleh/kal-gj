import React from "react";
import RumusLingkaran from "../rumus/lingkaran/luas.js";
import RumusLingkaranKeliling from "../rumus/lingkaran/keliling.js";

const LuasLingkaran = () => {
    const {
        jari,
        jari2,
        luas,
        luas2,
        handleJariChange,
        handleJari2Change,
        handleHitungLuas,
    } = RumusLingkaran();

    const {
        jari_jari,
        keliling,
        handleJari_jariChange,
        handleHitungKeliling,
    } = RumusLingkaranKeliling();
    return (
        <div>
            <div>
                <h1>Kalkulator Luas Lingkaran</h1>
                <h2>Kalkulator menggunakan pi: 3,14</h2>
                <label>Jari-jari: </label>
                <input type="number" value={jari} onChange={handleJariChange} />
                <br />
                <button onClick={handleHitungLuas}>Hitung Luas</button>
                <br />
                {luas !== null && <p>Luas Lingkaran: {luas}cm</p>}
            </div>
            <div>
                <h2>Kalkulator menggunakan pi: 22/7</h2>
                <label>Jari-jari: </label>
                <input type="number" value={jari2} onChange={handleJari2Change} />
                <br />
                <button onClick={handleHitungLuas}>Hitung Luas</button>
                <br />
                {luas2 !== null && <p>Luas Lingkaran: {luas2}cm</p>}
            </div>
            <br />
            <br />
            <br />
            <h1>Kalkulator keliling Lingkaran</h1>
            <label>Jari-jari: </label>
            <input type="number" value={jari_jari} onChange={handleJari_jariChange} />
            <br />
            <button onClick={handleHitungKeliling}>Hitung Keliling</button>
            <br />
            {keliling !== null && <p>Keliling Lingkaran: {keliling}cm</p>}
        </div>
    );
}
export default LuasLingkaran;