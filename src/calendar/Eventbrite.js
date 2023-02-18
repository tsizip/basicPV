import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Radio, Space, Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash'
export default function Eventbrite() {
     const [tabPosition, setTabPosition] = useState('left');
     let dispatch = useDispatch()
     const changeTabPosition = (e) => {
          setTabPosition(e.target.value);
     };

     let dataMB = useSelector(state => state.DateTimeReducer.mienBac)
     let dataMN = useSelector(state => state.DateTimeReducer.mienNam)
// console.log(typeof dataMB)
     useEffect(() => {
          let promise = fetch('https://63f01fcfc59531ccf17b7fd9.mockapi.io/api/mienbac')
          // .then(response=>response.json())
          // .then(data=>data)
          promise.then(res => res.json()).then(data => {
               dispatch({
                    type: 'MIEN_BAC',
                    data: data
               })
          })


          let promise2 = fetch('https://63f01fcfc59531ccf17b7fd9.mockapi.io/api/miennam')
          // .then(response=>response.json())
          // .then(data=>data)
          promise2.then(res => res.json()).then(data => {
               dispatch({
                    type: 'MIEN_NAM',
                    data: data
               })
          })


          // let promise = fetch('https://63f01fcfc59531ccf17b7fd9.mockapi.io/api/miennam')
          // // .then(response=>response.json())
          // // .then(data=>data)
          // promise.then(res=>res.json()).then(data=>{
          //      console.log(data)
          // })

          // console.log('ok chuaw', result)

          // fetch('https://63f01fcfc59531ccf17b7fd9.mockapi.io/api/mienbac')
          // .then(response=>response.json())
          // .then(data=>{console.log('mien bac', data)})

     }, [])

     const renderBac = () => {

     }

     return (
          <div>
               <NavLink to='/'>
                    Quay lại
               </NavLink>
               <h3 className='text-center'>Thời gian diễn ra của một số sự kiện đáng chú ý</h3>
               <div className='container' style={{ margin: '0 auto' }}>


                    <Tabs
                         tabPosition={'top'}
                         centered
                         items={undefined}
                    >
                         <TabPane tab="Miền Bắc" key="1">
                              <div className='row'>
                                   {_.map(dataMB,(value, index) => {
                                        return <div style={{paddingTop:'10px'}} className='col-12 col-sm-6 col-lg-3' key={index}>
                                             <div className="card">
                                                  <img className="card-img-top" src={value.img} alt="Title" />
                                                  <div className="card-body">
                                                       <h4 className="text-danger card-title">{value.nameEvent}</h4>
                                                       <p className="card-text">{value.desc.slice(0,115)+'...'}</p>
                                                       <p className="card-text text-primary">{value.date}</p>
                                                  </div>
                                             </div>

                                        </div>
                                   })}
                                   {/* {dataMB?.map()} */}
                              </div>

                         </TabPane>
                         <TabPane tab="Miền Nam" key="2">
                         <div className='row'>
                                   {_.map(dataMN,(value, index) => {
                                     
                                        return <div style={{paddingTop:'10px'}} className='col-12 col-sm-6 col-lg-3' key={index}>
                                             <div className="card">
                                                  <img className="card-img-top" src={value.img} alt="Title" />
                                                  <div className="card-body">
                                                       <h4 className="text-danger card-title">{value.nameEvent}</h4>
                                                       <p className="card-text">{value.desc.slice(0,115)+'...'}</p>
                                                       <p className="card-text text-primary">{value.date}</p>
                                                  </div>
                                             </div>

                                        </div>
                                   })}
                                   {/* {dataMB?.map()} */}
                              </div>
                         </TabPane>
                         <TabPane tab="Miền Trung" key="3">Đang cập nhật...</TabPane>
                    </Tabs>

               </div>
          </div>
     )
}
