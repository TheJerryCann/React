const Box = ({size = 'medium', children}) => {
    let sizeClass = '';
    if (size === 'small') {
      sizeClass = 'small';
    }
    else if (size === 'medium') {
        sizeClass = 'medium'; 
    }
    else if (size === 'large') {
      sizeClass = 'large';
    }
  
    return (
      <div className={`box ${sizeClass}`}>
        {children}
      </div>
    );
  };
  
  export default Box;