import { CSSProperties, useState } from "react";
import img from './../assets/react.svg';
const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);

  const loginHandler = () => setIsLoggedin(!isLoggedin);

  const style: CSSProperties = {
    textAlign: 'end',
    padding: '2px 10px'
  }
  return (
    <header style={style}>
      {isLoggedin ? (
        <img onClick={loginHandler} src={img} /> 
      ) : (
        <button onClick={loginHandler}>Login</button>
      )}
    </header>
  );
};
export default Header;
