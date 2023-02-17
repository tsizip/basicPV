import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Detail() {
     let dataReducer = useSelector(state => state.DateTimeReducer.newData)
     let navi = useNavigate()
     console.log('detail', dataReducer )
     return (
          <div>
               <button onClick={()=>{
                    navi('/')
               }} className='btn btn-success'>asfhj</button>
          </div>
          
     )

}
