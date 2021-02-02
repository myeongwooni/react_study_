import React from 'react';
import PropTypes from "prop-types";

function Food({name, picture, rating}){
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name}/>
  </div>
}

const FoodILike = [
  {
    id:1,
    name: "pasta",
    image: "https://i2.wp.com/fullofplants.com/wp-content/uploads/2019/09/Cheesy-Tikka-Masala-Pasta-Bake-vegan-indian-one-skillet-recipe-thumb-3.jpg?fit=1400%2C1400&ssl=1",
    rating: 5
  },
  
  {
    id:2,
    name: "ramen",
    image: "https://i1.wp.com/seonkyounglongest.com/wp-content/uploads/2020/09/Easy-Tonkotsu-26-mini.jpg?fit=1000%2C667&ssl=1",
    rating: 4.5
  },
  
  {
    id:3,
    name: "chicken",
    image: "https://lh3.googleusercontent.com/proxy/RwwRZ8nIjO_3VGaLOuM2eCVZmMGjuiegInXZUmGUaQ4oGF9h4zvlfLBUOUEmzeN6AbdHwuZTRgd3dXYk1dt0uf5SRYG_aUo0LZtWGxuFjNZwO27UFo2ojfpo2hrsziGAY5D7xp0Oud9J3CXIfzK8yrq3xxWUPmhZZliIam2INMewp-mZXyVKV9jR_dDmNL2qEg098R1-IE1kQ6Y6Sg1xBHcUg1UjHB62uRDWhPI86qWU3FaNvLA9wePXUw-hIeS4dzguY6pNsLwQ6ibkHPHTGU3v7vt3w83qKBiwlyKMzKE",
    rating: 5
  },

  {
    id:4,
    name: "pizza",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/14/7d/2a/cf/img-20180906-181850-01.jpg",
    rating: 3
  }
];

Food.propTypes={
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function renderFood(dish){
  console.log(dish);
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>;
}

function App() {
  return (
    <div>
      {FoodILike.map(renderFood)}
    </div>
  );
}

export default App;
