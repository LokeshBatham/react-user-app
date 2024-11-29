import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './usersSlice';
import { Link } from 'react-router-dom';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
    <h1 className='font-bold text-xl p-0 pb-4 sm:pr-6 sm:pl-6 sm:pb-0'>User List</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-0 sm:p-6">
       
      {users.map((user) => (
        <Link key={user.id} to={`/user/${user.id}`}>
          <div className="p-4 bg-white shadow-md rounded-md hover:shadow-lg">
            <h3 className="font-semibold text-lg">{user.name}</h3>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.company.name}</p>
          </div>
        </Link>
      ))}
    </div>
    </>
  );
};

export default UserList;
