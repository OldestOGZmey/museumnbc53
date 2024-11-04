import React from 'react'

const Questions = () => {
return (
    <div className='container'>
        <div className='mainTitle'>Часто задаваемые вопросы</div>
        <div className='faq'>
            <div className='faq-item'>
                <label className='faq-title' for='faq_1'>Какой стиль у музея?</label>
                <input className='faq-input' type='checkbox' id='faq_1'></input>
                <div className='faq-text'>
                    <p>tgrfbhrftghrtghrthgrthgrthrtgh</p>
                </div>
            </div>
            <div className='faq-item'>
                <label className='faq-title' for='faq_2'>Какой стиль у музея?</label>
                <input className='faq-input' type='checkbox' id='faq_2'></input>
                <div className='faq-text'>
                    <p>tgrfbhrftghrtghrthgrthgrthrtgh</p>
                </div>
            </div>
            <div className='faq-item'>
                <label className='faq-title' for='faq_3'>Какой стиль у музея?</label>
                <input className='faq-input' type='checkbox'  id='faq_3'></input>
                <div className='faq-text'>
                    <p>tgrfbhrftghrtghrthgrthgrthrtgh</p>
                </div>
            </div>
            
        </div>
    </div>
)
}

export default Questions
