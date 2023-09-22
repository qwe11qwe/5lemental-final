import pb from "@/api/pocketbase";
import { useState, useEffect } from "react";
import { getPbImageURL } from "@/utils/getPbImageURL"
import { Link } from "react-router-dom";


function MenuItem() {
  // 전체 메뉴 정보
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function fetchList() {
      try {
        // 전체 메뉴 정보 불러오기
        const list = await pb.collection('cooks').getFullList();
        setMenu(list)
        console.log(list)
      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchList();
  }, []);

  return (
    <div className="flex gap-5 flex-wrap">
      {menu.map((item) => (
        <Link
          to="/recipedetail"
          key={item}
          className="w-[133px] h-[157px]"
        >
        <img
          src={getPbImageURL(item,'photo')}
          alt="{item.name}"
          className="w-full h-[131px] rounded-[10px]"
        />
        <p className="inline-block rounded-[10px] mt-[5px] px-[10px] pt-[5px] pb-[4px] -bg--fridge-skyblue font-dohyeon text-[11px]">
          {item.name}
        </p>
        </Link>
      ))}
    </div>
  );
}

export default MenuItem;