class MakeText{
  constructor(category){
    this.text = category.text;
    this.type = category.type;
  }
  buttonText = () => {
    if(this.type===-1){
      return '이름 짓기'
    }
    if(this.type===0){
      return `${this.text} 짓기`
    }
    return `${this.text} 이름 짓기`
  }
  detailExplainText = () => {
    const baseExplain = '설명을 입력해 주세요'
    return(
      this.type<0?baseExplain:this.text+'에 대한 '+baseExplain
    );
  }
  commandText = (detail, include) => {
    let baseCommand = ''
    if(this.type===0){
      baseCommand = `${this.text}을 한글로 추천해주세요.\n`
    }
    else if(this.type===1){
      baseCommand = `${this.text} 한글 이름을 추천해주세요.\n`
    }
    else{
      baseCommand = '한글 이름을 아무거나 추천해주세요.\n'
    }
    return(
      include?
      baseCommand+`설명: ${detail}.\n포함되어야 하는 문자열:${include}.\n\n`:
      baseCommand+`설명: ${detail}\n`
    )
  }

}
export default MakeText;