import { getPbImageURL } from '@/utils/getPblmageURL';
import client from '@/api/pocketbase';

export default function cookstItem({ item, user, stat }) {
  async function handle(stat, item, user) {
    //빼주기
    if (stat == 1) {
      // 서버 상태 업데이트
      // console.log('stat은 1 입니다.');
      try {
        await client.collection('users').update(user.id, {
          'ingredients_keys-': item.id,
        });
        // 앱 상태 업데이트
        // Zustand 사용자의 재료 변경사항을 화면에 반영
        // 재료 목록 삭제
        // removeUserIngredient(item.id);
      } catch (error) {
        console.error(error);
      }
    }
    //더해주기
    else if (stat == 0) {
      // console.log('stat은 0 입니다.');
      try {
        await client.collection('users').update(user.id, {
          'ingredients_keys+': item.id,
        });
        // 앱 상태 업데이트
        // Zustand 사용자의 재료 변경사항을 화면에 반영
        // 재료 목록 추가
        // addUserIngredient(item.id);
      } catch (error) {
        console.error(error);
      }
    }
  }

  console.log(item);

  return (
    <li
      key={item.id}
      onClick={() => {
        handle(stat, item, user);
      }}
    >
      <button alt="/" className="bg-slate-200 rounded-md ">
        <figure className="w-16 h-16 object-cover float-left ">
          <img src={getPbImageURL(item, 'photo')} alt="" />
          {/* <p src={getPbImageURL(item, 'description')} alt=""></p> */}
        </figure>
        <div className="bg-red-600">
          <span className="bg-white text-xs rounded-md grid w-max">
            {item.name}
          </span>
          <span className="bg-blue-700 text-xs float-left truncate ">
            {item.description}
          </span>
        </div>
      </button>
    </li>
  );
}
