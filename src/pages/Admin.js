import React from "react"
import AdminLayout from "../components/AdminLayout"
import axios from "axios"

const AdminKey = null

const Admin = AdminKey => {
  return AdminKey ? <AdminLayout></AdminLayout> : null
}

export default Admin
