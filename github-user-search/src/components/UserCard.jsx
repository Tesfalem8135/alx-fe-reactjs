export default function UserCard({ user }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
      {/* Avatar */}
      <img
        src={user.avatar_url}
        alt={user.login}
        className="w-16 h-16 rounded-full"
      />

      {/* User Info */}
      <div className="flex flex-col">
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="text-lg font-bold text-blue-600 hover:underline"
        >
          {user.login}
        </a>
        {user.location && (
          <p className="text-gray-500">📍 {user.location}</p>
        )}
        {user.public_repos !== undefined && (
          <p className="text-gray-500">📦 Repos: {user.public_repos}</p>
        )}
      </div>
    </div>
  );
}