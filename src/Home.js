import { getUser } from "./api/user";
import "./App.css";
import * as React from "react";
import { useQuery } from "@tanstack/react-query";
import Card from "./Card";
import Loader from "./Loader";

const Home = () => {
  const [user, setUser] = React.useState("");
  const { data, isLoading, refetch } = useQuery(
    ["users"],
    async () => {
      const res = await getUser({ queryParams: { q: user, per_page: 3000 } });
      return res;
    },
    {
      enabled: false,
    }
  );
  React.useEffect(() => {
    if (user) {
      refetch();
    }
  }, [data, user]);
  return (
    <>
      <div>
        <h1 className="heading">Enter the GitHub User_Name :</h1>
        <input
          type="text"
          placeholder="Search.."
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              setUser(event.target.value);
            }
          }}
        />
      </div>
      {user && isLoading ? (
        <div style={{ height: "60vh" }}>
          <Loader />
        </div>
      ) : (
        <>
          <div className="container">
            {data?.items?.map(({ avatar_url, login, id }, index) => {
              return (
                <Card id={id} imgSrc={avatar_url} key={index} name={login} />
              );
            })}

            {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
