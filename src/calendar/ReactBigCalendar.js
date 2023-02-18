import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import {useDispatch, useSelector} from 'react-redux'
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import _ from 'lodash'
import { NavLink } from 'react-router-dom'

moment.locale("en-GB");
const localizer = momentLocalizer(moment);
// console.log('events: ', events)

export default function ReactBigCalendar() {
     let dispatch = useDispatch()
     let [view, setView] = useState('month')
     let dataReducer = useSelector(state=>state.DateTimeReducer.dataDate)
     let [dataTemp, setDataTemp] = useState([])
     const [eventsData, setEventsData] = useState(events);
     // const [eventsData, setEventsData] = useState(events);
     // const [eventsData, setEventsData] = useState(events);
     // console.log('event', eventsData)
     // console.log('datacus', JSON.parse(localStorage.getItem('dataDate')).map(value=>{
     //      return value
     // }) )


     // console.log('evetn', events.map(value => {
     //      return (value)
     // }))

     // const handleSelect = ({ start, end }) => {
     const handleSelect = (props) => {

          // console.log('props', props)
          // const body = {
          //      method: 'POST',
          //      headers: { 'Content-Type': 'application/json' },
          //      body: JSON.stringify(props)
          // };
          // fetch('https://63f01fcfc59531ccf17b7fd9.mockapi.io/api/calendar', body)
          //      .then(response => response.json())
          //      .then(data => console.log((data)));
          // console.log(typeof start)
          // console.log(typeof end);
          // localStorage.setItem('start', JSON.stringify(start))
          const title = window.prompt("New Event name");
          if (title) {
            

               setEventsData([
                    ...eventsData,
                    {
                         // id: eventsData.length,
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
          dispatch({
               type:'PUSH_ITEM',
               data: eventsData
          })
          // console.log('gt', eventsData)
          // console.log('tempdata', dataTemp)
          // fetch('https://63f01fcfc59531ccf17b7fd9.mockapi.io/api/calendar')
          //      .then(response => response.json())
          //      .then(json => console.log(json))

     }, [])



     const onSelect = (event) => {
          if (window.confirm('delete ?') == true) {
               console.log('event', event)
               // console.log('xoa')

               let newData = eventsData.filter(n => n.title !== event.title)
               dispatch({
                    type:'PUSH_ITEM',
                    data: newData
               })
               // console.log('mang cu', eventsData)
               // console.log('mang moi', newData)
               setEventsData(newData)
               // window.location.reload()
          } else {
               console.log('ko xoa')
          }
          // console.log(event)
     }
     
     return (
          <div style={{ margin: '0 auto' }}  className="big App home row container-fluid">
               <div className="col-12 col-lg-11">
                    <button style={{ display: 'none' }} id="clickButton" className="btn btn-danger" onClick={() => {
                         let temp = eventsData
                         // console.log('temp', temp)
                         // localStorage.setItem('dataDate', JSON.stringify(temp))
                         dispatch({
                              type:'PUSH_ITEM',
                              data: temp
                         })
                         // window.location.reload()
                    }}>save</button>
                    {/* <button onClick={() => {
                    let data = JSON.parse(localStorage.getItem('dataDate'))
                    console.log(data.map(value=>{
                         return {
                              start: JSON.stringify(value.start)
                         }
                    }))
                    // for(let i =0; i<data.length;i++){
                    //      data[i] = Object(data[i])
                    //      // data[i].end = Object(data[i])
                    // }
                    // console.log('data', _.map(data, (value) => {
                    //      return {
                    //           start: Object(value.start)
                    //      }
                    // }))


               }}>get</button> */}
                    <Calendar
                         views={["day", "agenda", "work_week", "month"]}
                         selectable
                         localizer={localizer}
                         defaultDate={new Date()}
                         defaultView={view}
                         // events={(localStorage.getItem('dataDate')) ? JSON.parse(localStorage.getItem('dataDate')) : events}
                         events={dataReducer}
                         style={{ height: "100vh" }}
                         onSelectEvent={onSelect}
                         onSelectSlot={handleSelect}
                    />
               </div>
               <NavLink to='/eventbrite' className="col-12 col-lg-1 btn btn-success d-flex" style={{justifyContent:'center', alignItems:'center'}}>
                    <div>
                         eventbrite
                    </div>
               </NavLink>

          </div>
     );
}
