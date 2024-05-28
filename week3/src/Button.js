const Button = ({color = 'blue', onClick, children}) => {
    return (
      <button className="button" style={{backgroundColor: color}} onClick={onClick}>
        {children}
      </button>
    );
  };
  
  export default Button;