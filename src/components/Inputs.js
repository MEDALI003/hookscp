import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function Inputs(props) {
    const changeId=(e)=>{
        props.setId(e.target.value)
    }
    const changetitle=(e)=>{
        props.setTitle(e.target.value)
    }
    const changeurl=(e)=>{
        props.setUrl(e.target.value)
    }
    const changepos=(e)=>{
        props.setPoster(e.target.value)
    }
    const changerate=(e)=>{
        props.setRate(e.target.value)
    }
    const changedesc=(e)=>{
        props.setDescription(e.target.value)
    }
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">ID</InputGroup.Text>
        <Form.Control
          placeholder="ID"
          aria-label="ID"
          aria-describedby="basic-addon1"
          onChange={(e)=>changeId(e)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Title"
          aria-label="Title"
          aria-describedby="basic-addon2"
          onChange={(e)=>changetitle(e)}
        />
        <InputGroup.Text id="basic-addon2">Title</InputGroup.Text>
      </InputGroup>

      
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          https://example.com
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3"  onChange={(e)=>changeurl(e)}/>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon3">
          link of the poster
        </InputGroup.Text>
        <Form.Control id="basic-url" aria-describedby="basic-addon3" onChange={(e)=>changepos(e)} />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">rate</InputGroup.Text>
        <Form.Control
          placeholder="rate"
          aria-label="rate"
          aria-describedby="basic-addon1"
          onChange={(e)=>changerate(e)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">rate</InputGroup.Text>
        <Form.Control
          placeholder="description"
          aria-label="description"
          aria-describedby="basic-addon1"
          onChange={(e)=>changedesc(e)}
        />
      </InputGroup>
    </>
  );
}

export default Inputs;