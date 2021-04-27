import User from "./User";

const Users = ({ users }) => {
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
