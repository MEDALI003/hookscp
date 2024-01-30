import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons'
function InputSearch(props) {
    const Changer=(e)=>{
        props.setFilter(e.target.value)
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
      </InputGroup>

    </>
  );
}

export default InputSearch;