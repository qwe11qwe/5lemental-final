import PocketBase from 'pocketbase';

const pb = new PocketBase(import.meta.env.VITE_PH_URL);

if (import.meta.env.DEV) {
  pb.autoCancellation(false);
}

export default pb;
