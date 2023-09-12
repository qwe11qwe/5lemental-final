import pb from '@/api/pocketbase';
import { useEffect, useState } from 'react';
import LikeFood from '@/LikeFood-item';

function FoodlistButton() {
  const [data, setData] = useState([]); // 상태 변수 이름을 data로 변경
  const [status, setStatus] = useState('pending');

  useEffect(() => {
    setStatus('loading');
    async function fetchFoodList() {
      try {
        const userList = await pb.collection('cooks').getFullList({
          expand: 'key, menu, user, image',
        });
        setData(userList); // 데이터를 data 상태 변수에 할당
        setStatus('success'); // 데이터 로드가 완료되면 success 상태로 변경
      } catch (error) {
        console.error('Error fetching data:', error);
        setStatus('error'); // 데이터 로드 중 오류가 발생하면 error 상태로 변경
      }
    }

    fetchFoodList();
  }, []);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <ul>
        {data.map((item) => (
          <LikeFood
            key={item.id}
            menu={item.menu}
            user={item.user}
            image={item.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default FoodlistButton;

// // import './styles/tailwind.css';
// import pb from '../api/pocketbase';
// import { useEffect, useState } from 'react';
// import Foodlist from '@/Foodlist';

// function FoodlistButton() {
//   const [Food] = useState(null);
//   const [item] = useState(null);
//   const [status, setStatus] = useState('pending');

//   useEffect(() => {
//     setStatus('loading');
//     async function FoodList() {
//       // const FoodList = await client.collection('Food').getFullList();
//       const userList = await pb.collection('cooks').getFullList({
//         expand: 'key, menu, user, image',
//       });
//       // setData(FoodList);
//       item(userList[0]);
//       setStatus('pending');
//     }

//     FoodList();
//   }, []);

//   if (status === 'loading') {
//     return <div>loading</div>;
//   }
//   return (
//     <div>
//       <ul>
//         {Food?.map((item) => {
//           return (
//             <Foodlist
//               key={item.id}
//               menu={item.menu}
//               user={item.user}
//               image={item.image}
//             />
//           );
//           // return <li key={ingredient.id} className='w-32 h-20 bg-gray-400 rounded-lg text-center  '>{ingredient.photo}</li>
//         })}
//       </ul>
//     </div>
//   );
// }
// console.log('item');

// export default FoodlistButton;
