import pocketbase from '@/api/pocketbase';
import { getPocketHostImageURL } from '@/utils';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import BookMark from '../BookMark';

// 데이터 요청 함수 (query function)
const getRecommends = async (userId) => {
  return await pocketbase.collection('recommends').getFullList({
    filter: `(userEmail?~'${userId}')`,
    fields: 'collectionId,id,image',
  });
};

// 데이터의 userEmail 필드에서 삭제 요청 함수 (mutation function)
const removeRecommend = async ({ recommendId, userId }) => {
  return await pocketbase.collection('recommends').update(recommendId, {
    'userEmail-': userId,
  });
};

// 로그인 사용자 (더미 데이터)
// 실제 로그인 후 `pocketbase.authStore.model`에서 정보를 가져올 수 있습니다.
const dummyLoginUserInfo = {
  id: 'ypejq0ceyg9dpza',
  username: 'hyeonjuu',
  email: 'janghyeonjuu@gmail.com',
};

export default function BookmarkList() {
  // 로그인 사용자 정보
  const user = pocketbase.authStore.model ?? dummyLoginUserInfo;

  // 쿼리 클라이언트 인스턴스 가져오기
  const queryClient = useQueryClient();

  // 쿼리 키
  const queryKey = ['recommends', user.id];

  // React Query를 사용한 데이터 쿼리(query) 요청
  const { isLoading, error, data } = useQuery({
    queryKey: queryKey,
    queryFn: () => getRecommends(user.id),
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
    onError: (error, removedBookmark, context) => {
      queryClient.setQueryData(queryKey, context.previousList);
    },
  });

  const handleRemoveBookmark = (recommendId, userId) => async () => {
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
    <ul className="mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data?.map?.((item) => (
        <li key={item.id} className="relative min-w-[360px]">
          <button
            type="button"
            className="absolute right-4 top-4 cursor-pointer"
            onClick={handleRemoveBookmark(item.id, user.id)}
          >
            <BookMark color="#C9ECFF" />
          </button>
          <img
            src={getPocketHostImageURL(item).split(',')[0]}
            alt=""
            className="box-content aspect-square  rounded-lg border-[1px] border-gray-2 object-cover md:h-[380px] lg:h-[420px] xl:h-[400px]"
          />
        </li>
      ))}
    </ul>
  );
}
