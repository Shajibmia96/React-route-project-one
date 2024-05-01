import { useEffect, useState } from "react";
import FavoriteCard from "../../Components/FavoriteCard/FavoriteCard";


const Favorite = () => {

    const [favorite , setFavorite] = useState([])
    const [notFount , setNotFount] = useState(false)

    useEffect(()=>{
            const favoritesItems = JSON.parse(localStorage.getItem('favorites'))
            if(favoritesItems){
                 setFavorite(favoritesItems)
            }else{
                setNotFount('No Data Fount')
            }
    } , []);

     const handlesRemove = () =>{
          localStorage.clear()
          setFavorite([])
          setNotFount('No Data Fount')
     }
    return (
        <div>
           {
            notFount ? <h1 className="text-2xl flex justify-center items-center h-screen">{notFount}</h1> : <div>

                {
                    favorite.length > 0 && <button 
                     onClick={handlesRemove}
                    className="px-4 bg-orange-100 block mx-auto">Delete all favorite </button>
                }
                  
                <div className=" py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10">
                     {
                        favorite.map(phone => <FavoriteCard key={phone.id} phone={phone}></FavoriteCard> )
                     }
                </div>
            </div>
           }
        </div>
    );
};

export default Favorite;