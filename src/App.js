 import { Recipes } from './recipe/recipe';
 import recipes from './recipeDetails';

 export default function App() {
     return(
      <table align='center' width='600'>
         <tr>
                {recipes.map(recipes => (
                    <Recipes 
                    key={recipes.id}
                   defaultBodyTextColor={recipes.defaultBodyTextColor}
                   bodyBackgroundColor = {recipes.bodyBackgroundColor}
                   cardBorderColor= {recipes.cardBorderColor}
                   bodyTextColor= {recipes.bodyTextColor}
                   defaultBodyBackground={recipes.defaultBodyBackground}
                   defaultBodyBackgroundColor = {recipes.defaultBodyBackgroundColor}
                   defaultCardBorderColor={recipes.defaultCardBorderColor}
                   recipeFullUrl={recipes.recipeFullUrl}
                   recipe_img={recipes.recipe_img}
                   recipe_label={recipes.recipe_label}
                   recipe_title={recipes.recipe_title}
                   recipe_description={recipes.recipe_description}
                />
                ))}
                </tr>
           </table>
     )
 }