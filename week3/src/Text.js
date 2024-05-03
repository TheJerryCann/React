const Text = ({size = 'medium', color = 'black', children}) => {
    let textSize = '';
    if (size === 'small') {
      textSize = 'text-small';
    }
    else if (size === 'medium') {
        textSize = 'text-medium'; 
    }
    else if (size === 'large') {
        textSize = 'text-large';
    }
    return (
      <p className={`text text-${size}`} style={{color}}>
        {children}
      </p>
    );
  };
  
  export default Text;