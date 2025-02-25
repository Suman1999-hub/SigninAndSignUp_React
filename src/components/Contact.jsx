import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("formFields"));
    const isAdminUser = localData?.find(
      (user) => user.isLogin === true && user.isAdmin === true
    )
      ? true
      : false;

    setIsAuthorized(isAdminUser);
  }, []);
  return (
    <>
      {!isAuthorized ? (
        <h1 style={{ color: "aqua" }}>Contact Us</h1>
      ) : (
        navigate("/")
      )}
    </>
  );
}

export default Contact;
