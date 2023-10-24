import React, {useEffect, useState} from 'react'

export const Calculator = () => {
    const [divisa1, setDivisa1] = useState('')
    const [divisa2, setDivisa2] = useState('')
    const [conversion, setConversion] = useState('')
    const [cantidad1, setCantidad1] = useState('')
    const [cantidad2, setCantidad2] = useState('')

    // const onChangeUser = (e) => {
    //     setUser(e.target.value)
    // }
    // const onChangePassword = (e) => {
    //     setPassword(e.target.value)
    // } TAREA: detectar password y contraseña a ver si son
    

    const onChange = (e) => {
    
        if(e.target.name === 'divisa1'){
            setCantidad1(e.target.value)
            
        }else if(e.target.name === 'divisa2'){
            setCantidad2(e.target.value)
            
        }
        console.log("Afuera del if")
    }

    const OnChangeDivisa = (e) => {
        if(e.target.name === 'divisa1'){
            setDivisa1(e.target.value)
            
        }else if(e.target.name === 'divisa2'){
            setDivisa2(e.target.value)
            
        }
        console.log("Afuera del if")

    }


    const convertirDivisas = () => {
    
        const tasasDeCambio = {
            MXN: {
              USD: 0.05, 
              EUR: 0.04,
              BTC: 0.000001, 
              ETH: 0.0001, 
              DOGE: 0.5, 
            },
            USD: {
              MXN: 20, 
              EUR: 0.85,
              BTC: 20000, 
              ETH: 2000, 
              DOGE: 10000, 
            },
            EUR: {
              MXN: 25, 
              USD: 1.18,
              BTC: 25000, 
              ETH: 2500, 
              DOGE: 12500, 
            },
            BTC: {
              MXN: 1000000, 
              USD: 0.00005, 
              EUR: 0.00004, 
              ETH: 100, 
              DOGE: 50000, 
            },
            ETH: {
              MXN: 10000, 
              USD: 0.0005, 
              EUR: 0.0004, 
              BTC: 0.01, 
              DOGE: 5000, 
            },
            DOGE: {
              MXN: 2, 
              USD: 0.0001, 
              EUR: 0.00008, 
              BTC: 0.00002, 
              ETH: 0.0002, 
            },
          }}
          


  return (
    <>
    <form action=''>
        <p>Conversion: {cantidad1}</p>
        <div>
            <label htmlFor='tipo1'>Divisa 1</label>
            <select value={divisa1} name='divisa1' onChange={OnChangeDivisa}>
            <option value="MXN">MXN</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
            <option value="DOGE">DOGE</option>
            </select>
            <input type="number" name='divisa1' id='div1' 
            value={divisa1} 
            
            onChange={onChange}>

            </input>
        </div>
        <div>
            <label htmlFor='tipo2'>Divisa 2</label>
            <select value={divisa2} name='divisa2' onChange={OnChangeDivisa}>
            <option value="MXN" setTipo2>MXN</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="BTC">BTC</option>
            <option value="ETH">ETH</option>
            <option value="DOGE">DOGE</option>
            </select>
            <input type="number" name='divisa2' id='div2'
            value={divisa2}
            onChange={onChange}
            ></input>

    

        </div>
        

        <button type='OnClick'>Convertir</button>
    </form>
    </>
  )
}