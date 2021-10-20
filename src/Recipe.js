import React from 'react';
const Recipe = ({label,calories,image,mealType,alt})=>{

    return(
            <div style={{height:"fit-content",width:"400px",textAlign:"center",borderRadius:"10px",border:"1px solid #ccc",boxShadow:"0 5px 15px rgb(90,90,90)"}} className="col-10 col-md-5 col-lg-4 mb-4 p-4">
                <h1 className="py-4">{label}</h1>
                <p>Calories :{calories}</p>
                <p>Meal : {mealType}</p>
                <img style={{width:"40%",height:"40%",borderRadius:"10px"}} src={image}  alt={alt}></img>
            </div>   
)
}
export default Recipe;
