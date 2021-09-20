function Random(props) {
    const min = props.min;
    const max = props.max;
    const random = Math.floor(Math.random() * (max - min) + min);

    return (
        <div className="random">
         Random value between {min} and {max} => {random}
        </div>
    );
  }
  
  export default Random;