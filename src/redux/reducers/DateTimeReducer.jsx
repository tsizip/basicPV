import moment from "moment"
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { formats } from 'dayjs/locale/zh-cn';
const initialState = {
     dataDate: [],
     mienBac: '',
     mienNam: '',
     smallCalendar: ''
}

const DateTimeReducer = (state = initialState, action) => {
     switch (action.type) {

          case 'PUSH_ITEM':

               state.dataDate = action.data
               return { ...state }
               break;
          case 'MIEN_BAC':

               state.mienBac = action.data
               console.log('reducer', state.mienBac)
               return { ...state }
               break;
          case 'MIEN_NAM':

               state.mienNam = action.data
               // console.log('reducer', state.mienBac)
               return { ...state }
               break;
          case 'SMALL_CLD':
               // console.log('reducer', action)
               switch (action.data) {
                    case 4:
                         let dataRdc = [
                              {
                                   title: 'First Session with Alex Stan',
                                   time: action.date,
                                   avt: 'https://i.pravatar.cc/50',
                                   view: 'View client profile',
                                   bgColor: 'palegoldenrod',
                                   videoCall: true,
                                   colorCam: 'white'
                              },
                              {
                                   title: 'Chemistry Session with Alex Stan',
                                   time: action.date,
                                   avt: 'https://i.pravatar.cc/52',
                                   bgColor: '#6fc59d',
                                   videoCall: false,
                                   colorCam: 'black'
                              },
                              {
                                   title: 'Webinar: How to cope with trauma in professional life',
                                   time: action.date,
                                   avt: 'https://i.pravatar.cc/51',
                                   bgColor: '#bdf4ef',
                                   videoCall: true,
                                   colorCam: 'black'
                              }
                         ]
                         state.smallCalendar = dataRdc
                         // console.log('reducer', state.smallCalendar)
                         return { ...state }
                         break;

                    case 19:
                         let dataRdc2 = [
                              {
                                   title: 'First Session with Alex Stan',
                                   time: action.date,
                                   avt: 'https://i.pravatar.cc/50',
                                   view: 'View client profile',
                                   bgColor: 'palegoldenrod',
                                   videoCall: false,
                                   colorCam: 'white'
                              },
                              {
                                   title: 'Chemistry Session with Alex Stan',
                                   time: action.date,
                                   avt: 'https://i.pravatar.cc/52',
                                   bgColor: '#6fc59d',
                                   videoCall: false,
                                   colorCam: 'black'
                              },
                              {
                                   title: 'Webinar: How to cope with trauma in professional life',
                                   time: action.date,
                                   avt: 'https://i.pravatar.cc/51',
                                   bgColor: '#bdf4ef',
                                   videoCall: true,
                                   colorCam: 'black'
                              }
                         ]
                         state.smallCalendar = dataRdc2
                         // console.log('reducer', state.smallCalendar)
                         return { ...state }
                         break;
                    case 24:
                         let dataRdc3 = [
                              {
                                   title: 'First Session with Alex Stan',
                                   time: action.date,
                                   avt: 'https://i.pravatar.cc/50',
                                   view: 'View client profile',
                                   bgColor: 'palegoldenrod',
                                   videoCall: true,
                                   colorCam: 'white'
                              },
                              {
                                   title: 'Chemistry Session with Alex Stan',
                                   time: action.date,
                                   avt: 'https://i.pravatar.cc/52',
                                   bgColor: '#6fc59d',
                                   videoCall: false,
                                   colorCam: 'black'
                              },
                              {
                                   title: 'Webinar: How to cope with trauma in professional life',
                                   time: action.date,
                                   avt: 'https://i.pravatar.cc/51',
                                   bgColor: '#bdf4ef',
                                   videoCall: false,
                                   colorCam: 'black'
                              }
                         ]
                         state.smallCalendar = dataRdc3
                         // console.log('reducer', state.smallCalendar)
                         return { ...state }
                         break; 

                    default: return { ...state }
               }

               return { ...state }
               break;
          default:
               return { ...state }
     }
}

export default DateTimeReducer