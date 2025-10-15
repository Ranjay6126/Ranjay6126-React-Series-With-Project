import { Bookmark } from "lucide-react";


const Card = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img
            src="https://imgs.search.brave.com/v93cWjhaSlTSUmaHnibH54EXUPveHF_BrSizq3ou_WY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGVtaWEub3JnL2Nv/bnRlbmlkby9zdWJp/ZGFzLzIwMjIvMTEv/dGlwb2dyYWZpYS15/LXBhbGV0YS1kZS1j/b2xvci0xMDI0eDU3/Ni5wbmc"
            alt=""
          />
          <button>
            Save <Bookmark size={20} />
          </button>
        </div>

        <div className="center">
          <h3><b>Amazon</b></h3>
          <span>5 days ago</span>
          <h2 className="uiux">Senior UI/UX Designer</h2>

          <div className="tag">
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>

          <div className="bottom">
  <div className="bottom-left">
    <h3>$120/hr</h3>
    <p>Mumbai, India</p>
  </div>
  <button>Apply Now</button>
</div>

        </div>
      </div>
    </div>
  );
};

export default Card;
