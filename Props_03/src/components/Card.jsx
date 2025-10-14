
const Card = (props) => {
   
  return (
    
       <div className="Card">
          <img src={props.img} alt="profiles"/>
          <h1><u>{props.user}</u></h1>
          <p>{props.Discription}</p>
          <pre>{props.age}</pre>
          <button className="button">View Profiles</button>
     </div>
  )
}

export default Card
