import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './usersSlice';
import { Link } from 'react-router-dom';

let sort1;

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  // State to track the search query
  const [searchQuery, setSearchQuery] = useState('');
  const [displayedUsers, setDisplayedUsers] = useState([]);

  useEffect(() => {
    dispatch(fetchUsers());
    console.log("5",users)
    
  }, [dispatch]);

  useEffect(() => {
    setDisplayedUsers(users)
  },[users])

  const searchByName = (e) => {
    setSearchQuery(e.target.value)
     // Filter users based on the search query
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  setDisplayedUsers(filteredUsers)
  }
 

  const sortEmail = () => {
    sort1 =  [...users]
    sort1.sort((fir, sec) =>  {
      if(fir.email.toLowerCase() < sec.email.toLowerCase()) {
        return -1
      } else if (fir.email.toLowerCase() > sec.email.toLowerCase()) {
        return 1
      } else {
        return 0
      }
    } )
    console.log(sort1)
    setDisplayedUsers(sort1)
    // dispatch(sort(sort1))

    
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1 className="font-bold text-xl p-0 pb-4 sm:pr-6 sm:pl-6 sm:pb-0">User List</h1>

      {/* Search Bar */}
      <div className="p-0 pb-4 sm:p-6 sm:pb-0">
        <input
          type="text"
          placeholder="Search by name or email"
          className="w-auto p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => searchByName(e)}
        />

        <button style={{background:"rgb(37 99 235)", padding:"8px", borderRadius:"10px" }} className='ml-2' onClick={() => sortEmail()} >sort</button>
      </div>

      {/* User Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-0 sm:p-6">
        { displayedUsers.map((user) => (
          <Link key={user.id} to={`/user/${user.id}`}>
            <div className="p-4 bg-white shadow-md rounded-md hover:shadow-lg">
              <h3 className="font-semibold text-lg">{user.name}</h3>
              <p>{user.email}</p>
              <p>{user.phone}</p>
              <p>{user.company.name}</p>
            </div>
          </Link>
        ))
        }

        {/* No results found message */}
        {displayedUsers.length === 0 && (
          <p className="col-span-full text-center text-gray-500">No users found.</p>
        )}
      </div>
    </>
  );
};

export default UserList;
