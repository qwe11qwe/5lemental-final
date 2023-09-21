import pb from '@/api/pocketbase';
import { useState, useEffect } from "react";
import { getPbImageURL } from "@/utils/getPbImageURL"
import useAuthStore from '@/store/auth';

function IngredientButtonSero () {
  // 내 재료 정보
  const [myIngredient, setMyIngredient] = useState([]);

  const { user } = useAuthStore();
  console.log(user);

  useEffect(() => {
    async function fetchList() {
      try {
        // PocketBase 에서 나의 재료 정보 불러오기
        const loginUser = await pb.collection('users').getOne(user, {
          expand: 'ingredients_keys',
        });
        console.log(
          'expand.ingredients_keys\n',
          loginUser.expand.ingredients_keys
        );
        setMyIngredient(loginUser.expand.ingredients_keys);
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchList();
  }, []);

  return(
    <div className='w-full max-w-[820px] m-auto'>
      <div className='flex ml-5 gap-2'>
        {myIngredient.map((item) => (
          <div
            className="w-[78px] h-[95px] -bg--fridge-bg-gray border-none rounded-md flex flex-col justify-center self-center"
            key={item.id}>
            <div className="w-[62px] h-[62px] items-center mx-2">
              <img
                src={getPbImageURL(item,'photo')}
                alt={item.name}
                className='w-full h-full'
              />
            </div>
          <span className="font-dohyeon text-[12px] text-center mt-[6px]">
            {item.name}
          </span>
        </div>
        ))}
      </div>
    </div>
  )
}

export default IngredientButtonSero