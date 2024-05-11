import React from 'react'
import { useParams } from 'react-router-dom'
import { campcar } from '../mockdate/mockdata';
import { tuningcar } from '../mockdate/tuningmock';

const Itemreviewscomponent = () => {
    const {id} = useParams();
    const db = tuningcar.maindata.find(
        (value)=>value.id === parseInt(id)
    );
    console.log(db);
  return (
    <>
    
    </>
  )
}

export default Itemreviewscomponent