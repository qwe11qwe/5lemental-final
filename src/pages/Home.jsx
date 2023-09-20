import pb from '@/api/pocketbase';

function Home() {
  console.log(pb.authStore.token);
}

export default Home;