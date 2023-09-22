import { getPbImageURL } from '@/utils/getPbImageURL';
import Likebutton from './likeButton/Likebutton';
import client from '@/api/pocketbase';

export default function MenuImgeitem({ item, user, stat }) {
  async function handle(stat, item, user) {
    //빼주기
    if (stat == 1) {
      // 서버 상태 업데이트
      // console.log('stat은 1 입니다.');
      try {
        await client.collection('users').update(user.id, {
          'ingredients_keys-': item.id,
        });
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
      } catch (error) {
        console.error(error);
      }
    }
  }

  // console.log(item);

  return (
    <li
      key={item.id}
      onClick={() => {
        handle(stat, item, user);
      }}
    >
      <div className="my-3 m-4  bg-gray-200 rounded-md h-24 overflow-auto">
        <figure className="w-20 h-2 ">
          <img
            src={getPbImageURL(item, 'photo')}
            alt=""
            className="w-16 h-16 mx-4 my-4 float-left rounded-md"
          />
          {/* <p src={getPbImageURL(item, 'description')} alt=""></p> */}
        </figure>
        <span className="bg-white text-xs rounded-md mt-16 font-dohyeon ">
          {item.name}
        </span>
        <span className="grid text-xs mt-2 mr-2">{item.summary}</span>
        <Likebutton />
      </div>
    </li>
  );
}
