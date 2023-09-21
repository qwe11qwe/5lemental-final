import pb from '@/api/pocketbase';
import { useState, useEffect } from "react";
import { getPbImageURL } from "@/utils/getPbImageURL"
import useAuthStore from '@/store/auth';

function IngredientButtonSero () {
  // 전체 재료 정보
  const [data, setData] = useState([]);
  // 내 재료 정보
  const [myIngredient, setMyIngredient] = useState([]);

  const { user } = useAuthStore();
  console.log(user);

  useEffect(() => {
    async function fetchList() {
      try {
        // 전체 재료 정보 불러오기
        const list = await pb.collection('ingredients').getFullList();
        setData(list)

        // PocketBase 에서 나의 재료 정보 불러오기
        const myList = await pb
        .collection('users')
        .getFirstListItem( { filter: `id = "${user}"` });
        console.log(myList)
        setMyIngredient(myList.items[0].ingredients_keys) 
        console.log(myIngredient);
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchList();
  }, []);

  return(
    <div className='flex gap-2 max-w-[820px] m-auto w-full'>
      {data.map((item) => (
        <div
          className="w-[78px] h-[95px] -bg--fridge-secondary border-none rounded-md flex flex-col justify-center self-center"
          key={item.id}>
          <div className="w-[62px] h-[62px] items-center mx-2">
            <img
              src={getPbImageURL(item,'photo')}
              alt={item.name}
              className='w-full h-full'
            />
          </div>
        <div className="font-dohyeon text-[12px] text-center mt-[6px]">{item.name}</div>
      </div>
      ))}
    </div>
  )
}

export default IngredientButtonSero