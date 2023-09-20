import pb from '@/api/pocketbase';
import { useState, useEffect } from "react";
import { getPbImageURL } from "@/utils/getPbImageURL"


function IngredientButtonSero () {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchList() {
      try {
        const list = await pb.collection('ingredient').getFullList();
        setData(list.map((data)))
        console.log(data)
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchList();
  }, []);

  return(
    <div className="w-[78px] h-[95px] -bg--fridge-secondary border-none rounded-md flex flex-wrap justify-center pt-[6px]">
      <div className="w-[62px] h-[62px] bg-white" key={data}>
          <img
            src={getPbImageURL(data,'photo')}
            alt="" />
      </div>
      <div className="font-dohyeon">토마토</div>
    </div>
  )
}

export default IngredientButtonSero