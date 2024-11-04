import React from 'react'
import './Map.css'
const Map = () => {
  return (
    <div className='content'>
      <div>
        <div className='contacts'>
         <div>Контактная</div> 
         <div>информация </div>
        </div>
        <div className='information'>
          <div style={{marginTop:10}}>Телефон: + 7 (8162) 55-14-41</div>
          <div  style={{marginTop:10}}>Почта: info@college-museum.ru</div>
          <div  style={{marginTop:10}}>Адрес: Veliky Novgorod, 161 B. St. Petersburg Street</div>
          <div  style={{marginTop:10}}>Часы работы: Пн-пт: 10-00 - 18:00</div>
        </div>
      </div> 
      <div className='maps'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4161.24313397395!2d31.282323932532144!3d58.56823360145356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46beebac1d857499%3A0x555f68857a5d58b2!2z0J3QvtCy0LPQvtGA0L7QtNGB0LrQuNC5INGB0YLRgNC-0LjRgtC10LvRjNC90YvQuSDQutC-0LvQu9C10LTQtg!5e0!3m2!1sru!2sru!4v1729456389877!5m2!1sru!2sru" width="800" height="400" style={{border:'none', borderRadius:20}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
   
  )
}

export default Map
