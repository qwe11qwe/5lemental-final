import PocketBase from 'pocketbase';

const pb = new PocketBase(import.meta.env.VITE_PH_URL);
if (import.meta.env.DEV) {
  // 개발중에는 자옫ㅇ으로 요청 취소하지 마세요.
  // 에러 안보이게 함
  pb.autoCancellation(false);
}

if (import.meta.env.DEV) {
  pb.autoCancellation(false);
}

export default pb;
