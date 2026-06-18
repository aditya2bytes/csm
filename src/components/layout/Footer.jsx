import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-5 py-14">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center"></div>

              <h1 className="text-3xl font-bold text-white">VlogTube</h1>
            </Link>

            <p className="text-gray-400 leading-8">
              Your destination for quality vlogs, blogs and video content.
              Explore stories, tutorials and entertainment from creators around
              the world.
            </p>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-white font-bold uppercase mb-6">Content</h2>

            <div className="flex flex-col gap-4">
              <Link to="/blogs" className="hover:text-white">
                All Blogs
              </Link>

              <Link to="/videos" className="hover:text-white">
                All Videos
              </Link>

              <Link to="/blogs" className="hover:text-white">
                Technology
              </Link>

              <Link to="/blogs" className="hover:text-white">
                Lifestyle
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-white font-bold uppercase mb-6">Company</h2>

            <div className="flex flex-col gap-4">
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>

              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>

              <Link className="hover:text-white">Privacy Policy</Link>

              <Link className="hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-14 pt-8 text-center text-gray-500">
          © {year} VlogTube. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
