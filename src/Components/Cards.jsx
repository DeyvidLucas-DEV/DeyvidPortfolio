import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//PRECISA RESOLVER ESTE PROBLEMA

function BasicExample(props) {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={props.Image} />
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
          {props.Description}
        </Card.Text>
        <Button variant="primary">Saiba mais</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;