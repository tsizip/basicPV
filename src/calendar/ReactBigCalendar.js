import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import {useDispatch, useSelector} from 'react-redux'
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import _ from 'lodash'
import { NavLink } from 'react-router-dom'
import { pushItemAction } from "../redux/actions/CalendarActions";
moment.locale("en-GB");

const localizer = momentLocalizer(moment);
export default function ReactBigCalendar() {
     let dispatch = useDispatch()
     let [view, setView] = useState('month')
     let dataReducer = useSelector(state=>state.DateTimeReducer.dataDate)
     let [dataTemp, setDataTemp] = useState([])
     const [eventsData, setEventsData] = useState(events);
     const handleSelect = (props) => {
          const title = window.prompt("New Event name");
          if (title) {
               setEventsData([
                    ...eventsData,
                    {   
                         title: title,
                         start: props.start,
                         end: props.end
                    }
               ]);
               setDataTemp([...dataTemp, { title, start: props.start, end: props.end }])
               setView('day')
               setTimeout(() => {
                    document.getElementById('clickButton').click();
               }, 500)
          }
     };
     useEffect(() => {
          dispatch(pushItemAction(eventsData))
     }, [])
     const onSelect = (event) => {
          if (window.confirm('delete ?') == true) {
               console.log('event', event)
               let newData = eventsData.filter(n => n.title !== event.title)
              dispatch(pushItemAction(newData))
               setEventsData(newData)
          } else {
               console.log('ko xoa')
          }
     }
     return (
          <div style={{ margin: '0 auto' }}  className="big App home row container-fluid">
               <div className="col-12 col-lg-11">
                    <button style={{ display: 'none' }} id="clickButton" className="btn btn-danger" onClick={() => {
                         let temp = eventsData
                         dispatch(pushItemAction(temp))
                    }}>save</button>
                    <Calendar
                         views={["day", "agenda", "work_week", "month"]}
                         selectable
                         localizer={localizer}
                         defaultDate={new Date()}
                         defaultView={view}
                         events={dataReducer}
                         style={{ height: "100vh" }}
                         onSelectEvent={onSelect}
                         onSelectSlot={handleSelect}
                    />
               </div>
               <NavLink to='/eventbrite' className="col-12 col-lg-1 btn btn-success d-flex" style={{justifyContent:'center', alignItems:'center'}}>
                    <div>
                         EventBrite
                    </div>
               </NavLink>
          </div>
     );
}
