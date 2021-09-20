function Greetings(props) {
    const lang = props.lang;
    const name = props.children;
    let greetings = '';
    if (lang === 'de') {
        greetings = `Hallo ${name}`
    } else if (lang === 'en') {
        greetings = `Hello ${name}`
    } else if (lang === 'es') {
        greetings = `Hola ${name}`
    } else if (lang === 'fr') {
        greetings = `Bonjour ${name}`
    } else {
        greetings = 'hihi'
    }

    return (
        <div className="greetings">
           {greetings}
        </div>
    );
  }
  
  export default Greetings;