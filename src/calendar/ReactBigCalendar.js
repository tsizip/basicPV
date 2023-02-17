import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);
// console.log('events: ', events)
export default function ReactBigCalendar() {
     let dispatch = useDispatch()
     let navigate = useNavigate()
     let dataReducer = useSelector(state => state.DateTimeReducer)
     console.log('data reducer? ', dataReducer)
     const [eventsData, setEventsData] = useState([]);

     const handleSelect = ({ start, end }) => {


          const title = window.prompt("New Event name");
          if (title) {
               let result = async () => {
                    await setEventsData([
                         ...eventsData,
                         {
                              start,
                              end,
                              title
                         }
                    ]);
                    
               }

               result()

          }
          

          // console.log(eventsData)

     };
     useEffect(() => {
          // console.log('render',eventsData)
          dispatch({
               type:"PUSH_ITEM",
               data:eventsData
          })

     }, [eventsData])

     const onSelect = (event) => {
          if (window.confirm('delete ?') == true) {
               // console.log('xoa')
               // let newData = eventsData.filter(n => n !== event)
               // setEventsData(newData)
          } else {
               console.log('ko xoa')
          }
          console.log(event)
     }
     return (
          <div className="App">
               <Calendar
                    views={["day", "agenda", "month"]}
                    selectable
                    localizer={localizer}
                    defaultDate={new Date()}
                    defaultView="month"
                    events={eventsData}
                    style={{ height: "100vh" }}
                    onSelectEvent={onSelect}
                    onSelectSlot={handleSelect}

               />
          </div>
     );
}
