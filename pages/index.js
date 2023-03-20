import styleSheet from './style/style.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import MakeText from './util/makeText.js';
import categoryData from './data/categoryData.js';
import ResultBox from './components/ResultBox.js';
import LoadingBox from './components/LoadingBox.js';

export default function Home() {
  
  const [category, setCategory] = useState(categoryData[0]);
  const [detail, setDetail] = useState('');
  const [include, setInclude] = useState('');
  const [submitState, setSubmitState] = useState(0);
  const [result, setResult] = useState('');
  const initStates = () => {
    setDetail('');
    setInclude('');
    setSubmitState(0);
  }

  let makeText = new MakeText(category);
  useEffect(()=>{
    setSubmitState(0);
    makeText = new MakeText(category);
    initStates();
  }, [category]);

  const handleSubmit = async() => {
    if(submitState===0){
      if(detail.trim().length<1){
        alert('설명을 입력해주세요');
        return;
      }
      if(include.trim().length<1){
        if(!confirm('포함되어야 하는 문자열이 없나요?')){
          return;
        }
      }
    }
    setSubmitState(1);
    const command = makeText.commandText(detail, include.trim());
    try{
      const response = await axios('./api/generate',{
        method: 'POST',
        headers: {
          "Content-Type" : "application/json"
        },
        data: {
          command: command
        }
      });
      const data = response.data;
      if(response.status!==200){
        throw data.error || new Error(`request error : ${response.status}`)
      }
      setSubmitState(2);
      setResult(data.result);
    }
    catch(error){
      if (response.status!==500){
        alert(error.message);
      }
      setSubmitState(0);
    }
  }

  const makeBoxMain = () => {
    if(submitState===0){
      return(
        <div className='box-main'>
          <div className='edit-box'>
            <div className='edit-detail-box'>
              <p className='explain fw-b'>
                {makeText.detailExplainText()}
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
              {makeText.buttonText()}
            </button>
          </div>
        </div>
      )
    }
    if(submitState===1){
      return(
        LoadingBox()
      )
    }
    if(submitState===2){
      return(
        <ResultBox
          result = {result}
          category = {category}
          setSubmitState = {setSubmitState}
        ></ResultBox>
      )
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
            categoryData.map((item)=>
              <button 
                className={`btn btn-category btn-${item.color} text-bright`}
                onClick={()=>{setCategory(item)}}>
                {item.emoji + ' '+ item.text}
              </button>
            )
          }
        </nav>
        {makeBoxMain()}
      </div>
      <style jsx>{styleSheet}</style>
    </>
  )
}
