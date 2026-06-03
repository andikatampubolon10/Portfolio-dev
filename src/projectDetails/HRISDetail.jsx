import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Human Resource Information System (HRIS)",
  category: "Web Development",
  heroImg: "https://res.cloudinary.com/demlxsf08/image/upload/v1766486193/projek1_gj8ahb.png",
  tagline:
    "A comprehensive Human Resource Information System for managing employee data, attendance, leaves, and payroll securely and efficiently.",
  year: "2024",
  stack: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
  ],
  features: [
    "Employee Data Management: Securely manage and update employee records.",
    "Attendance Tracking: Real-time clock-in and clock-out monitoring with geolocation.",
    "Leave & Permit Management: Automated approval workflows for employee leave requests.",
    "Payroll Processing: Automated salary calculation based on attendance, overtime, and deductions.",
    "Role-Based Access Control: Granular permissions for Admins, Managers, and Employees.",
  ],
  impact: [
    "Streamlined HR processes, reducing administrative overhead by up to 40%.",
    "Improved payroll accuracy with automated calculation and reporting.",
    "Enhanced transparency and communication between management and employees.",
  ],
  links: {
    live: "#",
    repo: "#",
  },
};

export default function HRISDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
