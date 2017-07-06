import React from 'react'
let Counter = ({counter = 'yyy'}) =>(
 <h1>counter-{counter}</h1>
)

//Counter = connect()(Counter)
export default Counter
