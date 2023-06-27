import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Home Page</div>
      <button onClick={() => navigate("orderSummary")}>Place Order</button>
    </>
  );
};

export default Home;
