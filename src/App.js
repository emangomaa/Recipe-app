import React,{useState,useEffect} from "react";
import Recipe from "./Recipe";

const App = ()=> {

  //get API ID and KEY
  const APP_ID = "9bafda05";
  const APP_KEY = "aed23c425dc7be22afe6c8b018baa0ea";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`


  const [recipes,setRecipes] = useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery] = useState('chicken');


  useEffect( ()=>{
    getRecipes();
  },[query]);


  //fetch API Data
  const getRecipes = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
  }

  //after get search from input field 
  //set the value to query value
   const getSearch = (e)=>{
    e.preventDefault();
    setQuery(search)
    setSearch('')
   }
  return (
    <>
      <div className="container text-center p-5">
        <div className="row text-center">
          <div className="col-12">
            <h1>Search What Your Favorite Meal ?</h1>
          </div>
        </div>
        <div style={{justifyContent:"center"}} className="row my-4">
          <form onSubmit={getSearch} className="col-12 text-center mb-5">
            <input style={{outline:"none",border:"1px solid #ddd",borderRadius:"5px"}} className="w-50 p-2" type="text" value={search} onChange={e => setSearch(e.target.value)}/>
            <button style={{border:"1px solid #ddd",width:"100px"}} className="p-2" type="submit">Search</button>
          </form>
        </div>
        <div style={{justifyContent:"space-around"}} className="row mt-5">
          {recipes.map((recipe,index) =>(
                  <Recipe key={index} label={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} mealType={recipe.recipe.mealType}alt={query}/>
                ))}
        </div>
      </div>
    </>
  );
}

export default App;
