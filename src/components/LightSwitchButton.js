import {useState} from 'react'; //optional

  function LightSwitchButton(){
    const [light, setLight] = useState("off");
    return (
      <button className="LightSwitchButton">
        {light === 'on' && <span className="on"><i>💡</i> I'm on!</span>}
        {light === 'off' && <span className="off"><i>💡</i> I'm off!</span>}
      </button>
    );
  }

  export default LightSwitchButton;
  