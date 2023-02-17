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
     // console.log('data reducer? ', dataReducer)
     const [eventsData, setEventsData] = useState(JSON.parse(localStorage.getItem('dataDate')) ? JSON.parse(localStorage.getItem('dataDate')) : events);
     console.log('event', eventsData)

     const handleSelect = ({ start, end }) => {

          console.log(start);
          console.log(end);
          const title = window.prompt("New Event name");
          if (title) {
               setEventsData([
                    ...eventsData,
                    {
                         id: eventsData.length,
                         title,
                         start,
                         end,


                    }
               ]);
               setTimeout(()=>{
                    document.getElementById('clickButton').click();
               },500)
          }


          // console.log('event', event)
          // console.log('xoa')



          // localStorage.setItem('dataDate', JSON.stringify(eventsData))
     };
     useEffect(() => {





     }, [])

   
     const onSelect = (event) => {
          if (window.confirm('delete ?') == true) {
               console.log('event', event)
               // console.log('xoa')

               let newData = eventsData.filter(n => n.id !== event.id)
               // console.log('mang cu', eventsData)
               // console.log('mang moi', newData)
               localStorage.setItem('dataDate', JSON.stringify(newData))
               window.location.reload()
          } else {
               console.log('ko xoa')
          }
          // console.log(event)
     }
     return (
          <div className="App">
               <button style={{display:'none'}} id="clickButton" className="btn btn-danger" onClick={() => {
                    let temp = eventsData
                    // console.log('temp', temp)
                    localStorage.setItem('dataDate', JSON.stringify(temp))
                    window.location.reload()
               }}>save</button>
               <Calendar
                    views={["day", "agenda", "work_week", "month"]}
                    selectable
                    localizer={localizer}
                    defaultDate={new Date()}
                    defaultView="month"

                    events={JSON.parse(localStorage.getItem('dataDate')) ? JSON.parse(localStorage.getItem('dataDate')) : events}
                    // events={eventsData}
                    style={{ height: "100vh" }}
                    onSelectEvent={onSelect}
                    onSelectSlot={handleSelect}
               />
          </div>
     );
}
