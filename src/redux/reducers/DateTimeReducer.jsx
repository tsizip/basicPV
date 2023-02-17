import moment from "moment"
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { formats } from 'dayjs/locale/zh-cn';
const initialState = {
     data: '',
     newData:''
}

const DateTimeReducer = (state = initialState, action) => {
     switch (action.type) {

          case 'PUSH_ITEM':
               state.data = action.data
               // console.log('reducer', state.data)
               return { ...state }
               break;
          case 'NEW_DATA':
               state.newData = action.data
               // console.log(state.data)
               return { ...state }
               break;
          default:
               return { ...state }
     }
}

export default DateTimeReducer