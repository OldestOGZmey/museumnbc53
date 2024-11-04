import React from 'react'
import './Foto.css'
const Foto = ({mainTitle, dateTitle, sTitle}) => {
return (
    <div className='Foto'>
        <div className='card'>
            <div className='pic'></div>
            <div className='mainTitle'>
                {mainTitle}
            </div>
            <div className='subTitle'>
                <div className='dateTitle'>
                    {dateTitle}
                </div>
                <div className='sTitle'>
                    {sTitle}
                </div>
            </div>
            <div className='but'>
            <button className='btn'>Узнать</button>
            </div>
        </div>
    </div>
)
}

export default Foto
