import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 mt-20">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Column 1: The Philosophy */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold tracking-wider">ABOUT THE APP</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            A full-stack social media platform built with a minimalist UI philosophy: 
            <span className="italic text-gray-300"> "Why overcomplicate the styling when there is so much to learn in backend development?"</span>
          </p>
        </div>

        {/* Column 2: The Architecture (My bragging rights!) */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold tracking-wider">UNDER THE HOOD</h3>
          <ul className="text-gray-400 text-sm space-y-3">
            <li>
              <strong className="text-white">Frontend:</strong> React.js
            </li>
            <li>
              <strong className="text-white">Backend:</strong> Express.js 
              <span className="block mt-1 text-gray-500 text-xs">
                Production-style architecture featuring Cookie Authentication, Role-Based Authorization, Input Validation, and Global Error Handling.
              </span>
            </li>
            <li>
              <strong className="text-white">Database:</strong> PostgreSQL
              <span className="block mt-1 text-gray-500 text-xs">
                Raw SQL Migrations (No ORMs or Prisma here!).
              </span>
            </li>
          </ul>
        </div>

        {/* Column 3: Links */}
        <div className="flex flex-col gap-4 md:items-end">
          <h3 className="text-xl font-bold tracking-wider">LET'S CONNECT</h3>
          <div className="flex flex-col gap-3 md:items-end text-sm">
            <Link 
              href="YOUR_GITHUB_REPO_URL" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              View the Source Code ↗
            </Link>
            <Link 
              href="YOUR_LINKEDIN_URL" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              Find me on LinkedIn ↗
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Copyright */}
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-gray-800 text-center text-gray-600 text-xs">
        <p>© Shresth Kohli. Built from scratch.</p>
      </div>
    </footer>
  );
}