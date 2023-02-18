// import "./styles.css";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";

export default function ReactCalendar() {
  let dataReducer = useSelector(state => state.DateTimeReducer.smallCalendar)
  let dispatch = useDispatch()
  const [value, onChange] = useState(0);
  const handleChange = (value) => {
    // console.log('value', moment(value).format('D'))
    let date = moment(value).format('D')
    onChange(date)
    dispatch({
      type: 'SMALL_CLD',
      data: Number(date),
      date: moment(value).format('DD-MM-YYYY')
    })
  }
  // useEffect(() => {
  //   // console.log('value', value)
  // }, [])
  return (
    <div  className="small App">
      <Calendar onChange={handleChange} />
      <div className="content container-fluid">
        {value == 4 || value == 19 || value == 24 ? dataReducer?.map((value, index) => {
          return <div className="row "  style={{ padding: '5px 13px', justifyContent:'center' }} key={index}><div className="row" style={{backgroundColor:value.bgColor, borderRadius:'5px', padding:'10px'}} >
            <div className="col-10 ">
              <h5>{value.title}</h5>
              <p style={{letterSpacing:'5px'}}>{value.time}</p>
              <div className="">
                <img style={{ width: '40px', borderRadius: '50%' }} src={value.avt} />
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
