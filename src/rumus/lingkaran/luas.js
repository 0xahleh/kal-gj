import { useState } from "react";

const RumusLingkaran = () => {
    const [jari, setJari] = useState('');
    const [jari2, setJari2] = useState('');
    const [luas, setLuas] = useState(null);
    const [luas2, setLuas2] = useState(null);

    const handleJariChange = (e) => {
        setJari(e.target.value);
    }
    const handleJari2Change = (e) => {
        setJari2(e.target.value);
    };

    const handleHitungLuas = () => {
        const luasResult = 3.14 * parseInt(jari) * parseInt(jari);
        const luas2Result = 22 / 7 * parseInt(jari) * parseInt(jari);
        setLuas(luasResult);
        setLuas2(luas2Result);
    };

    return {
        jari,
        jari2,
        luas,
        luas2,
        handleJari2Change,
        handleJariChange,
        handleHitungLuas,
    };
};

export default RumusLingkaran;