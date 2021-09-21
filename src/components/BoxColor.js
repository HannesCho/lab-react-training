function BoxColor(props) {
    const r = props.r;
    const g = props.g;
    const b = props.b;
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
      
    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }
    const hex = rgbToHex(r, g, b)
    return (
        <div className="boxcolor" style={{
            backgroundColor: `rgb(${r}, ${g}, ${b})`
        }}>
            rgb({r}, {g}, {b})<br />
            {hex}
        </div>
    );
  }
  
  export default BoxColor;