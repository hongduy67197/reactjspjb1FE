import { React, useContext } from 'react'
import context from '../componentContext/context'


function TestChild() {
  let datachild1 = useContext(context)
  console.log(datachild1)
  return (

    <div>
      <h1>CHILD 1</h1>
      <h1>{datachild1}</h1>
     
    </div>
  )
}

export default TestChild