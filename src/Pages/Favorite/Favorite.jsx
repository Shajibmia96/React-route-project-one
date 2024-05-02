import { useEffect, useState } from "react";
import FavoriteCard from "../../Components/FavoriteCard/FavoriteCard";


const Favorite = () => {

    const [favorite , setFavorite] = useState([])
    const [notFount , setNotFount] = useState(false)
    const [isShow, setIsShow] = useState(false)
    const [totalPrice , setTotalPrice] = useState(0)

    useEffect(()=>{
            const favoritesItems = JSON.parse(localStorage.getItem('favorites'))
            if(favoritesItems){
                 setFavorite(favoritesItems)
                 const Total = favoritesItems.reduce((prePrice,currentValue)=> prePrice + currentValue.price ,0)
                 setTotalPrice(Total)
            }else{
                setNotFount('No Data Fount')
            }
    } , []);

     const handlesRemove = () =>{
          localStorage.clear()
          setFavorite([])
          setNotFount('No Data Fount')
     }
     console.log("Show details")
    return (
        <div>
           {
            notFount ? <h1 className="text-2xl flex justify-center items-center h-screen">{notFount}</h1> : <div>

                {
                    favorite.length > 0 && <div >
                                  <h1>Total price : {totalPrice}</h1>
                                  <button 
                       onClick={handlesRemove}
                      className="px-4 bg-orange-100 block mx-auto">Delete all favorite </button>
                        </div>
                }
                  
                <div className=" py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-10">
                     {
                        isShow ? favorite.map(phone => <FavoriteCard key={phone.id} phone={phone}></FavoriteCard> )
                        :
                        favorite.slice(0,3).map(phone => <FavoriteCard key={phone.id} phone={phone}></FavoriteCard> )
                     }
                </div>
            </div>
           }

                     {
                        favorite.length > 3 && <button                        
                        onClick={()=>setIsShow(!isShow)}
                       className="px-4 bg-orange-100 block mx-auto">
                           {
                               isShow ? 'Show less' : 'Show more'
                           } 
                       </button>
                     }
        </div>
    );
};

export default Favorite;