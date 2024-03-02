import { RenderRupees } from "../Rendervaluue";



const Answer = ({currencydata, available, setavailable}) => {
    return(
        <>
        {
          available &&  currencydata?.map((data, index) => <RenderRupees key={index} convertedRupees={data}/>)

        }
        </>
    )
}
export default Answer;