import React from 'react'
import { Button } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

const Trailer = ({Data}) => {
    const{id}=useParams()
     const movie=Data.filter(el=>el.id==id)
     console.log(movie)
  return (
    <div>
        <p>Description:</p><p>{movie[0].description}</p>
       <iframe src={movie[0].trailer} title='name'/>
       <Link to={-1}><Button>Go back</Button></Link>
    </div>
  )
}

export default Trailer