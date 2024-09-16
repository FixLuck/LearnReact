
import { createSlice } from "@reduxjs/toolkit";



const initialCounterState = {
    counter: 0,
    showCounter: true,
  };
  
  const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
      increment(state) {
        state.counter++; //redux toolkit sẽ tự động sao chép các trạng thái hiện có, tạo đối tượng mới và ghi đè vào state mà chúng ta đang thay đổi
      },
      decrement(state) {
        state.counter--;
      },
      increaseByAmount(state, action) {
        state.counter = state.counter + action.payload;
      },
      toggleCounter(state) {
        state.showCounter = !state.showCounter;
      },
    },
  });

  export default counterSlice;
  