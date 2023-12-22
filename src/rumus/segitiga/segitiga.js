import { useState } from "react";


const useSegitigaCalculatorLogic = () => {
  const [alas, setAlas] = useState('');
  const [tinggi, setTinggi] = useState('');
  const [luas, setLuas] = useState(null);

  const handleAlasChange = (e) => {
    setAlas(e.target.value);
  };

  const handleTinggiChange = (e) => {
    setTinggi(e.target.value);
  };

  const handleHitungLuas = () => {
    const luasResult = 0.5 * parseInt(alas) * parseInt(tinggi);
    setLuas(luasResult);
  };

  return {
    alas,
    tinggi,
    luas,
    handleAlasChange,
    handleTinggiChange,
    handleHitungLuas,
  };
};

export default useSegitigaCalculatorLogic;
