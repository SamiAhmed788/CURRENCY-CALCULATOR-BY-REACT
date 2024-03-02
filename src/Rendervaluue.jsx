import './App.css'


export const RenderRupees =({convertedRupees})=>{
 console.log(convertedRupees , "----------->");
 
    return(
      <div style={{backgroundColor:"black",color:"white", marginTop:"60px"}}>
  <p style={{fontSize:"45px"}}>👇</p>  
  <p>{convertedRupees.userAmount}<span className="heading" >{convertedRupees.fromCountryCode}</span> ={convertedRupees.convertedAmount} <span  className="heading"  >{convertedRupees.toCurrencyCode}</span></p>
  <p>1 <span className="heading" >{convertedRupees.fromCountryCode} </span>= {convertedRupees.oneToCurrency} {convertedRupees.toCurrencyCode}</p>

      </div>
    )
    
    }