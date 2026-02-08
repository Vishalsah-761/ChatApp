import { axiosInstance } from "./axios";

/* ======================
   AUTH
====================== */
export const signup = async (signupData) => {
  const response = await axiosInstance.post("/auth/signup", signupData);
  return response.data;
};

export const login = async (loginData) => {
  const response = await axiosInstance.post("/auth/login", loginData);
  return response.data;
};

export const logout = async () => {
  const response = await axiosInstance.post("/auth/logout");
  return response.data;
};

export const getAuthUser = async () => {
  try {
    const res = await axiosInstance.get("/auth/me");
    return res.data;
  } catch (error) {
    console.log("Error in getAuthUser:", error);
    return null;
  }
};

export const completeOnboarding = async (userData) => {
  const response = await axiosInstance.post("/auth/onboarding", userData);
  return response.data;
};

/* ======================
   USERS / FRIENDS
====================== */
export async function getUserFriends() {
  const response = await axiosInstance.get("/users/friends");
  return response.data;
}

export async function getRecommendedUsers() {
  const response = await axiosInstance.get("/users");
  return response.data;
}

export async function getOutgoingFriendReqs() {
  const response = await axiosInstance.get("/users/outgoing-friend-requests");
  return response.data;
}

export async function sendFriendRequest(userId) {
  const response = await axiosInstance.post(`/users/friend-request/${userId}`);
  return response.data;
}

export async function getFriendRequests() {
  const response = await axiosInstance.get("/users/friend-requests");
  return response.data;
}

export async function acceptFriendRequest(requestId) {
  const response = await axiosInstance.put(
    `/users/friend-request/${requestId}/accept`
  );
  return response.data;
}

/* ======================
   PROFILE PICTURE ✅
====================== */
export const uploadProfilePic = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  const response = await axiosInstance.put(
    "/users/profile-picture",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data; // { profilePic: "cloudinary_url" }
};

export const removeProfilePic = async () => {
  const response = await axiosInstance.delete("/users/profile-picture");
  return response.data;
};

/* ======================
   STREAM
====================== */
export async function getStreamToken() {
  const response = await axiosInstance.get("/chat/token");
  return response.data;
}