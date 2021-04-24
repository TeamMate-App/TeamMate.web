import User from "./User";


const Users = ({ users }) => {
  console.log(users);

  console.log(users.length > 0);

  return (
    <>
      {users.length > 0 ? (
        users.map((eve) => <User {...eve} key={eve.id} />)
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Users;
