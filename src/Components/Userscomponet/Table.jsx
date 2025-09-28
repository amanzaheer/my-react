import React, { useState, useEffect } from "react";
import axios from "axios";
import { ArrowBigLeft, ArrowUpLeftFromSquare } from "lucide-react";

// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export default function Table() {
  const [searchTerm, setSearchTerm] = useState("");
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [addUserLoading, setAddUserLoading] = useState(false);
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    role: "User",
  });

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("authToken");
      const response = await axios.get(
        `${API_BASE_URL}/api/users`,
        {
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
        }
      );

      // ✅ Transform response to match the new header requirements
      const apiUsers = response.data?.data?.users || [];
      const transformed = apiUsers.map((u, i) => ({
        id: u.id || i + 1,
        fullName: u.fullName || u.name || u.username || "N/A",
        username: u.username || "N/A",
        email: u.email || "N/A",
        role: u.role || "User",
      }));

      setTeamMembers(transformed);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Error fetching users. Please try again.");
      setTeamMembers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAddUser = async (e) => {
    e.preventDefault();
    setAddUserLoading(true);
    setError("");
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(
        `${API_BASE_URL}/api/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token && { Authorization: `Bearer ${token}` }),
          },
          body: JSON.stringify({
            username: newUser.username,
            email: newUser.email,
            password: newUser.password,
            role: newUser.role,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const newUserData = {
          id: data.id || teamMembers.length + 1,
          fullName: data.fullName || newUser.username,
          username: data.username || newUser.username,
          email: data.email || newUser.email,
          role: data.role || newUser.role,
        };
        setTeamMembers([...teamMembers, newUserData]);
        setNewUser({ username: "", email: "", password: "", role: "User" });
        setShowAddModal(false);
        alert("User added successfully!");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to add user. Please try again.");
      }
    } catch (err) {
      console.error("Error adding user:", err);
      setError("Network error. Please check your connection.");
    } finally {
      setAddUserLoading(false);
    }
  };

  const handleNewUserChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const filteredMembers = teamMembers.filter((m) =>
    [m.fullName, m.username, m.email, m.role]
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
  // Row actions dropdown state
  const [openMenuId, setOpenMenuId] = useState(null);
// const invite= false;
const [invite,setinvite]= useState(true);

  return (
    <div>
      {invite ? (
        <div className="px-6 py-4">
          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-black">Team members</h1>

              {/* Search + Add */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search full name, username, email, role..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-64 px-4 py-2 pl-10 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>

                <button
                  onClick={() => setinvite(!invite)}
                  className="bg-[#D4FE5B] text-black px-4 py-2 rounded-lg font-medium flex items-center space-x-2 hover:bg-[#C4EE4B]"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span>Add team member</span>
                </button>
              </div>
            </div>

            {/* ✅ Updated Column Headers */}
            <div className="h-16 bg-[#EEFFBD] rounded-lg mb-4 px-6 flex items-center">
              <div className="flex w-full">
                <div className="flex-1 flex items-center">
                  <span className="text-base font-semibold text-gray-600 uppercase tracking-wider">
                    Full name
                  </span>
                </div>
                <div className="flex-1 flex items-center">
                  <span className="text-base font-semibold text-gray-600 uppercase tracking-wider">
                    Username
                  </span>
                </div>
                <div className="flex-1 flex items-center">
                  <span className="text-base font-semibold text-gray-600 uppercase tracking-wider">
                    Email
                  </span>
                </div>
                <div className="flex-1 flex items-center">
                  <span className="text-base font-semibold text-gray-600 uppercase tracking-wider">
                    Role
                  </span>
                </div>
                {/* No header for actions (three dots) */}
                <div className="w-10" />
              </div>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                {error}
              </div>
            )}

            {loading ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-500 mb-2"></div>
                <p className="text-gray-600">Loading users...</p>
              </div>
            ) : (
              <div className="space-y-2">
                {filteredMembers.length > 0 ? (
                  filteredMembers.map((member, index) => (
                    <div
                      key={member.id}
                      className={`h-16 flex items-center px-6 ${
                        index !== teamMembers.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }`}
                    >
                      <div className="flex w-full items-center">
                        <div className="flex-1">
                          <span className="text-base font-semibold text-gray-800">
                            {member.fullName}
                          </span>
                        </div>
                        <div className="flex-1">
                          <span className="text-base font-semibold text-gray-900">
                            {member.username}
                          </span>
                        </div>
                        <div className="flex-1">
                          <span className="text-base font-semibold text-gray-900">
                            {member.email}
                          </span>
                        </div>
                        <div className="flex-1">
                          <span className="text-base font-semibold text-gray-900">
                            {member.role}
                          </span>
                        </div>
                        {/* Actions menu */}
                        <div className="w-10 flex justify-end relative">
                          <button
                            type="button"
                            onClick={() => setOpenMenuId(openMenuId === member.id ? null : member.id)}
                            className="p-2 rounded hover:bg-gray-100"
                            aria-haspopup="menu"
                            aria-expanded={openMenuId === member.id}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </button>

                          {openMenuId === member.id && (
                            <div className="absolute right-0 mt-2 w-[320px] bg-white border border-gray-200 rounded-md shadow-lg z-20">
                              {/* Close (X) icon */}
                              <button
                                onClick={() => setOpenMenuId(null)}
                                className="absolute top-2 right-2 p-1 rounded hover:bg-gray-100"
                                aria-label="Close menu"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-500">
                                  <path fillRule="evenodd" d="M6.225 4.811a.75.75 0 011.06 0L12 9.525l4.716-4.714a.75.75 0 111.06 1.06L13.06 10.586l4.716 4.716a.75.75 0 11-1.06 1.06L12 11.646l-4.716 4.716a.75.75 0 01-1.06-1.06l4.714-4.716-4.714-4.714a.75.75 0 010-1.06z" clipRule="evenodd" />
                                </svg>
                              </button>

                              <div className="py-3 px-3">
                                {/* Roles Section */}
                                <div className="mb-2">
                                  <div className="text-xs font-semibold text-gray-500 uppercase px-1 mb-1">Assign Role</div>
                                  <button className="w-full text-left px-2 py-2 rounded hover:bg-gray-50">
                                    <div className="text-sm text-gray-900">Viewer</div>
                                    <div className="text-xs text-gray-500">Read-only access only</div>
                                  </button>
                                  <button className="w-full text-left px-2 py-2 rounded hover:bg-gray-50">
                                    <div className="text-sm text-gray-900">Agent</div>
                                    <div className="text-xs text-gray-500">Handle assigned tasks</div>
                                  </button>
                                  <button className="w-full text-left px-2 py-2 rounded hover:bg-gray-50">
                                    <div className="text-sm text-gray-900">Finance Analyst</div>
                                    <div className="text-xs text-gray-500">View billing and reports</div>
                                  </button>
                                  <button className="w-full text-left px-2 py-2 rounded hover:bg-gray-50">
                                    <div className="text-sm text-gray-900">Administrator</div>
                                    <div className="text-xs text-gray-500">Full access to settings</div>
                                  </button>
                                </div>

                                <div className="border-t my-2" />

                                {/* Account Section */}
                                <div className="mb-1">
                                  <div className="text-xs font-semibold text-gray-500 uppercase px-1 mb-1">Account</div>
                                  <button className="w-full text-left px-2 py-2 rounded hover:bg-gray-50">
                                    <div className="text-sm text-orange-600">Freeze account</div>
                                    <div className="text-xs text-gray-500">Disable access temporarily</div>
                                  </button>
                                  <button className="w-full text-left px-2 py-2 rounded hover:bg-gray-50">
                                    <div className="text-sm text-red-600">Delete account</div>
                                    <div className="text-xs text-gray-500">Remove user permanently</div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">
                      {searchTerm
                        ? "No users found matching your search."
                        : "No users found in the system."}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Add Member Modal remains unchanged */}
          {showAddModal && (
            /* … same modal code as before … */
            <div>…</div>
          )}
        </div>
      ) : (
        <div className="px-6 py-4">
        <ArrowBigLeft onClick={()=>{setinvite(!invite)}} className="w-6 h-6"/>
          <div className="bg-gray-200 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6  items-center">
            {/* Left - Text and Button */}
            <div className="flex flex-col   space-y-4">
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Get things faster as a team</h2>
              <p className="text-gray-700 max-w-xl">Invite your teammates to collaborate, manage roles, and keep work moving.  track progress, and stay aligned</p>
              {/* <p className="text-gray-700 max-w-xl">Add members to share access, track progress, and stay aligned.</p> */}
              <button
                onClick={() => setShowAddModal(true)}
                className="mt-2 bg-[#D4FE5B] w-[140px] text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Invite user
              </button>
              {/* <div className="flex items-center justify-center">
                <button className="mt-2  bg-blue-500 w-[160px] text-white  px-6 py-3 rounded-lg">
                  606*155 Hug
                </button>
              </div> */}
              {/* <div className="flex items-center justify-center">
                <button onClick={() => setinvite(!invite)} className="mt-2  bg-blue-500 w-[160px] text-white  px-6 py-3 rounded-lg">
                  Back to Table
                </button> */}
              {/* </div> */}
            </div>

            {/* Right - Image */}
            <div className="flex  justify-center md:justify-end pr-15">
              <img
                src="/img.3.png"
                alt="Team collaboration"
                className="w-[250px] h-[190px] object-cover rounded-full rounded-tl-none shadow"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
