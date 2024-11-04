import {React, useState} from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom';
const Header = () => {
  const [isActive, setIsActive] = useState(false);

    // рандом изменения для проверки 
    const handleMouseEnter = () => {
        setIsActive(true);
    };

    const handleMouseLeave = () => {
        setIsActive(false);
    };

    // бля типо так должно менять 
    const style = {
        backgroundColor: isActive ? 'blue' : 'white',
        color: isActive ? 'white' : 'black',
        padding: '20px',
        textAlign: 'center',
        border: '1px solid black',
        cursor: 'pointer',
    };

  return (
    <div className={s.Header}>
        <div className={s.headerContainer}>
            <div className={s.logo}></div>
            <div className={s.headerTitle}>
                    <div>
                        <NavLink 
                          exact
                          className={s.title} to="/">
                              История
                        </NavLink></div>
                    <div><NavLink className={s.title} to="/about">Учебная деятельность</NavLink></div>
                    <div><a className={s.title} href="/prepods">Преподаватели</a></div>
                    <div><a className={s.title} href="/squd">Студенческие строительные отряды</a></div>
                    <div><NavLink className={s.title} to="/3D">3D</NavLink></div>
            </div>
        </div>
    </div>
  )
}

export default Header