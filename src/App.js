import React,{useState,useEffect} from "react";
import Recipe from "./Recipe";

const App = ()=> {

  const APP_ID = "9bafda05";
  const APP_KEY = "aed23c425dc7be22afe6c8b018baa0ea";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [recipes,setRecipes] = useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery] = useState('chicken');


  useEffect( ()=>{
    getRecipes();
  },[query]);

  const getRecipes = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
  }
   const getSearch = (e)=>{
    e.preventDefault();
    setQuery(search)
    setSearch('')
   }
  return (
    <div style={{justifyContent:"center" ,padding:"100px 30px 50px"}} className="row">
      <form onSubmit={getSearch} className="col-8 col-md-6 text-center mb-5">
        <input style={{outline:"none",border:"1px solid #ddd",borderRadius:"5px"}} className="w-50 p-2" type="text" value={search} onChange={e => setSearch(e.target.value)}/>
        <button style={{border:"1px solid #ddd"}} className="w-25 p-2" type="submit">Search</button>
      </form>
      <div style={{justifyContent:"space-around"}} className="row mt-5">
      {recipes.map((recipe,index) =>(
        <Recipe key={index} label={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} mealType={recipe.recipe.mealType}alt={query}/>
      ))}
      </div>
    </div>
  );
}

export default App;
