// import './styles/tailwind.css';
import PocketBase from 'pocketbase';
import { useEffect, useState } from 'react';
import IngredientItemGaro from './ingredient-item-garo';

const url = 'https://orimental-final.pockethost.io';
const client = new PocketBase(url);

function IngredientButtonGaro(){
    
    const [data,setData] = useState(null);
    const [status, setStatus] = useState('pending');

    useEffect(()=>{
        setStatus('loading');
        async function getIngredientList(){
            const ingredientList = await client.collection('ingredients').getFullList();
            setData(ingredientList);
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
                return <IngredientItemGaro key={ingredient.id} item={ingredient} />
                // return <li key={ingredient.id} className='w-32 h-20 bg-gray-400 rounded-lg text-center  '>{ingredient.photo}</li>
            })}</ul>
        </div>
    )

}

export default IngredientButtonGaro;