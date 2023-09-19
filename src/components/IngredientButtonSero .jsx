import pb from '@/api/pocketbase';
import { useState, useEffect } from "react";
import { getPbImageURL } from "@/utils/getPbImageURL"


function IngredientButtonSero () {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchList() {
      try {
        const list = await pb.collection('ingredients').getFullList();
        setData(list)
        console.log(list);
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchList();
  }, []);

  return(
    <div className='flex gap-2'>
      {data.map((item) => (
        <div
          className="w-[78px] h-[95px] -bg--fridge-secondary border-none rounded-md flex flex-col justify-center self-center pt-[6px]"
          key={item.id}>
          <div className="w-[62px] h-[62px] items-center">
            <img
              src={getPbImageURL(item,'photo')}
              alt={item.name}
              className=''
            />
          </div>
        <div className="font-dohyeon text-center">{item.name}</div>
      </div>
      ))}
    </div>
  )
}

export default IngredientButtonSero