// import "./styles.css";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { smallCalendar } from "../redux/actions/CalendarActions";

export default function ReactCalendar() {
  let dataReducer = useSelector(state => state.DateTimeReducer.smallCalendar)
  let dispatch = useDispatch()
  const [value, onChange] = useState(0);
  const [date,setDate] = useState(moment(new Date()).format('DD-MM-YYYY'))
  const handleChange = (value) => {
    setDate(moment(value).format('DD-MM-YYYY'))
    let date = moment(value).format('D')
    onChange(date)
    dispatch(smallCalendar(Number(date),moment(value).format('DD-MM-YYYY')))
  }
  return (
    <div  className="small App">
      <Calendar onChange={handleChange} />
      <div className="content container-fluid">
        <h3 className="text-primary">Upcoming Events</h3>
        <p>{date}</p>
        {value == 4 || value == 19 || value == 24 ? dataReducer?.map((value, index) => {
          return <div className="row "  style={{ padding: '5px 13px', justifyContent:'center' }} key={index}><div className="row" style={{backgroundColor:value.bgColor, borderRadius:'5px', padding:'10px'}} >
            <div className="col-10 ">
              <h5>{value.title}</h5>
              <p style={{letterSpacing:'5px', color:'gray'}}>{value.time}</p>
              <div className="">
                <img style={{ width: '30px', borderRadius: '50%' }} src={value.avt} />
                <a className="text-link ps-2">{value?.view}</a>
              </div>
            </div>
            <div className="col-2" >{value.videoCall ? <i style={{fontSize:'37px', color:value.colorCam}} className="fa fa-video"></i> : undefined}</div>
          </div></div>
        }) : <p className="text-center">Bạn chưa có hoạt động nào cho ngày {value == 0 ? 'hôm nay!' : value}</p>}
      </div>
    </div>
  );
}
