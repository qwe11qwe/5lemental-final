import pb from '@/api/pocketbase';
import LikeButton from './LikeButton';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// 데이터 요청 함수 (query function)
const getcooks = async (userId) => {
  return await pb.collection('cooks').getFullList({
    filter: `(email?~'${userId}')`,
    fields: 'collectionId,id,image',
  });
};

// 데이터의 userEmail 필드에서 삭제 요청 함수 (mutation function)
const removeRecommend = async ({ recommendId, userId }) => {
  return await pb.collection('cooks').update(recommendId, {
    'userEmail-': userId,
  });
};

// 로그인 사용자 (더미 데이터)
// 실제 로그인 후 `pb.authStore.model`에서 정보를 가져올 수 있습니다.
const dummyLoginUserInfo = {
  id: 'ypejq0ceyg9dpza',
  username: 'hyeonjuu',
  email: 'janghyeonjuu@gmail.com',
};

export default function LikeButtonList() {
  // 로그인 사용자 정보
  const user = pb.authStore.model ?? dummyLoginUserInfo;

  // 쿼리 클라이언트 인스턴스 가져오기
  const queryClient = useQueryClient();

  // 쿼리 키
  const queryKey = ['cooks', user.id];

  // React Query를 사용한 데이터 쿼리(query) 요청
  const { isLoading, error, data } = useQuery({
    queryKey: queryKey,
    queryFn: () => getcooks(user.id),
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  // React Query를 사용한 데이터 수정(mutation) 요청
  const mutation = useMutation({
    mutationFn: removeRecommend,
    onMutate: async ({ recommendId }) => {
      await queryClient.cancelQueries({ queryKey: queryKey });

      const previousList = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (list) => {
        return list.filter((item) => item.id !== recommendId);
      });

      return { previousList };
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: queryKey });
    },
    onError: (error, removedLikeButton, context) => {
      queryClient.setQueryData(queryKey, context.previousList);
    },
  });

  const handleRemoveLikeButton = (recommendId, userId) => async () => {
    mutation.mutate({
      recommendId,
      userId,
    });
  };

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div role="alert">{error.toString()}</div>;
  }

  return (
    <ul className="">
      {data?.map?.((item) => (
        <li key={item.id} className="">
          <button
            type="button"
            className=""
            onClick={handleRemoveLikeButton(item.id, user.id)}
          >
            <LikeButton color="#C9ECFF" />
          </button>
        </li>
      ))}
    </ul>
  );
}

// import { useState } from 'react';

// function LikeButtonButton({ count = 0 }) {
//   const [LikeButtons, setLikeButtons] = useState(count);

//   const isPressed = LikeButtons > count;
//   console.log(isPressed);

//   const incrementLikeButtons = () => {
//     setLikeButtons(LikeButtons + 1);
//   };

//   const decrementLikeButtons = () => {
//     setLikeButtons(LikeButtons - 1);
//   };

//   return (
//     <div>
//       <button
//         onClick={isPressed ? decrementLikeButtons : incrementLikeButtons}
//         className="h-40"
//       >
//         ❤️
//       </button>
//       <span>{LikeButtons}</span>
//     </div>
//   );
// }

// export default LikeButtonButton;
