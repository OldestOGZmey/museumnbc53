import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className="Footer">
        <div className="container">
            <div className="footerLink">
                <div><a className="footerLink" href="https://nbc53.ru/">О нас</a></div>
                <div><a  className="footerLink" href="/about">Услуги</a></div>
                <div><a className="footerLink" href="/prepods">Контакты</a></div>
                <div><a className="footerLink" href="/squd">Поддержка</a></div>
            </div>
            <div className="footerCopyright">
                <p>© 2024 museumnbc53. Все права защищены.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer