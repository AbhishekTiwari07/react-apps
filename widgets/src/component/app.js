import React from 'react';
import Accordion from './accordion';
import Search from './search'

const items = [
    {
        title:"What is React?",
        content : "React is a Javascript Framework"
    },
    {
        title:"What is React2?",
        content : "React2 is a Javascript Framework"
    },
    {
        title:"What is React3?",
        content : "React3 is a Javascript Framework"
    }
]
// <Accordion items={items}/>
const App = ()=>{

    return(
        <div>
            <Search />
        </div>
    )
}

export default App
