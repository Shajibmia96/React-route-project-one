
import { useEffect, useState } from "react";


const useGetPhone = () => {
    
    const [getPhone , setGetPhone] = useState([])

    useEffect(()=>{
            fetch("/public/phone.json")
            .then(res=> res.json())
            .then(data => setGetPhone(data))
    },[])

    return [getPhone]
    
};

export default useGetPhone;