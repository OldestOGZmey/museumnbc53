import {React, useState} from 'react'
import Header from '../Header/Header'
import './TeachersPage.css'
import TeachersPic from '../TeachersPic/TeachersPic'

const TeachersPage = () => {
  const [header, setHeader] = useState(
    <svg x="0px" y="0px" style={{fill:'#00ADD2', position:'relative', left:100}} >
    <g>
       <polygon class="st0" points="56.63,82.19 91.39,54.57 91.39,84.24 56.63,111.87 	"/>
       <polygon class="st0" points="91.39,46.48 91.39,50.2 53.71,80.16 53.71,114.2 51.34,116.08 51.34,78.32 	"/>
    </g>
    <g>
       <polygon class="st0" points="43.37,82.19 8.61,54.57 8.61,84.24 43.37,111.87 	"/>
       <polygon class="st0" points="8.61,46.48 8.61,50.2 46.29,80.16 46.29,114.2 48.66,116.08 48.66,78.32 	"/>
    </g>
    <g>
       <path class="st0" d="M79.75,32.86L55.82,13.83c-1.64-1.11-3.69-1.73-5.81-1.73c-2.13,0-4.18,0.62-5.81,1.73L20.25,32.86L50,56.52
          L79.75,32.86z"/>
       <polygon class="st0" points="82.46,35.02 50,60.89 17.54,35.02 8.61,42.11 50,75.03 91.39,42.11 	"/>
    </g>
    <path class="st0" d="M60.55,3.87l-0.3-0.23l0,0C57.23,1.34,53.92,0,50,0c-3.92,0-7.23,1.34-10.25,3.65l0,0l-0.3,0.23L0,35.27v42.13
       l4.94,3.93V39.2l33.89-26.99c3.5-2.76,6.84-4.36,11.17-4.36c4.33,0,7.67,1.6,11.17,4.36l33.88,27.01l0.02,42.11l4.92-3.91V35.28
       L60.55,3.87z"/>
    </svg>
)

 const headerMain = () => {
    return (
       <div style={{backgroundColor:'transparent',border:'none', zIndex:2 }} onClick={
          () => {
             setHeader(<Header/>)
          }
       }>
           {header}
        </div>
    )
 }

 const changeHeader = () => {
    if (window.scrollY > 50) {
        setHeader(   <svg x="0px" y="0px" style={{fill:'#00ADD2', position:'relative', left:100}} >
          <g>
             <polygon class="st0" points="56.63,82.19 91.39,54.57 91.39,84.24 56.63,111.87 	"/>
             <polygon class="st0" points="91.39,46.48 91.39,50.2 53.71,80.16 53.71,114.2 51.34,116.08 51.34,78.32 	"/>
          </g>
          <g>
             <polygon class="st0" points="43.37,82.19 8.61,54.57 8.61,84.24 43.37,111.87 	"/>
             <polygon class="st0" points="8.61,46.48 8.61,50.2 46.29,80.16 46.29,114.2 48.66,116.08 48.66,78.32 	"/>
          </g>
          <g>
             <path class="st0" d="M79.75,32.86L55.82,13.83c-1.64-1.11-3.69-1.73-5.81-1.73c-2.13,0-4.18,0.62-5.81,1.73L20.25,32.86L50,56.52
                L79.75,32.86z"/>
             <polygon class="st0" points="82.46,35.02 50,60.89 17.54,35.02 8.61,42.11 50,75.03 91.39,42.11 	"/>
          </g>
          <path class="st0" d="M60.55,3.87l-0.3-0.23l0,0C57.23,1.34,53.92,0,50,0c-3.92,0-7.23,1.34-10.25,3.65l0,0l-0.3,0.23L0,35.27v42.13
             l4.94,3.93V39.2l33.89-26.99c3.5-2.76,6.84-4.36,11.17-4.36c4.33,0,7.67,1.6,11.17,4.36l33.88,27.01l0.02,42.11l4.92-3.91V35.28
             L60.55,3.87z"/>
          </svg>)
    } else {
     setHeader(<Header/>) 
    }
 }
 window.addEventListener('scroll', changeHeader)
  return (
    <div className="TeachersPage">
       <div  className='header'>
          {headerMain()}
       </div>
      <div style={{width:'100%', height:'1080px'}}>
        <TeachersPic/>
      </div>
      
    </div>
  )
}

export default TeachersPage