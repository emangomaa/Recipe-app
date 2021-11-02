import React from 'react';
const Recipe = ({label,calories,image,mealType,alt})=>{

    return(
            <div style={{height:"fit-content",width:"300px" ,textAlign:"center",borderRadius:"10px",border:"1px solid #ccc",boxShadow:"0 5px 15px rgb(90,90,90)"}} className="col-12 col-sm-6 col-md-4 mb-4 p-4">
                <div style={{justifyContent:"center"}} className="row">
                    <h2>{label}</h2>
                    <p>Calories :{calories.toFixed(2)}</p>
                    <p>Meal : {mealType}</p>
                    <div style={{width:"200px"}}>
                        <img style={{width:"100%",height:"100%",borderRadius:"10px"}} src={image}  alt={alt}/>
                    </div>
                    
                </div>
            </div>
)
}
export default Recipe;
