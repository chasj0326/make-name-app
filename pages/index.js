// client-side 기능 TODO 리스트
// client-side 목표 : 사용자 입력값들을 총합하여 AI 에게 날릴 명령을 콘솔에 출력
// 1. 카테고리 버튼을 클릭하면 클릭한 카테고리를 state에 저장한다
// 1-1. emoji, text, color 를 각각 저장한다.
// 1-2. 저장된 state 값들을 바탕으로 editor 에 변화를 준다.
// 2. detail input 값을 state 에 저장한다.
// 3. include input 값을 state 에 저장한다.
// 4. 이름짓기 버튼을 클릭하면 저장된 데이터를 바탕으로 명령을 종합한다.
// 4-1. 설명란이 공백일 경우 프롬프트에 랜덤 이름을 만든다고 경고해준다.
// 4-2. 포함되어야 하는 문자열은 옵션이다(공백이어도 됨).

import styleSheet from './style/style.jsx';
import { useState, useEffect } from 'react';

export default function Home() {
  const categoryBtnData = [
    {emoji:'🐶😺', text: '반려동물', color: 'pupple'},
    {emoji:'🕹️', text: '별명', color: 'mint'},
    {emoji:'📦', text: '상품', color: 'yellow'},
    {emoji:'📜', text: '글 제목', color: 'blue'},
    {emoji:'📱', text: '서비스', color: 'pink'},
    {emoji:'👥', text: '팀/그룹', color: 'green'},
    {emoji:'❓', text: '아무개', color: 'gray'},
  ]
  const [category, setCategory] = useState(categoryBtnData[0]);
  return (
    <>
      <div className='container'>
        <div className='box-title'>
          <h2 className='title fw-eb text-dark'>AI 작명소</h2>
        </div>
        <nav className='box-category'>
          {
            categoryBtnData.map((item)=>
              <button 
                className={`btn btn-category btn-${item.color} text-bright`}
                onClick={()=>{setCategory(item)}}>
                {item.emoji + ' '+ item.text}
              </button>
            )
          }
        </nav>
        <div className='editor'>
          <div className='edit-box'>
            <div className='edit-detail-box'>
              <p className='explain fw-b'>
                {
                  category.text==='아무개' ?
                  '설명을 입력해 주세요.' :
                  `${category.text}에 대한 설명을 입력해 주세요.`
                }
              </p>
              <div className='category-emoji'>
                { category.emoji } 
              </div>
            </div>
            
            <textarea className='input input-detail'></textarea>
          </div>
          <div className='edit-box'>
            <p className='explain fw-b'>포함되어야 하는 문자열이 있나요?</p>
            <input className='input input-include'></input>
          </div>
          <div className='box-submit'>
            <button className={`btn btn-submit btn-${category.color} text-bright fw-b`}>
              {
                category.text==='아무개'?
                '이름 짓기':
                (
                  category.text==='별명' || category.text==='글 제목'?
                  `${category.text} 짓기`:
                  `${category.text} 이름 짓기`
                )
              }
            </button>
          </div>
        </div>
      </div>
      <style jsx>{styleSheet}</style>
    </>
  )
}
