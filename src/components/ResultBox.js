export default function ResultBox({result, category, setSubmitState}){
  return(
    <div className='box-main result-box'>
      <div className='result-emoji'>
        { category.emoji }
      </div>
      <div>
        작명 결과
      </div>
      <div className='input result-text fw-b'>
        {result}
      </div>
      <div className='box-submit'>
        <button 
          className={`btn btn-submit btn-${category.color} text-bright fw-b`}
          onClick={()=>setSubmitState(0)}
        >
          다시 짓기
        </button>
      </div>
    </div>
  )
}