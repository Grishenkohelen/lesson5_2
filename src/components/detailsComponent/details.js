import React,{useState} from 'react';
import {useParams} from "react-router-dom";

const Details = () => {
    const params = useParams()
    console.log(params);

    const [user, setUser] = useState([])




    return (
        <div>
            detil
        </div>
    );
};

export default Details;