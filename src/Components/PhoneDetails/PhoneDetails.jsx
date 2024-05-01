import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Details from "../Details/Details";
import PhoneCard from "../PhonesCard/PhoneCard";

const PhoneDetails = () => {
    
    const [phone,setPhone] = useState({})
    const {id} = useParams();
   
    const phones = useLoaderData()
    
    useEffect(()=>{
    
        const findPhone = phones?.find(phone => phone.id === id)
        setPhone(findPhone)
     
    } ,[id, phone]);

    
    // console.log(phone)
    return (
        <div>
              <Details></Details>
              <PhoneCard phone={phone}></PhoneCard>
        </div>
    );
};

export default PhoneDetails;