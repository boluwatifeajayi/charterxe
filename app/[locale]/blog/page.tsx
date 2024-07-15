import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Navbar from '@/components/layout/Navbar';

const blogPosts = [
  {
    id: 1,
    title: "The Future of Private Aviation: Trends to Watch",
    description: "Step into a world where luxury and travel seamlessly unite at soaring altitudes. Elevate your experience with opulent interiors, personalised service, and breathtaking vistas. ",
    date: "July 1, 2024",
    readTime: 5,
    image: "https://txtav.com/-/media/textron-aviation/images/content-pieces/articles/financing-a-private-aircraft-101/small-_48a0921.ashx"
  },
  {
    id: 2,
    title: "Top 5 Destinations for Luxury Private Jet Getaways",
    description: "Step into a world where luxury and travel seamlessly unite at soaring altitudes. Elevate your experience with opulent interiors, personalised service, and breathtaking vistas. ",
    date: "July 1, 2024",
    readTime: 7,
    image: "https://miro.medium.com/v2/resize:fit:1108/1*K98i7A929NyC3OkFQeVLcA.png"
  },
  {
    id: 3,
    title: "How to Choose the Right Private Jet for Your Needs",
    description: "Step into a world where luxury and travel seamlessly unite at soaring altitudes. Elevate your experience with opulent interiors, personalised service, and breathtaking vistas. ",
    date: "July 1, 2024",
    readTime: 6,
    image: "https://miro.medium.com/v2/resize:fit:1108/1*K98i7A929NyC3OkFQeVLcA.png"
  },
  {
    id: 4,
    title: "The Environmental Impact of Private Jets: Myths vs. Facts",
    description: "Step into a world where luxury and travel seamlessly unite at soaring altitudes. Elevate your experience with opulent interiors, personalised service, and breathtaking vistas. ",
    date: "July 1, 2024",
    readTime: 8,
    image: "https://miro.medium.com/v2/resize:fit:1108/1*K98i7A929NyC3OkFQeVLcA.png"
  },
  {
    id: 5,
    title: "Gourmet Dining at 40,000 Feet: In-Flight Culinary Experiences",
    description: "Step into a world where luxury and travel seamlessly unite at soaring altitudes. Elevate your experience with opulent interiors, personalised service, and breathtaking vistas. ",
    date: "July 1, 2024",
    readTime: 5,
    image: "https://miro.medium.com/v2/resize:fit:1108/1*K98i7A929NyC3OkFQeVLcA.png"
  },
  {
    id: 6,
    title: "The Rise of Shared Private Jet Services: Is It Right for You?",
    description: "Step into a world where luxury and travel seamlessly unite at soaring altitudes. Elevate your experience with opulent interiors, personalised service, and breathtaking vistas. ",
    date: "July 1, 2024",
    readTime: 6,
    image: "https://miro.medium.com/v2/resize:fit:1108/1*K98i7A929NyC3OkFQeVLcA.png"
  },
];

function BlogPage() {
  return (
    <div>
        <Navbar/>
   
    <div className="container mx-3 sm:mx-auto px-4 py-8 mt-24">
      <div className="flex flex-col md:flex-row justify-between gap-20 items-center mb-12">
        <div className="md:w-1/2">
          <p className="text-sm font-bold text-[#0129A4] mb-2">BLOG</p>
          <h1 className="text-2xl sm:text-5xl text-gray-800 font-bold">Exploring Unmatched Comfort in Private Jet Rentals</h1>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <p className="text-lg mt-0 sm:mt-8 text-gray-600">
            Step into a world where luxury and travel seamlessly unite at soaring altitudes. Elevate your experience with opulent interiors, personalised service, and breathtaking vistas.
          </p>
        </div>
      </div>

      <div className="space-y-12 mb-16">
        {blogPosts.slice(0, 2).map((post, index) => (
          <div key={post.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
            <div className="md:w-[60%]">
              <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-lg" />
            </div>
            <div className="md:w-[40%] pt-14 bg-white shadow-md rounded-lg p-6">
              <p className="text-sm text-gray-500 mb-2">{post.date} · {post.readTime} min read</p>
              <h2 className="text-3xl font-bold mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <button className="flex items-center bg-blue-100 text-blue-900 text-sm font-bold hover:bg-[#C0E1F4] hover:text-blue-800 px-4 py-2 rounded-md transition duration-300">
  Read more <FaArrowRight className="ml-2" />
</button>
            </div>
          </div>
        ))}
      </div>

      <div>
  <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
  <div className="space-y-6">
    {blogPosts.slice(2).map((post) => (
      <div key={post.id} className="bg-[#F0F9FF] rounded-lg overflow-hidden shadow-md p-4">
        <div className="sm:flex">
          <div className="sm:w-1/3 sm:mb-0 mb-3 sm:pr-4">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="sm:w-2/3 sm:my-10 sm:mx-10">
            <p className="text-sm text-gray-500 mb-2">{post.date} · {post.readTime} min read</p>
            <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-500 text-md">{post.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
    </div>
  );
}

export default BlogPage;