import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Trailer from './Trailer';


function MovieCard(props) {
    let arr = []
    for (let i = 0; i< props.Rate; i++) 
    { 
       arr[i]=1
    }
    
    
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
        
        <Link to={`/Trailer/${props.Id}`}><Button variant="primary" >see the Trailer</Button></Link>

      </Card.Body>
    </Card>
    
  );
}

export default MovieCard;