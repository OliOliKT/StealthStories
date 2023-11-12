import React from "react";
import "./LogInButtonAndText.css";

// function LogInButtonAndText() {
//   return (
//     <div className="logIn">
//       <div className="mail">
//         <p>E-mail</p>
//         <input className="inputMailAndPassword" />
//         <div className="password">
//           <p>Password</p>
//           <input className="inputMailAndPassword" />
//         </div>
//         <div className="logInBtn">
//           <button className="signIn">Log in</button>
//         </div>
//         <div className="noAccount">
//           <p>No account? No worries!</p>
//           <p>
//             <a className="createAccount" href="#">
//               Create one here
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

function LogInButtonAndText() {
  return (
    <div className="logIn">
      <div className="inputContainer">
        <div className="mail">
          <p>E-mail</p>
          <input type="email" className="inputMailAndPassword" />
        </div>
        <div className="password">
          <p>Password</p>
          <input type="password" className="inputMailAndPassword" />
        </div>
      </div>
      <div className="logInBtn">
        <button className="signIn">Log in</button>
      </div>
      <div className="noAccount">
        <p>No account? No worries!</p>
        <p>
          <a className="createAccount" href="#">
            Create one here
          </a>
        </p>
      </div>
    </div>
  );
}

export default LogInButtonAndText;
