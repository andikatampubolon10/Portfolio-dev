import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "School Information System",
  category: "Web Development",
  heroImg: "https://res.cloudinary.com/demlxsf08/image/upload/v1766488043/Gemini_Generated_Image_3s3kqp3s3kqp3s3k_iytop1.png",
  tagline:
    "A comprehensive digital platform designed to streamline student records, grading, and school administration.",
  year: "2024",
  stack: [
    "React",
    "Node.js",
    "Express",
    "PostgreSQL",
    "Tailwind CSS",
  ],
  features: [
    "Student Management: Maintain detailed profiles, attendance records, and disciplinary history.",
    "Academic Grading: Streamlined grade entry for teachers with automatic GPA calculations and report card generation.",
    "Parent Portal: Provides parents with real-time access to their children's grades, attendance, and school announcements.",
    "Class & Schedule Management: Tools for administrators to build schedules, assign teachers, and manage classroom resources.",
    "Financial Tracking: Manage tuition fees, generate invoices, and track payments.",
  ],
  impact: [
    "Centralized all school data into a single, easily accessible system, reducing reliance on physical files.",
    "Improved communication between teachers, parents, and students through dedicated portals.",
    "Saved hundreds of administrative hours per semester through automated grading and reporting.",
  ],
  links: {
    live: "#",
    repo: "#",
  },
};

export default function SISDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
