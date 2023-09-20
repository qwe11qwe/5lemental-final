import { getPbImageURL } from '@/utils/getPbImageURL';
import PocketBase from 'pocketbase';
import useStore from '../store/storeState';

const url = 'https://orimental-final.pockethost.io';
const client = new PocketBase(url);

//? item : 재료 정보 출력
//? user : 현재 회원 정보 출력(매번 출력되면 너무 소모값 클거같은데 처음 한번만 가져오게 할 수는 없을까)
//? stat : item재료를 user회원이 가지고 있는지 정보(가지고 있으면 1)
export default function IngredientItemGaro({ item, user, stat }) {
  const changeStateOfCartItem = useStore(
    (state) => state.changeStateOfCartItem
  );

  async function handle(handleStat) {
    try {
      await client.collection('users').update(user.id, {
        [`ingredients_keys${handleStat === 0 ? '+' : '-'}`]: item.id,
      });

      changeStateOfCartItem(item.id, handleStat ? 0 : 1);

      // handleStat === 0 ? removeUserIngredient(item.id) : addUserIngredient(item.id)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    //! 버튼으로 바꿔주기. 지금은 접근성 이슈 있음
    stat ? (
      <li
        key={item.id}
        className="bg-sky-300 w-32 h-14 rounded-xl flex flex-row items-center my-2"
        onClick={() => {
          console.log('stat : ', stat);
          handle(stat);
        }}
      >
        <figure>
          <img
            src={getPbImageURL(item, 'photo')}
            className="w-12 h-12"
            alt=""
          />
          {/* <span>{item.name}</span> */}
        </figure>
        <div className="w-20 w- flex flex-row justify-center">
          <span>{item.name}</span>
        </div>
      </li>
    ) : (
      <li
        key={item.id}
        className="-bg--fridge-gray w-32 h-14 rounded-xl flex flex-row items-center my-2"
        onClick={() => {
          console.log('stat : ', stat);
          handle(stat);
        }}
      >
        <figure>
          <img
            src={getPbImageURL(item, 'photo')}
            className="w-12 h-12"
            alt=""
          />
          {/* <span>{item.name}</span> */}
        </figure>
        <div className="w-20 w- flex flex-row justify-center">
          <span>{item.name}</span>
        </div>
      </li>
    )
  );
}

// export default function IngredientItemGaro({ item , user ,  stat }){
//     const cart = useStore((state) => state.cart);
//     const changeState = useStore((state) => state.changeState);

//     useEffect(()=>{
//         cart.push(item.name);
//         cart.push(stat);
//     },[])

//     async function handle(handleStat){

//         if(handleStat == 1){
//             console.log('stat은 1 입니다.');
//             try {
//                 await client.collection('users').update(user.id, {
//                   'ingredients_keys-': item.id,
//                 });
//                 console.log('-', stat);

//                 let iname = item.name;
//                 let idx2 = cart.indexOf(iname);
//                 console.log('cart : ', cart);
//                 console.log('iname : ', iname);
//                 console.log('idx2 : ', idx2);
//                 changeState(idx2);
//                 // 앱 상태 업데이트
//                 // Zustand 사용자의 재료 변경사항을 화면에 반영
//                 // 재료 목록 삭제
//                 // removeUserIngredient(item.id);
//               } catch (error) {
//                 console.error(error);
//               }
//         }
//         else if(handleStat == 0){
//             console.log('stat은 0 입니다.');
//             try {
//                 await client.collection('users').update(user.id, {
//                   'ingredients_keys+': item.id,
//                 });
//                 console.log('+', stat);
//                 //console.log('cart : ', cart);

//                 let iname = item.name;
//                 let idx2 = cart.indexOf(iname);
//                 console.log('cart : ', cart);
//                 console.log('iname : ', iname);
//                 console.log('idx2 : ', idx2);
//                 changeState(idx2);
//                 // 앱 상태 업데이트
//                 // Zustand 사용자의 재료 변경사항을 화면에 반영
//                 // 재료 목록 추가
//                 // addUserIngredient(item.id);
//               } catch (error) {
//                 console.error(error);
//             }
//         }
//     }
