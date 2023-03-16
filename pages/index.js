import Head from 'next/head.js'
import styleSheet from './style/style.jsx'

export default function Home() {
  const categoryBtnData = [
    {text: '🐶😺 반려동물', color: 'pupple'},
    {text: '🕹️ 닉네임', color: 'mint'},
    {text: '📦 상품', color: 'yellow'},
    {text: '📜 제목', color: 'blue'},
    {text: '📱 서비스', color: 'pink'},
    {text: '❓ 아무개', color: 'gray'},
  ]
  return (
    <>
      <div className='container'>
        <div className='box-title'>
          <h2 className='title fw-eb text-dark'>AI 작명소</h2>
        </div>
        <nav className='box-category'>
          {
            categoryBtnData.map((item)=>
              <button className={`btn btn-category btn-${item.color} text-bright`}>
                {item.text}
              </button>
            )
          }
        </nav>
        <div className='editor'>
          <div className='edit-box'>
            <p className='explain fw-b'>반려동물에 대한 설명을 입력해주세요.</p>
            <textarea className='input input-detail'></textarea>
          </div>
          <div className='edit-box'>
            <p className='explain fw-b'>포함되어야 하는 문자열이 있나요?</p>
            <input className='input input-include'></input>
          </div>
          <div className='box-submit'>
            <button className='btn btn-submit btn-pupple text-bright fw-b'>
              이름 짓기
            </button>
          </div>
        </div>
      </div>
      <style jsx>{styleSheet}</style>
    </>
  )
}
