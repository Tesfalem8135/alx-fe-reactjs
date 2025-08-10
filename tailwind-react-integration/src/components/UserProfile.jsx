
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
export default function UserProfile() {
  return (
    <div className="mx-auto p-4 sm:p-4 md:p-8 max-w-xs md:max-w-sm bg-white rounded-xl shadow-md flex flex-col items-center space-y-4">
      {/* Profile Image */}
      <img
        src="/profile.jpg"
        alt="User Profile"
        className="rounded-full w-24 h-24 md:w-36 md:h-36 object-cover"
      />

      {/* User Info */}
      <div className="text-center">
        <h2 className="font-bold text-lg md:text-xl">John Doe</h2>
        <p className="text-gray-600 text-sm md:text-base">
          Software Developer at Example Inc. Passionate about building great user experiences and writing clean code.
        </p>
      </div>
    </div>
  );
}
}

export default UserProfile;