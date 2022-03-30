import { Header } from "./components";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  Employees,
  AddEmployee,
  UpdateEmployee,
  EmployeeLeaves,
  EmployeeClaims
} from "./pages/employees";
import { LeaveRequest, Leaves } from "./pages/leaves";
import { Claims, AddClaim } from "./pages/claims";
import { Box } from "@chakra-ui/react";
function App() {
  return (
    <div className="App">
      <Header />
      <Box maxW="80%" m="auto">
        <Routes>
          <Route path="/" element={<Navigate to="/employees" replace />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employees/add" element={<AddEmployee />} />
          <Route path="/employees/update/:id" element={<UpdateEmployee />} />
          <Route path="/leaves/:id" element={<EmployeeLeaves />} />
          <Route path="/leaves" element={<Leaves />} />
          <Route path="/leaves/request/:id" element={<LeaveRequest />} />
          <Route path="/claims" element={<Claims />} />
          <Route path="/claims/:id" element={<EmployeeClaims />} />
          <Route path="/claims/request/:id" element={<AddClaim />} />
        </Routes>
      </Box>
    </div>
  );
}

export default App;
