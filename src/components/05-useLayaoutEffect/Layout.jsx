import { useCounter, useFetch } from "../../hooks";
import {LoadingQuate, Quate} from "../03-example"


export const Layout = () => {

  const { increment, state, decrement } = useCounter(1)

const { data, isLoading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`);

const { author, quote } = !!data && data[0];

return (
  <>
      <h1 className="text-center mt-4">Hunter x Hunter</h1>
      <hr/>
    <div className="container">

          {(isLoading)
          ? <LoadingQuate/>
          : <Quate author={author} quote={quote} />
          }

      <button 
      onClick={()=>increment(1)}
      disabled={isLoading}
      className="btn btn-primary"
      >
        Next Quote
      </button>
      <button 
      onClick={()=>decrement(1)}
      disabled={(state>1)?isLoading:true}
      className="btn btn-primary mx-4"
      >
        Prev Quote
      </button>

    </div>
  </>
  )
}
