import { Outlet, useSearchParams } from "react-router-dom";

export const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUser = searchParams.get("filter") === "active";
  /*
    searchParams -> Object searchParams
    setSearchParams -> function - to set searchParams
    /*/
  return (
    <div>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {showActiveUser ? <h2>Show active users</h2> : <h2>Show all users</h2>}
    </div>
  );
};
