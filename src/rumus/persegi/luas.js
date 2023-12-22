import { useState } from "react";

const RumusPersegiLuas = () => {
    const [sisi, setSisi] = useState('');
    const [luas, setLuas] = useState(null);

    const handleSisiChange = (e) => {
        setSisi(e.target.value);
    }

    const handleHitungLuas = () => {
        const luasResult = parseInt(sisi) * parseInt(sisi);
        setLuas(luasResult);
    }

    return {
        sisi,
        luas,
        handleSisiChange,
        handleHitungLuas,
    };
}

export default RumusPersegiLuas;