import { memo } from "react"


export const Small = memo(({ value }) => {
  return (
    <><span>{ value }</span></>
  )
})
