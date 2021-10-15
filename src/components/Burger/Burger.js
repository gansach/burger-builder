import React from "react";

import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  const ingredientsArray = Object.keys(props.ingredients)
    .map((ingredient) =>
      [...Array(props.ingredients[ingredient])].map((_, i) => (
        <BurgerIngredient key={ingredient + i} type={ingredient} />
      ))
    )
    .reduce(
      (ingredientsArr, ingredient) => ingredientsArr.concat(ingredient),
      []
    );

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientsArray.length === 0 ? (
        <p>Please start adding ingredients!</p>
      ) : (
        ingredientsArray
      )}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
