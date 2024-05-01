import swal from "sweetalert";


const PhoneCard = ({phone}) => {

    const {brand_name,rating,price,phone_name, image,id} = phone || {};

        const handlesAddTOFavorites=() =>{
             const addedFavoritesIArray = []
          const favoritesItems = JSON.parse(localStorage.getItem('favorites'))

           if(!favoritesItems ){
            addedFavoritesIArray.push(phone)
            localStorage.setItem('favorites', JSON.stringify(addedFavoritesIArray))
            swal("Good job!", "Product added successfully", "success", {
              button: "Aww yiss!",
            });
           }
           else{

            const isExist = favoritesItems.find(item => item.id === id)
            if(isExist){
              swal("Error", "can't added duplicate", "success", {
                button: "Aww yiss!",
              });
            }
            else{
              addedFavoritesIArray.push(...favoritesItems,phone)
              localStorage.setItem('favorites', JSON.stringify(addedFavoritesIArray))
              swal("Good job!", "You clicked the button!", "success", {
                button: "Aww yiss!",
              });
            }
            
           }


        //    if(addedItemsArray){
        //     addedItems.push(phone)
        //     localStorage.setItem('favorites' , JSON.stringify(addedItems))
        //     alert("Products added")
        //  }
        //  else{
        //     addedItems.push(...addedItemsArray,phone)
        //     localStorage.setItem( 'favorites',JSON.stringify(addedItems))
        //     alert('Products added')
        //  }

        }
         
        
    return (
        <div>
          <div className="flex justify-center items-center py-10">
          <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
  <div
    className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
    <img
      src={image}
      alt="card-image" className="object-cover w-full h-full" />
  </div>
  <div className="p-6">
    <h6
      className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
     {brand_name}
    </h6>
    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
     {phone_name}
    </h4>
  
    <a href="#" className="inline-block"><button
      onClick={handlesAddTOFavorites}
        className="flex items-center text-red-400 gap-2 px-6 py-3 font-sans text-xs font-bold text-center  uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button">
        Add to favorite</button></a>
  </div>
</div>  
          </div>
        </div>
    );
};

export default PhoneCard;