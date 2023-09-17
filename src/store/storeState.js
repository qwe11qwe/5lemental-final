import { create } from 'zustand';

const useStore = create((set, get) => {
  return{
    // 전역 상태 : 장바구니(cart)
    cart: [],

    changeState : (i) => {
      const { cart } = get();
      set({
        cart: cart.map((item, index) => (index === i+1 ? Number(!item) : item))
        //! 이렇게 하면 cart 상태(?) 변경 되는거같은데 왜 리-렌더링 안될까
        //! 왜ㅣ............>!!!!!!!!!!!
      });
    }   
  }
	//(index == i ? !item : item)
  //console.log(item[index+1])
  //console.log('item,index: ', item, index)
  //(index === i ? Boolean(!item) : item)
		
});

export default useStore;