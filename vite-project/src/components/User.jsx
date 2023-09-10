const User = ({ user }) => {
  return (
    <div>
      <h2>Password:{user.password}</h2>
      <p>Email: {user.email}</p>
      <p>Phone Number: {user.phoneNumber}</p>
      <p>Last Name: {user.lastName}</p>
      <p>First Name: {user.firstName}</p>
      <p>ID: {user._id}</p>
    </div>
  );
};

export default User;
