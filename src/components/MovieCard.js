import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function MovieCard(props) {
    let arr = []
    for (let i = 0; i< props.Rate; i++) 
    { 
       arr[i]=1
    }
    const ouvreLien = () => {
      window.open(props.Url, '_blank');
    };
    
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={props.Poster} />
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
          <div>
          {props.Description}
          </div>
          <div style={{display:"flex",justifyContent:"center"}}>
            {arr.map(el=><FontAwesomeIcon icon={faStar} />)}
          </div>
        
        </Card.Text>
        
        <Button variant="primary" onClick={()=>{ouvreLien()}}>see the Trailer</Button>

      </Card.Body>
    </Card>
  );
}

export default MovieCard;