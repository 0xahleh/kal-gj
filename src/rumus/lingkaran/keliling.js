import { useState } from "react";

const RumusLingkaranKeliling = () => {
    const[jari_jari, setJari_jari] = useState('');
    const [keliling, setKeliling] = useState(null);

    const handleJari_jariChange = (e) => {
        setJari_jari(e.target.value);
    };
    const handleHitungKeliling = () => {
        const kelilingResult = 2 * 3.14 * parseInt(jari_jari);
        setKeliling(kelilingResult);
    };
    return {
        jari_jari,
        keliling,
        handleJari_jariChange,
        handleHitungKeliling,
    };
}

export default RumusLingkaranKeliling;