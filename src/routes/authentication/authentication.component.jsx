import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

import "./authentication.style.scss";

const Authentication = () => {
  // useEffect(() => {
  //   async function fetchRedirectData() {
  //     // You can await here
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //       console.log(userDocRef);
  //     }
  //     // ...
  //   }
  //   fetchRedirectData();
  // }, []);
  // const signUpgoogle = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  //   console.log(userDocRef.exists());
  // };
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
      {/* <button onClick={signUpgoogle}>login with google Pop up</button> */}
      {/* <button onClick={signInWithgoogleRedirect}>
        login with google Redirect
      </button> */}
    </div>
  );
};

export default Authentication;
