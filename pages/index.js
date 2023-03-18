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
    // type : 1 = '~의 이름 짓기', 0 = '~ 짓기', -1 = 아무개
    {emoji:'🐶😺', text: '반려동물', color: 'pupple', type: 1},
    {emoji:'🕹️', text: '별명', color: 'mint', type: 0},
    {emoji:'📦', text: '상품', color: 'yellow', type: 1},
    {emoji:'📜', text: '글 제목', color: 'blue', type: 0},
    {emoji:'📱', text: '서비스', color: 'pink', type:1},
    {emoji:'👥', text: '팀/그룹', color: 'green', type:1},
    {emoji:'❓', text: '아무개', color: 'gray', type:-1},
  ]
  const [category, setCategory] = useState(categoryBtnData[0]);
  const [detail, setDetail] = useState('');
  const [include, setInclude] = useState('');
  
  const buttonText = () => {
    if(category.type===-1){
      return '이름 짓기'
    }
    if(category.type===0){
      return `${category.text} 짓기`
    }
    return `${category.text} 이름 짓기`
  }
  const detailExplainText = () => {
    const baseExplain = '설명을 입력해 주세요'
    return(
      category.type<0?baseExplain:category.text+'에 대한 '+baseExplain
    );
  }
  const commandText = (includeBoolean) => {
    let baseCommand = ''
    if(category.type===0){
      baseCommand = `${category.text}을 지어주세요.\n`
    }
    else if(category.type===1){
      baseCommand = `${category.text} 이름을 지어주세요.\n`
    }
    else{
      baseCommand = '이름을 지어주세요.\n'
    }
    return(
      includeBoolean?
      baseCommand+`설명: ${detail}\n포함되어야 하는 문자열: ${include}`:
      baseCommand+`설명: ${detail}`
    )
  }
  const handleSubmit = () => {
    if(detail.trim().length<1){
      alert('설명을 입력해주세요');
      return;
    }
    if(include.trim().length<1){
      if(!confirm('포함되어야 하는 문자열이 없나요?')){
        return;
      }
      console.log(commandText(false));
    }
    else{
      console.log(commandText(true));
    }
  }
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
                {detailExplainText()}
              </p>
              <div className='category-emoji'>
                { category.emoji } 
              </div>
            </div>
            
            <textarea 
              className='input input-detail'
              value = {detail}
              onChange={(e)=>setDetail(e.target.value)}
            ></textarea>
          </div>
          <div className='edit-box'>
            <p className='explain fw-b'>포함되어야 하는 문자열이 있나요?</p>
            <input 
              className='input input-include'
              value = {include}
              onChange={(e)=>setInclude(e.target.value)}
            ></input>
          </div>
          <div className='box-submit'>
            <button 
              className={`btn btn-submit btn-${category.color} text-bright fw-b`}
              onClick={()=>handleSubmit()}
            >
              {buttonText()}
            </button>
          </div>
        </div>
      </div>
      <style jsx>{styleSheet}</style>
    </>
  )
}
