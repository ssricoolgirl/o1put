import { useState } from 'react';
const Content = () => {
    const [name, setName] = useState('Som');
    const [count, setcount]= useState(0);
    const handleNameChange = () =>{
        const names=['Som','Pravi','Solanki'];
        const int= Math.floor(Math.random()*3);
    setName(names[int]);
    }

    const handleClick = () => {
        setcount(count + 1)
        console.log(count)

    }

    const handleClick2 = (name) => {
        console.log(`${name} was clicked`)

    }
    return(
        <main>
            <p onDoubleClick={handleClick}>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClick}>Click1</button>
            <button onClick={handleClick2}>Click2</button>
            
                
        </main>
    )
}
export default Content;