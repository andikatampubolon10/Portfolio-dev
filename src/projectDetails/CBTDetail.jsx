import ProjectCaseLayout from "../components/projects/ProjectCaseLayout";

export const project = {
  title: "Computer Based Test (CBT)",
  category: "Web Development",
  heroImg: "https://res.cloudinary.com/demlxsf08/image/upload/v1766486297/Gemini_Generated_Image_t441sjt441sjt441_pwjtsx.png",
  tagline:
    "A robust and scalable online examination platform tailored for schools and institutions, ensuring secure and efficient test taking.",
  year: "2024",
  stack: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Node.js",
    "PostgreSQL",
  ],
  features: [
    "Secure Test Environment: Anti-cheat mechanisms including browser lock and full-screen enforcement.",
    "Dynamic Question Banks: Support for multiple question types (multiple choice, essay) with randomization.",
    "Real-time Analytics: Instant result generation and detailed performance tracking for students and teachers.",
    "Scalable Architecture: Capable of handling thousands of concurrent users during peak exam periods.",
    "Role-Based Access: Dedicated portals for Admins, Teachers, and Students.",
  ],
  impact: [
    "Streamlined the examination process, eliminating paper waste and manual grading errors.",
    "Improved academic integrity with robust anti-cheating measures.",
    "Provided educators with deep insights into student performance via comprehensive dashboards.",
  ],
  links: {
    live: "#",
    repo: "#",
  },
};

export default function CBTDetail({ onClose, mode }) {
  return <ProjectCaseLayout project={project} onClose={onClose} closeLabel={mode === "modal" ? "Close" : "Back to Home"} mode={mode} />;
}
