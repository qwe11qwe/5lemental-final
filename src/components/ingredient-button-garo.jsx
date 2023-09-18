// import './styles/tailwind.css';
import PocketBase from 'pocketbase';
import { useEffect, useState } from 'react';
import IngredientItemGaro from './ingredient-item-garo';
import useStore from '@/store/storeState';

const url = 'https://orimental-final.pockethost.io';
const client = new PocketBase(url);

function IngredientButtonGaro(ingredientName) {
  // 사용자 정보 상태
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState('pending');

  // Zustand 상태 및 업데이트 함수
  const cart = useStore((state) => state.cart);
  const setCart = useStore((state) => state.setCart);

  useEffect(() => {
    setStatus('loading');

    async function getIngredientList() {
      const ingredientList = await client
        .collection('ingredients')
        .getFullList();

      const userList = await client.collection('users').getFullList();

      // 사용자 정보 추출
      const user = userList[0];

      // ingredientList 배열 순환 및 Zustand의 cart 상태 업데이트
      setCart(
        ingredientList.map((ingredient) => {
          let hasId;
          for (const id of user.ingredients_keys) {
            hasId = id === ingredient.id;
            if (hasId) break;
          }
          return { ...ingredient, stat: hasId ? 1 : 0 };
        })
      );

      // 사용자 정보 업데이트
      setUser(user);
      setStatus('pending');
    }

    getIngredientList();
  }, [setCart]);

  if (status === 'loading') {
    return <div>loading</div>;
  }


if(ingredientName == ''){
    return (
        <div>
          <ul className="flex flex-wrap justify-around">
            {cart?.map((ingredient) => {
                return(
                <IngredientItemGaro
                key={ingredient.id}
                item={ingredient}
                user={user}
                stat={ingredient.stat}
                />
            )
                
            })}
          </ul>
        </div>
      );
}
else{
    return (
        <div>
          <ul className="flex flex-wrap justify-around">
            {cart?.map((ingredient) => {
                //! 여기에 props를 이용해 조건부 렌더링으로 진행할 예정입니다
                return(
                <IngredientItemGaro
                key={ingredient.id}
                item={ingredient}
                user={user}
                stat={ingredient.stat}
                />
            )
                
            })}
          </ul>
        </div>
      );
}
  
}

/* if(ingredientName.ingredientName == ''){
        console.log(111);
        return(
            <div> 
                <ul className="flex flex-wrap justify-around">{data?.map((ingredient)=>{
                    return <IngredientItemGaro key={ingredient.id} item={ingredient} user={data3} stat={ data2.indexOf(ingredient.id) !== -1 ? 1 : 0 } 
                    />
                    // return <li key={ingredient.id} className='w-32 h-20 bg-gray-400 rounded-lg text-center  '>{ingredient.photo}</li>
                })}</ul>
            </div>
        )
    }
    else{
        return(
            <div> 
                <ul className="flex flex-wrap justify-around">{data?.map((ingredient)=>{
                    return <IngredientItemGaro key={ingredient.id} item={ingredient} user={data3} stat={ data2.indexOf(ingredient.id) !== -1 ? 1 : 0 } 
                    />
                    // return <li key={ingredient.id} className='w-32 h-20 bg-gray-400 rounded-lg text-center  '>{ingredient.photo}</li>
                })}</ul>
            </div>
        )
    } */

export default IngredientButtonGaro;
