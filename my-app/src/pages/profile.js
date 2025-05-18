import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get("/api/pm/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProfile(res.data);
    };
    fetchProfile();
  }, []);

  if (!profile) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">Welcome, {profile.full_name}</h1>
      <p>
        <strong>Email:</strong> {profile.email}
      </p>
      <p>
        <strong>Phone:</strong> {profile.phone}
      </p>
      <img
        src={profile.profile_image_url}
        alt="Profile"
        className="w-32 h-32 mt-5 rounded-full object-cover"
      />
    </div>
  );
}

export default Profile;
