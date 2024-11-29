import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const UserDetail = () => {
  const { id } = useParams();
  const user = useSelector((state) =>
    state.users.users.find((user) => user.id.toString() === id)
  );

  if (!user) return <p>User not found.</p>;

  return (
    <div className="p-0 sm:p-6 sm:pt-0">
      <h1 className="font-bold text-xl mb-5">User Detail</h1>
      <div className="p-4 bg-white shadow-md rounded-md hover:shadow-lg">
        <h2 className="text-2xl font-semibold">{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <p>Address: {`${user.address.street}, ${user.address.city}`}</p>
        <p>Company: {user.company.name}</p>
      </div>
    </div>
  );
};

export default UserDetail;
