function Rating(props) {
    const value = Math.round(props.children);
    let stars = '';
    stars = '★'.repeat(value)+'☆'.repeat(5-value)
    return (
        <div className="rating">
            {stars}
        </div>
    );
  }
  
  export default Rating;