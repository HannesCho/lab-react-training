function CreditCard(props) {
    const { type, bank, owner, bgColor, color, expirationMonth, expirationYear } = props;
    const number = '•••• •••• •••• ' + props.number.slice(12);
    let img = '';
    if (type === 'Visa') {
        img = '/img/visa.png'
    } else if (type === 'Master Card') {
        img = '/img/master-card.svg'
    } else {
        img = null;
    }

    return (
        <div className="creditcard" style={{
            backgroundColor: bgColor,
            color : color
        }}>
            <div className="type">
                <img src = {img} height="20px"/>
            </div>
            <div className="number">
                {number}
            </div>
            <div className="expires-bank">
                <span>Expires {expirationMonth}/{expirationYear}</span>
                <span className="bank">{bank}</span>
            </div>
            <div className="owner">{owner}</div>
        </div>
    );
  }
  
  export default CreditCard;