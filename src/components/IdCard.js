function IdCard(props) {
    const height = `${(props.height/100).toFixed(2)}m`
    const birth = props.birth.toDateString().slice(4);
    console.log(birth.slice(4));

    return (
        <div className="idcard">
            <div className="left">
                <img src={props.picture} alt="Image"/>  
            </div>
             <div className="right">
                <strong>First name</strong>: {props.firstName}<br />
                <strong>Last name</strong>: {props.lastName}<br />
                <strong>Gender</strong>: {props.gender}<br />
                <strong>Height</strong>: { height }<br />
                <strong>Birth</strong>: {birth}
            </div> 
          </div>
    );
  }
  
  export default IdCard;