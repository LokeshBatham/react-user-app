import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './usersSlice';
import { Link } from 'react-router-dom';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  // State to track the search query
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Filter users based on the search query
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1 className="font-bold text-xl p-0 pb-4 sm:pr-6 sm:pl-6 sm:pb-0">User List</h1>

      {/* Search Bar */}
      <div className="p-0 sm:p-6">
        <input
          type="text"
          placeholder="Search by name or email"
          className="w-auto p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* User Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-0 sm:p-6">
        {filteredUsers.map((user) => (
          <Link key={user.id} to={`/user/${user.id}`}>
            <div className="p-4 bg-white shadow-md rounded-md hover:shadow-lg">
              <h3 className="font-semibold text-lg">{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p>{user.company.name}</p>
            </div>
          </Link>
        ))}

        {/* No results found message */}
        {filteredUsers.length === 0 && (
          <p className="col-span-full text-center text-gray-500">No users found.</p>
        )}
      </div>
    </>
  );
};

export default UserList;
