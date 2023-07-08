import { useEffect, useState } from "react";
import "./App.css";
import { getPosts, getRandomUser } from "./api/index";
import PostCard from "./component/PostCard";
import UserCard from "./component/UserCard";

function App() {
  const [data, setData] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getPosts().then((posts) => {
      setData(posts);
    });
  }, []);

  useEffect(() => {
    getRandomUser().then((user) => {
      setUserData(user.results[0]);
    });
  }, []);

  const refresh = () => {
    getRandomUser().then((user) => {
      setUserData(user.results[0]);
    });
  };
  return (
    <div className="App">
      {userData && <UserCard data={userData} />}
      <button onClick={refresh}>Refresh User</button>
      {data ? (
        data.map((e) => <PostCard title={e.title} body={e.body} />)
      ) : (
        <p>No Data</p>
      )}
    </div>
  );
}

export default App;
