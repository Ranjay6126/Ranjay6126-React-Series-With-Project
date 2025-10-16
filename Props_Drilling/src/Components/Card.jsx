import { Bookmark } from "lucide-react";


const Card = (props) => {

  console.log(props)

  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img src={props.logo} alt="" />
          <button>
            Save <Bookmark size={20} />
          </button>
        </div>

        <div className="center">
          <h3><b>{props.company}</b></h3>
          <span>{props.date}</span>
          <h2 className="uiux">{props.post}</h2>

          <div className="tag">
            <h4>{props.tag}</h4>
            <h4>{props.Tag}</h4>
          </div>

          <div className="bottom">
  <div className="bottom-left">
    <h3>${props.Pyment}</h3>
    <p>📍{props.Location}</p>
  </div>
  <button>Apply Now</button>
</div>

        </div>
      </div>
    </div>
  );
};

export default Card;
