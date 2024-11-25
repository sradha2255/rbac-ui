import React, { useState, useEffect } from "react";
import { getUsers, createUser, deleteUser } from "../services/userService";
import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Select,
  MenuItem,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "",
    status: "Active",
    permissions: [],
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editUserId, setEditUserId] = useState(null);

  // Fetch users when the component loads
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error loading users:", error);
      }
    };
    fetchUsers();
  }, []);

  // Handle form submission for add/edit user
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === editUserId ? { ...newUser, id: editUserId } : user
        )
      );
      setIsEditing(false);
      setEditUserId(null);
    } else {
      try {
        const addedUser = await createUser(newUser);
        setUsers([...users, addedUser]);
      } catch (error) {
        console.error("Error adding user:", error);
      }
    }
    setNewUser({
      name: "",
      email: "",
      role: "",
      status: "Active",
      permissions: [],
    });
  };

  // Handle edit user
  const handleEditClick = (user) => {
    setIsEditing(true);
    setEditUserId(user.id);
    setNewUser(user);
  };

  // Handle delete user
  const handleDeleteUser = async (id) => {
    try {
      console.log(`Deleting user with ID: ${id}`); // Debugging log
      await deleteUser(id);
      setUsers(users.filter((u) => u.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handlePermissionsChange = (event) => {
    setNewUser({ ...newUser, permissions: event.target.value });
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Typography
        variant="h4"
        style={{ textAlign: "center", marginBottom: "20px", color: "#1976d2" }}
      >
        User Management Portal
      </Typography>

      {/* Form Section */}
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start", // Align the form to the left
          backgroundColor: "#ffffff",
          padding: "10px",
          gap: "10px", // Small gap between fields
          marginBottom: "20px", // Gap between form and table
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        }}
      >
        <TextField
          label="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          required
          size="small"
        />
        <TextField
          label="Email"
          type="email"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          required
          size="small"
        />
        <TextField
          label="Role"
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          required
          size="small"
        />
        <Select
          value={newUser.status}
          onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
          displayEmpty
          size="small"
        >
          <MenuItem value="Active">Active</MenuItem>
          <MenuItem value="Inactive">Inactive</MenuItem>
        </Select>
        <Select
          value={newUser.permissions}
          onChange={handlePermissionsChange}
          multiple
          displayEmpty
          renderValue={(selected) =>
            selected.length > 0 ? selected.join(", ") : "Permissions"
          }
          size="small"
        >
          <MenuItem value="Read">Read</MenuItem>
          <MenuItem value="Write">Write</MenuItem>
          <MenuItem value="Delete">Delete</MenuItem>
        </Select>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ padding: "8px 16px", fontWeight: "bold" }}
        >
          {isEditing ? "Update User" : "Add User"}
        </Button>
      </Box>

      {/* Table Section */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Role</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Status</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Permissions</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>
                  {Array.isArray(user.permissions)
                    ? user.permissions.join(", ")
                    : "No Permissions"}
                </TableCell>
                <TableCell>
                  <IconButton color="primary" onClick={() => handleEditClick(user)}>
                    <EditIcon />
                  </IconButton>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UsersPage;
