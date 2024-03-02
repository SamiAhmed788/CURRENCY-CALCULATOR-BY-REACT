import { useEffect, useRef, useState } from 'react'

import './App.css'
import { DataRenderingFrom } from './datarefer.jsx'
import { DataRenderingTo } from './datareferto.jsx'
import Answer from './Components/answer.jsx'

function App() {

  const AMOUNT = useRef("")
  const Firstinput = useRef("")
  const secondinput = useRef("")
  const [istrue, setistrue] = useState(false)
  const [available, setavailable] = useState(false)
  const [data, setdata] = useState([])
  const [currencydata, setCurrencydata] = useState([])
  const [Singledata, setSingledata] = useState()


  const currencynames =[  "USD",
  "AED",
"AFN",
"ALL",
"AMD",
"ANG",
"AOA",
"ARS",
"AUD",
"AWG",
"AZN",
"BAM",
"BBD",
"BDT",
"BGN",
"BHD",
"BIF",
"BMD",
"BND",
"BOB",
"BRL",
"BSD",
"BTN",
"BWP",
"BYN",
"BZD",
"CAD",
"CDF",
"CHF",
"CLP",
"CNY",
"COP",
"CRC",
"CUP",
"CVE",
"CZK",
"DJF",
"DKK",
"DOP",
"DZD",
"EGP",
"ERN",
"ETB",
"EUR",
"FJD",
"FKP",
"FOK",
"GBP",
"GEL",
"GGP",
"GHS",
"GIP",
"GMD",
"GNF",
"GTQ",
"GYD",
"HKD",
"HNL",
"HRK",
"HTG",
"HUF",
"IDR",
"ILS",
"IMP",
"INR",
"IQD",
"IRR",
"ISK",
"JEP",
"JMD",
"JOD",
"JPY",
"KES",
"KGS",
"KHR",
"KID",
"KMF",
"KRW",
"KWD",
"KYD",
"KZT",
"LAK",
"LBP",
"LKR",
"LRD",
"LSL",
"LYD",
"MAD",
"MDL",
"MGA",
"MKD",
"MMK",
"MNT",
"MOP",
"MRU",
"MUR",
"MVR",
"MWK",
"MXN",
"MYR",
"MZN",
"NAD",
"NGN",
"NIO",
"NOK",
"NPR",
"NZD",
"OMR",
"PAB",
"PEN",
"PGK",
"PHP",
"PKR",
"PLN",
"PYG",
"QAR",
"RON",
"RSD",
"RUB",
"RWF",
"SAR",
"SBD",
"SCR",
"SDG",
"SEK",
"SGD",
"SHP",
"SLE",
"SLL",
"SOS",
"SRD",
"SSP",
"STN",
"SYP",
"SZL",
"THB",
"TJS",
"TMT",
"TND",
"TOP",
"TRY",
"TTD",
"TVD",
"TWD",
"TZS",
"UAH",
"UGX",
"UYU",
"UZS",
"VES",
"VND",
"VUV",
"WST",
"XAF",
"XCD",
"XDR",
"XOF",
"XPF",
"YER",
"ZAR",
"ZMW",
"ZWL"]


useEffect(()=>{

async function  rupessonvert(){

  await fetch("https://v6.exchangerate-api.com/v6/0ff64c606cb39bb026c371e0/latest/USD ")
  .then(res =>res.json()).then((data)=>{
    console.log(data);
    setSingledata(data)
  })
  
}

rupessonvert()




},[])

const calcutecurrency =()=>{

  const fromData = Firstinput.current.value
  const ToData = secondinput.current.value
const amountdata = AMOUNT.current.value

console.log(fromData , "----------->");
console.log(ToData , "----------->");
console.log(amountdata , "----------->");
console.log(Singledata , "------------->");

if (amountdata.value === 0) {
  alert("please full all inputs")
}else{

  let fromExchangeRate = Singledata.conversion_rates[fromData];
  let ToExchangeRate = Singledata.conversion_rates[ToData]
  let convertedAmount = (amountdata / fromExchangeRate) * ToExchangeRate;

  console.log(fromExchangeRate , "----------->");
console.log(ToExchangeRate , "----------->");
console.log(convertedAmount , "------------->");

const DataAdd = [...currencydata]

DataAdd.unshift({
  fromCountryCode: fromData,
  toCurrencyCode: ToData,
  userAmount: amountdata,
  oneFromCurrency: `${fromExchangeRate}`,
  oneToCurrency: `${ToExchangeRate}`,
  convertedAmount,  
})
setCurrencydata(DataAdd)
setavailable(!available)


}

}
const deletecurrency =()=>{
  setCurrencydata([])
  setavailable(!available)
}  
return (
    <>

<div style={{width:"600px", height:"800px",backgroundColor:"black",color:"white",textTransform:"capitalize",fontSize:"20px",borderRadius:"20px",border:"8px solid gold"}}>
  <p style={{color:"gold",fontSize:"40px"}} >Currency Converter</p>
  <p>value to convert</p>
  <p style={{fontSize:"45px"}}>👇</p>  
  <div style={{display:"flex", justifyContent:"space-between", flexDirection:"column",width:"100%"}}>
         <input ref={AMOUNT} className="w-15 hello" type="Number" placeholder='👉'/>
         <p> from </p>

         <select  name="" id="rupees1" ref={Firstinput} className="hello"  style={{width:"40%", marginLeft:"30%", borderRadius:"15px"}}>
           {
            currencynames?.map((val, ind)=> <DataRenderingFrom key={ind} data={val}/>)
           }
        </select>

         <p> To </p>

         <select name="" id="rupees1" ref={secondinput} className="hello"  style={{width:"40%", marginLeft:"30%", borderRadius:"15px"}}>
           {
            currencynames?.map((val, ind)=> <DataRenderingTo key={ind} data={val}/>)
           }
        </select>

         

         </div>

         <Answer available={available} setAvailable={setavailable} currencydata={currencydata} setCurrencyData={setCurrencydata}/>

          <div style={{marginTop:"100px", display:"flex", justifyContent:"space-around"}}>
         <button className="btn btn-outline-warning" onClick={()=> calcutecurrency()} style={{border:"2px solid #afafaf", padding:"5px 10px",fontWeight:"600", borderRadius:"7px"}}>Calculate</button>
         <button className="btn btn-outline-danger" onClick={()=> deletecurrency()} style={{border:"2px solid #afafaf", padding:"5px 10px",fontWeight:"600", borderRadius:"7px"}}>clear </button>
         </div>
         
    

         </div>    
    </>
  )
} 

export default App
