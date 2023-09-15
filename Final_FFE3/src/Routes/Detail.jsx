import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";




const Detail = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchUserData = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        console.error("Error fetching user data");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [id]);



  return (
    <>
    <div className="detailDentist">
      <h1>Detalle del dentista </h1>
      <div className="detailCard">
        <p>Name: {userData.name}</p>
        <p>E-mail: {userData.email}</p>
        <p>Phone: {userData.phone}</p>
        <p>Website: {userData.website}</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>

    </div>
    </>
  )
}

export default Detail

