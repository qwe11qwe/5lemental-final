// import './styles/tailwind.css';
import PocketBase from 'pocketbase';
import { useEffect, useState } from 'react';
import IngredientItemGaro from './ingredient-item-garo';

const url = 'https://orimental-final.pockethost.io';
const client = new PocketBase(url);

function IngredientButtonGaro(){
    
    const [data,setData] = useState(null);
    const [data2,setData2] = useState(null);
    const [data3,setData3] = useState(null);
    const [status, setStatus] = useState('pending');

    useEffect(()=>{
        setStatus('loading');
        async function getIngredientList(){
            const ingredientList = await client.collection('ingredients').getFullList();
            const userList = await client.collection('users').getFullList();
            setData(ingredientList);
            setData2(userList[0].ingredients_keys);
            setData3(userList[0]);
            setStatus('pending');
        }

        getIngredientList();
    },[])

    if(status === 'loading'){
        return <div>loading</div>
    }
    return(
        <div> 
            <ul>{data?.map((ingredient)=>{
                return <IngredientItemGaro key={ingredient.id} item={ingredient} user={data3} stat={ data2.indexOf(ingredient.id) !== -1 ? 1 : 0 } 
                />
                // return <li key={ingredient.id} className='w-32 h-20 bg-gray-400 rounded-lg text-center  '>{ingredient.photo}</li>
            })}</ul>
        </div>
    )

}

export default IngredientButtonGaro;