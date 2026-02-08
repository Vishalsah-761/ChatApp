import useAuthUser from "../hooks/useAuthUser";
import useProfilePic from "../hooks/useProfilePic";

const ProfilePicture = () => {
  const { authUser } = useAuthUser();
  const { upload, remove } = useProfilePic();

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) upload.mutate(file);
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <img
        src={authUser?.profilePic || "/avatar.png"}
        alt="profile"
        className="w-24 h-24 rounded-full object-cover border"
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="file-input file-input-sm"
      />

      {authUser?.profilePic && (
        <button
          onClick={() => remove.mutate()}
          className="btn btn-error btn-sm"
        >
          Remove Photo
        </button>
      )}
    </div>
  );
};

export default ProfilePicture;