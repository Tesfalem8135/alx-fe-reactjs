
function UserProfile() {
  return (
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-36 h-36 mx-auto"
      />
      <h1 className="text-xl text-blue-800 my-4">John Doe</h1>
      <p className="text-gray-600 text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
 function UserProfile({ name, email, imageUrl }) {
  return (
    <div className="max-w-xs sm:max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden p-4 sm:p-6 md:p-8">
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <img 
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full object-cover"
          src={imageUrl}
          alt={`Profile of ${name}`}
        />
        <div className="text-center sm:text-left">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
            {name}
          </h2>
          <p className="text-sm sm:text-base text-gray-500">
            {email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;