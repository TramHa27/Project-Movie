import { applyMiddleware, combineReducers, createStore } from 'redux';
//Cấu hình middlewrare (Để có thể dispatch redux 1 action là function)
import thunk from 'redux-thunk'
import { CarouselReducer } from './Reducers/CarouselReducer'
import { QuanLyPhimReducer } from './Reducers/QuanLyPhimReducer'
import { QuanLyNguoiDungReducer } from './Reducers/QuanLyNguoiDungReducer';
import { QuanLyRapReducer } from './Reducers/QuanLyRapReducer'

const rootReducer = combineReducers({
    //Khai báo reducer
    CarouselReducer,
    QuanLyPhimReducer,
    QuanLyRapReducer,
    QuanLyNguoiDungReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunk))

