// client-side 기능 TODO 리스트
// client-side 목표 : 사용자 입력값들을 총합하여 AI 에게 날릴 명령을 콘솔에 출력
// 1. 카테고리 버튼을 클릭하면 클릭한 카테고리를 state에 저장한다
// 1-1. emoji, text, color 를 각각 저장한다.
// 1-2. 저장된 state 값들을 바탕으로 editor 에 변화를 준다.
// 2. detail input 값을 state 에 저장한다.
// 3. include input 값을 state 에 저장한다.
// 4. 이름짓기 버튼을 클릭하면 저장된 데이터를 바탕으로 명령을 종합한다.
// 4-1. 설명란이 공백일 경우 프롬프트에 랜덤 이름을 만든다고 경고해준다.
// 4-2. 포함되어야 하는 문자열은 공백이다.

import styleSheet from './style/style.jsx';
import { useState } from 'react';

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
