import Phone from "../Phone/Phone";

const Phones = ({phones}) => {
    // console.log(phones)
    return (
        <div className="py-8">
               <h1 className="text-2xl text-center">Our all categories phones</h1>

               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-10">
                {
                    phones?.map((phone , idx) => <Phone key={idx} phone={phone}></Phone>)
                }
               </div>


        </div>
    );
};

export default Phones;