const styleSheet = `
  @import url(https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@2.0/nanumsquare.css);
  body{ 
    font-family: 'NanumSquare', sans-serif;
    background-color: #fffdf8;
  }
  .fw-n		{ font-weight: 400 }
  .fw-b		{ font-weight: 700 }
  .fw-eb	{ font-weight: 800 }
  .fw-l		{ font-weight: 300 }
  
  .text-dark   { color: #363636 }
  .text-bright { color: #ffffff }

  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
  }
  .box-category{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 600px;
    flex-wrap: wrap;
  }
  .editor{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #ffffff;
    width: 600px;
    height: 400px;
    border-radius: 20px;
    box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    padding: 12px 24px;
    box-sizing: border-box;
  }
  .edit-box{
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 0px;
  }
  .explain{
    margin-left: 8px;
    font-size: 16px;
  }
  .edit-detail-box{
    display:flex;
    align-items: center;
    justify-content: space-between;
  }
  .category-emoji{
    font-size: 30px;
    margin-right: 10px;
  }
  .box-submit{
    height: 100px;
    margin-top: 32px;
  }
  .input{
    border: none;
    width: 100%;
    background: #F3F3F3;
    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 10px 20px;
    box-sizing: border-box;
  }
  .input-detail{
    height: 120px;
    padding: 20px;
  }
  .btn{
    cursor: pointer;
    font-family: 'NanumSquare', sans-serif;
    border: none;
    padding: 6px 12px;
    border-radius: 10px;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.2);
  }
  .btn-category{
    margin: 4px;
  }
  .btn-submit{
    font-size: 18px;
    border-radius: 30px;
    padding: 12px 24px;
  }
  .btn-pupple{
    background-color: #8E72FF;
  }
  .btn-mint{
    background-color: #1BC18F;
  }
  .btn-yellow{
    background-color: #F9A01B;
  }
  .btn-blue{
    background-color: #1BA9F9;
  }
  .btn-pink{
    background-color: #EB3984;
  }
  .btn-gray{
    background-color: #616161;
  }
`

export default styleSheet;