import React, {useState} from 'react'
import './Grp1.css'

export const Grp1 = () => {
    // using constant function and statement
    const [statement, setStatement] = useState (['Today is Tuesday',
    'My name is Samsal', 'Welcome to Software Engineering']);
    const [pages, setPages] = useState (0)
    
    const handleUpClick = () => {
        console.log('the next');
        setPages(pages + 1)
    }
    
    const handleDownClick = () => {
        if (pages < 1) {
            setPages(statement.length)
            
        }
        else {
            setPages(pages - 1)  
        }
          
    
    }
    
    return (
        <div className = "mycontainer"> 
        
        <div>
            {statement[pages % statement.length]}
            <button onClick = {handleUpClick}>Next</button>
            <button onClick= {handleDownClick}>Prev</button>
            
        </div> </div>
    )
}

export default Grp1