import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons';
function InputSearch(props) {
    const Changer=(e)=>{
        props.setFilter(e.target.value)
    }
    const Changerr=(e)=>{
      props.setFrate(e.target.value)
  }
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faMagnifyingGlass}  /></InputGroup.Text>
        <Form.Control
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
          onChange={(e)=>Changer(e)}
        />
        <InputGroup.Text id="basic-addon1"><FontAwesomeIcon icon={faStar} /></InputGroup.Text>
        <Form.Control
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
          onChange={(e)=>Changerr(e)}
        />
      </InputGroup>

    </>
  );
}

export default InputSearch;