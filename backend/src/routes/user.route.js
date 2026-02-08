import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import upload from "../middleware/upload.js";

import {
  getRecommendedUsers,
  getMyFriends,
  sendFriendRequest,
  acceptFriendRequest,
  getFriendRequests,
  getOutgoingFriendReqs,
  uploadProfilePic,
  removeProfilePic,
} from "../controllers/user.controller.js";

const router = express.Router();

/* =========================
   🔐 AUTH PROTECTION
========================= */
router.use(protectRoute);

/* =========================
   👥 USERS & FRIENDS
========================= */

// recommended users
router.get("/", getRecommendedUsers);

// my friends
router.get("/friends", getMyFriends);

// send friend request
router.post("/friend-request/:id", sendFriendRequest);

// accept friend request
router.put("/friend-request/:id/accept", acceptFriendRequest);

// incoming friend requests
router.get("/friend-requests", getFriendRequests);

// outgoing friend requests
router.get("/outgoing-friend-requests", getOutgoingFriendReqs);

/* =========================
   📸 PROFILE PICTURE
========================= */

// upload or change profile picture
router.put(
  "/profile-picture",
  upload.single("image"),
  uploadProfilePic
);

// remove profile picture
router.delete("/profile-picture", removeProfilePic);

export default router;