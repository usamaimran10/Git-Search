import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getUserDetail } from "./api/user";
import Loader from "./Loader";

function Profile() {
  const params = useParams();
  const { data, isLoading } = useQuery(["userDetail"], async () => {
    const data = await getUserDetail(params.userName);
    return data;
  });
  React.useEffect(() => {
    console.log(data);
  });
  return (
    <>
      {isLoading ? (
        <div style={{ height: "100vh" }}>
          <Loader />
        </div>
      ) : (
        <>
          <div className="main">
            <div>
              <img className="profile" src={data?.avatar_url} alt="N/A" />
            </div>
            <div className="box1">
              <div>
                <h2 className="h2">{data?.login}</h2>
              </div>
              <div>
                <a href={data?.html_url} target="_blank">
                  <button className="button">Visit Github Profile</button>
                </a>
              </div>
              <div className="box2">
                <div className="smallCard">
                  <h1 className="city">
                    {data?.location === null ? "Null" : data?.location}
                  </h1>
                </div>
                <div className="smallCard">
                  <h1 className="city">{data?.blog ? data?.blog : "Null"}</h1>
                </div>
                <div className="smallCard">
                  <h1 className="city">
                    {data?.twitter_username === null
                      ? "Null"
                      : data?.twitter_username}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="section1">
              <div>
                <h3>Followers</h3>
                <h2>{data?.followers}</h2>
              </div>
              <div>
                <img
                  className="img"
                  src="/images/users-solid.png"
                  alt="dummy"
                />
              </div>
            </div>
            <div className="section1">
              <div>
                <h3>Following</h3>
                <h2>{data?.following}</h2>
              </div>
              <div>
                <img
                  className="img"
                  src="/images/user-friends-solid.png"
                  alt="dummy"
                />
              </div>
            </div>

            <div className="section1">
              <div>
                <h3>Public Repos</h3>
                <h2>{data?.public_repos}</h2>
              </div>
              <div>
                <img className="img" src="/images/box.png" alt="dummy" />
              </div>
            </div>

            <div className="section1">
              <div>
                <h3>Public Gists</h3>
                <h2>{data?.public_gists}</h2>
              </div>
              <div>
                <img className="img" src="/images/cube.png" alt="dummy" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Profile;
