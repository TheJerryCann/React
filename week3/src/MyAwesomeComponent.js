import Box from './Box';
import Text from './Text';
import Button from './Button';

const MyAwesomeComponent = () => {
  const handleClick = () => {
    alert('Button clicked');
  };

  return (
    <Box size="medium">
      <Text size="large" color="blue">
        This is a button
      </Text>
      <Button color="red" onClick={handleClick}>
        Click
      </Button>
    </Box>
  );
};

export default MyAwesomeComponent;