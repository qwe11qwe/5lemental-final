import { getPbImageURL } from '../utils/getPbImageURL';
import PocketBase from 'pocketbase';
import { useEffect, useState } from 'react';
import create from 'zustand';

const url = 'https://orimental-final.pockethost.io';
const client = new PocketBase(url);


const useStateStore = create((set) => ({
    stat: 0,
    setStat : (newStat) => set({ stat : newStat }),
}))

export default function IngredientItemGaro({ item , user ,  stat }){
    //! item : 재료 정보 출력
    //! user : 현재 회원 정보 출력(매번 출력되면 너무 소모값 클거같은데 처음 한번만 가져오게 할 수는 없을까)
    //! stat : item재료를 user회원이 가지고 있는지 정보(가지고 있으면 1)
    const { stat : zustandStat, setStat } = useStateStore();


    async function handle(zustandStat){
        if(zustandStat == 1){
            //console.log('stat은 1 입니다.');
            //빼주기
            try {
                await client.collection('users').update(user.id, {
                  'ingredients_keys-': item.id,
                });
                console.log(item, '-', stat);
                setStat(0);
                // 앱 상태 업데이트
                // Zustand 사용자의 재료 변경사항을 화면에 반영
                // 재료 목록 삭제
                // removeUserIngredient(item.id);
              } catch (error) {
                console.error(error);
              }
        }
        else if(zustandStat == 0){
            //console.log('stat은 0 입니다.');
            //console.log(user); //? g1j7klbnj716gkm
            //console.log(item.id); //? g1j7klbnj716gkm
            //console.log(user.ingredients_keys); //? (2) ['sg7btfzsqn47ogi', '1xrhb5plqjkiqzg']
            //더해주기
            try {
                await client.collection('users').update(user.id, {
                  'ingredients_keys+': item.id,
                });
                console.log(item, '+', stat);
                setStat(1);
                // 앱 상태 업데이트
                // Zustand 사용자의 재료 변경사항을 화면에 반영
                // 재료 목록 추가
                // addUserIngredient(item.id);
              } catch (error) {
                console.error(error);
            }
        }
    }

    return(
        //! 버튼으로 바꿔주기. 지금은 접근성 이슈 있음
        <li key={item.id} className='-bg--fridge-gray w-32 h-14 rounded-xl flex flex-row items-center' onClick={()=>{
            //handle(stat);
            handle(zustandStat);
        }}>
            <figure>
                <img 
                src={getPbImageURL(item, 'photo')} 
                className='w-12 h-12'
                alt="" />
                {/* <span>{item.name}</span> */}
            </figure>
            <div className='w-20 w- flex flex-row justify-center'>
                <span>{item.name}</span>
            </div>
            
        </li>
    )
}
