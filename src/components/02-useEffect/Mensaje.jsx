import { useEffect, useState } from 'react'

export const Mensaje = ({children}) => {

  const [coords, setCoords] = useState({ x:0, y:0 })

  useEffect(() => {

    const onMouseMove = ( {x, y} ) =>{
      setCoords({ x, y })
      console.log(coords);
    }
    window.addEventListener('mousemove', onMouseMove )
    return () => {
    window.removeEventListener('mousemove', onMouseMove )
    }
  }, [])
  

  return (
    <>
    <h3>{children}</h3>
    <div> { JSON.stringify(coords) } </div>
    </>
  )
}
