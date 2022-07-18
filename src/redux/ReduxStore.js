import { combineReducers,createStore,applyMiddleware } from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import { reducer1, reducer2, reducer3, reducer4,reducer5, reducer6, reducer7 } from './Reducers'
import thunk from 'redux-thunk'



const reducer = combineReducers({
    register:reducer1,
    login:reducer2,
    post:reducer3,
    allPost: reducer4,
    updateUser:reducer5,
    updatePost:reducer6,
    getSinglePost:reducer7
  
})

const middleware = [thunk]

const initialState = ({

})

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store;