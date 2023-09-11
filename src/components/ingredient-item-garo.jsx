import { getPbImageURL } from '../utils/getPbImageURL';
import PocketBase from 'pocketbase';
import { useEffect, useState } from 'react';

const url = 'https://orimental-final.pockethost.io';
const client = new PocketBase(url);

export default function IngredientItemGaro({ item , user ,  stat }){
    //! item : 재료 정보 출력
    //! user : 현재 회원 정보 출력(매번 출력되면 너무 소모값 클거같은데 처음 한번만 가져오게 할 수는 없을까)
    //! stat : item재료를 user회원이 가지고 있는지 정보(가지고 있으면 1)


    function handle(stat){
        if(stat == 1){
            console.log('stat은 1 입니다.');
            //빼주기
        }
        else if(stat == 0){
            console.log('stat은 0 입니다.');
            //더해주기
        }
    }


    //user에는 현재 dummy데이터 들어있음
    return(
        <li key={item.id} className='-bg--fridge-gray w-32 h-14 rounded-xl flex flex-row items-center' onClick={()=>{
            //console.log(item.name,'는 ', stat , ' 상태 입니다.');
            handle(stat);

            //stat이 0이면 user한테 없는거고 1이면 user한테 있는거임
            //그럼 stat이 0일때 눌러주면 user한테 추가해주고
            //stat이 1일때 눌러주면 user한테서 빼줘야겠네?
            //적어주는게 아니라 관계를 추가해주는거라서 좀 다르게 가야될거같은데...

            //ingredients_keys 에서 가져왔으니까 거기 적어주면 되지않을까?

            //추가적으로 stat 1일때 색깔 바뀌게 렌더링 하면 될거같고
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
