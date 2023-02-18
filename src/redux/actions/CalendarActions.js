import { MIEN_BAC, MIEN_NAM, PUSH_ITEM, SMALL_CLD } from "../consts/CalendarConsts"

export const pushItemAction = (data) => {
     return {
          type: PUSH_ITEM,
          data
     }
}
export const mienBacAction = (data) => {
     return {
          type: MIEN_BAC,
          data
     }
}
export const mienNamAction = (data) => {
     return {
          type: MIEN_NAM,
          data
     }
}

export const smallCalendar = (data, date) => {
     return {
          type: SMALL_CLD,
          data,
          date
     }
}