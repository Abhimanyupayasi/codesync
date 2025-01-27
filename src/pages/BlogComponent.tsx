import { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import Header from "./Header/Header";

const BlogComponent = () => {
  const blogs = [
    {
      id: 1,
      title: "The CodeSync Revolution",
      content:
        "Discover how CodeSync transforms collaboration in coding. With real-time updates and a seamless interface, developers can now code together effortlessly.",
      image: "https://images.pexels.com/photos/3153199/pexels-photo-3153199.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Technologies Behind CodeSync",
      content:
        "Built on powerful technologies like WebSockets for real-time communication and Liveblocks for state synchronization, CodeSync ensures a lag-free and smooth experience.",
      image: "https://images.pexels.com/photos/5475779/pexels-photo-5475779.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Building CodeSync: Our Journey",
      content:
        "From concept to execution, learn about the challenges we faced and the solutions we implemented while building CodeSync.",
      image: "https://images.pexels.com/photos/7988747/pexels-photo-7988747.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      ".blog-card",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    );
  }, []);

  return (
    <div>
        <Header/>
        <div className="min-h-screen mt-20 bg-gradient-to-br from-gray-100 via-white to-gray-200 py-12 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-12">
          Explore Our Blogs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              className="blog-card bg-white rounded-xl shadow-lg p-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-600">{blog.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </div>

  );
};

export default BlogComponent;
