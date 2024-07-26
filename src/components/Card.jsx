import React from "react";

const Card = ({name, image, key}) => {
  return (
    <div>
      <div className="w-80 aspect-square drop-shadow-md shadow-md hover:shadow-xl transition-all duration-300 bg-orange-50 rounded-lg">
        <div className=" w-full h-full relative">
          <div className=" absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300"></div>
          <img
            // src="https://images.pexels.com/photos/24426275/pexels-photo-24426275/free-photo-of-young-blonde-woman-in-black-coat-sitting-and-smiling-in-sunlight.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            // src={image}
            src={'/pokemonUrl.png'}
            alt={name}
            className="object-cover items-center w-full h-full rounded-t-lg"
          />
        </div>
        <h2 className="px-2 py-2 text-xl font-bold text-slate-700 text-center uppercase">{name}</h2>
      </div>
    </div>
  );
};

export default Card;
