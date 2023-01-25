import "../css/login.css";
//import firebase from "firebase/compat/app";
import { auth, provider } from "../app/firebase";
import { useDispatch } from "react-redux";
import { signin } from "../features/userSlice";
//import { Provider } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();
  // console.log(auth, provider);
  const login = () => {
    // auth.signInWithPopup(provider).then((user) => {
    //   console.log(user);
    // });
    auth.signInAnonymously().then((user) => {
      console.log(user.var);
      dispatch(signin(user));
    });
  };
  return (
    <div className="loginwrapper">
      <div className="login">
        <img
          alt="Gmail"
          src="https://cdn.vox-cdn.com/thumbor/poDiPWB_ZM1VtgA-FclJVc-Hrl4=/0x0:1320x880/2000x1333/filters:focal(660x440:661x441)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
        />

        <button onClick={login} className="gmail_login">
          Login with Gmail
        </button>
      </div>
    </div>
  );
};
export default Login;
