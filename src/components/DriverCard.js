import Rating from './Rating'

function DriverCard(props) {
    console.log(props);
    const { name, rating, img, car } = props;
    console.log(car);
    return (
        <div className="driverCard">
            <img className='d-left' src={ img } />
            <div className="d-right">
                <h2>{ name }</h2>
                <Rating>{ rating }</Rating>
                <p>
                    {car.model} - {car.licensePlate}
                </p>
            </div>
        </div>
    );
  }
  
  export default DriverCard;