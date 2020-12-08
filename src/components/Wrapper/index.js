
import "./style.css";

function Wrapper(props) {
  // children for the wrapper component is the title and 3 FriendCards
  return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;
