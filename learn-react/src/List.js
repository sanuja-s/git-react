
const content = "Cybersquare professional";
const obj = {"title":"Cybersquare", "name" : "baabtra"};
const courses = ["Python", "PHP" , "Angular" , "React"];

function List(){
    return(
        <div>
            <h1>{content}</h1>
            <p>
                {obj.title} courses provided by {obj.name}
            </p>
            <ul>
                {
                courses.map(function(item, index){                                      
                  return (<li>{item}</li>);
                })
                }
            </ul>
        </div>
    );
}

export default List;