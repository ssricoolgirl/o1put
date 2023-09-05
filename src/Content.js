import { useState } from 'react';
const Content = () => {
    const [name, setName] = useState('Som');
    const [count, setcount]= useState(0);
    const [items, setItems]= useState([
        {
            id:1 ,
            checked: false, 
            name:"Eggs",
            price : 25,
            item: "Protein"
            },
        {
            id:2,
            checked: false,
            name: "Chicken",
            price :34.98,
            item:"Meat"
        }
    {
        id:3,
        checked:false,
        price:67.99,
        item:'Dairy',
        name:'Butter'
    }
    ])
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
            <ui>
                {items.map((item)=>(
                    <li className='item' key={item.id}>
                        <input 
                        type="checkbox"
                        checked={item.checked}
                        />
                        <label>{item.item}</label>
                        <button>Delete</button>
                    </li>))}
            </ui>

            <button onClick={handleNameChange}>Change Name</button>
            <button onClick={handleClick}>Click1</button>
            <button onClick={handleClick2}>Click2</button>
            
                
        </main>
    )
}
export default Content;