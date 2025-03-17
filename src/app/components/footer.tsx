import Float from "./floatbutton";
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        <div className="flex justify-end">
          <Float/>
        </div>
      </footer>
    );
  }
  