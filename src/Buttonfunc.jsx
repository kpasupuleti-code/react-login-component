
function Buttonfunc(props){
    const length = /.{8,}/;
    const upperLetter = /[A-Z]/;  
    const lowerLetter = /[a-z]/;
    const special = /[!@#$%^&*]/;
  
    let strengthscore = 0;
    if(length.test(props.password)) strengthscore++;
    if(upperLetter.test(props.password)) strengthscore++;
    if(lowerLetter.test(props.password)) strengthscore++;
    if(special.test(props.password)) strengthscore++;
    
    if(strengthscore===1) props.setopacity(0.2);
    else if(strengthscore===2) props.setopacity(0.4);
    else if(strengthscore===3) props.setopacity(0.6);
    else props.setopacity(1);

    return null;
}
export default Buttonfunc;