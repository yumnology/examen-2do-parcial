import React, {useEffect, useState} from 'react'

export const Calculator = () => {
    const [divisa1, setDivisa1] = useState('MXN')
    const [divisa2, setDivisa2] = useState('MXN')
    const [conversion, setConversion] = useState('')
    const [cantidad1, setCantidad1] = useState('')
    const cantidad = 0


    // const onChangeUser = (e) => {
    //     setUser(e.target.value)
    // }
    // const onChangePassword = (e) => {
    //     setPassword(e.target.value)
    // } TAREA: detectar password y contraseña a ver si son
    

    const onChange = (e) => {
    
        if(e.target.name === 'divisa1'){
            setCantidad1(e.target.value)
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
              USD: 0.07, 
              EUR: 0.04,
              BTC: 0.0000016, 
              ETH: 0.0001, 
              DOGE: 0.5, 
            },
            USD: {
              MXN: 18, 
              EUR: 0.85,
              BTC: 0.000030, 
              ETH: 0.00056, 
              DOGE: 15.18, 
            },
            EUR: {
              MXN: 25, 
              USD: 1.18,
              BTC: 0.000031, 
              ETH: 0.00060, 
              DOGE: 16.07, 
            },
            BTC: {
              MXN: 1000000, 
              USD: 0.00005, 
              EUR: 0.00004, 
              ETH: 19.09, 
              DOGE: 512935.65, 
            },
            ETH: {
              MXN: 10000, 
              USD: 0.0005, 
              EUR: 0.0004, 
              BTC: 0.01, 
              DOGE: 28981.43, 
            },
            DOGE: {
              MXN: 2, 
              USD: 0.0001, 
              EUR: 0.00008, 
              BTC: 0.00002, 
              ETH: 0.000037, 
            },
          }
          const tasaDeCambio = tasasDeCambio[divisa1][divisa2];
          const resultado = cantidad1 * tasaDeCambio;
          setConversion(resultado);
        }
          


  return (
    <>
    <form action=''>
        <p>Conversion: {conversion}</p>
        <p>Cantidad: {cantidad1}</p>
        <div>
            
            <input type="number" name='divisa1' id='div1' 
            value={cantidad1} 
            
            onChange={onChange}>

            </input>
        </div>
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

    

        </div>
        

        <button type='button' onClick={convertirDivisas}>Convertir</button>
    </form>
    </>
  )
}
