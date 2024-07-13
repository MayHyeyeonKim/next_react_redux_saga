// HYDRATE 액션이 디스패치되면, 서버 측의 상태(action.payload)를 반환하여 클라이언트 측의 상태를 갱신 (SSR)
import { HYDRATE } from 'next-redux-wrapper';

import { combineReducers } from 'redux';
import user from './user';
import post from './post';

// (previous, action) => next state
const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE', action);
      return action.payload;

      // HYDRATE 액션이 아닌 경우, 결합된 리듀서들이 액션을 처리
    default: {
      const combineReducer = combineReducers({
        user,
        post,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;


// 1. 디스패치가 던져지면 스토어로 간다.
// 2. 스토어안에 해당 리듀서로 들어가서 상태 업데이트가 된다.
// 3. 이 리듀서에서 상태 업데이트가 일어나면 이게 스토어로 저장된다.
// 4. 이제 이 스토어에 저장된 상태를 가져다 쓴다.