import React, {useState, useEffect} from 'react';
import "./App.css";

export default function App() {
  
  //States
  const [real, setReal] = useState();
  const handleRealChange = (e) => {
    setReal(e.target.value);
  }

  const [tax, setTax] = useState();
  const handleTaxChange = (e) => {
    setTax(e.target.value);
  }

  const [dolar, setDolar] = useState();
  
  var today = new Date();
  var formated_date = today.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

  //Functions
  const handleCalculaClick = () => {
    var conversion = (real/tax).toFixed(2)
    setDolar(conversion)
  }

  const handleCleanClick =() =>{
    setReal('')
    setDolar('')
    setTax('')
  }

  return(
    <div className='container'>
      <h1>Conversor de Câmbio (Real - Dólar)</h1>
      <h3>Data da Cotação: {formated_date} </h3>
      <>
        <label for="realValue" >Valor em Real </label> 
        <input id="realValue" className='inputStyle' value={real} type="number" onChange={handleRealChange}/> 
        <label for="tax" >Câmbio </label> 
        <input id = "tax" className='inputStyle' value={tax} type="number" onChange={handleTaxChange}/> <br/><br/>
        <button className='buttonStyle' onClick={handleCalculaClick} >Calcular</button> <br/>
        <button className='buttonStyle2' onClick={handleCleanClick} >Limpar</button><br/><br/>
        <label for="dolarValue">Valor em Dólar </label> <br/>
        <input id="dolarValue" className='inputStyle' readOnly value ={dolar} type="number" placeholder='U$:'/> <br/> <br/>
      </>
    </div>
  );
}