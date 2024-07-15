import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Navbar from '@/components/layout/Navbar';
import {LucideExternalLink} from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "The Future of Private Aviation: Trends to Watch",
    description: "Step into a world where luxury and travel seamlessly unite at soaring altitudes. Elevate your experience with opulent interiors, personalised service, and breathtaking vistas. ",
    date: "July 1, 2024",
    readTime: 5,
    image: "https://txtav.com/-/media/textron-aviation/images/content-pieces/articles/financing-a-private-aircraft-101/small-_48a0921.ashx"
  },
];


const newsData = [
    {
      imageSrc: 'https://www.bjtonline.com/sites/bjtonline.com/files/styles/bjt30_article_large/public/aircraft/canadair_cl500_challenger_604.jpg?itok=XJn7QjAY',
      title: "Nigeria's Viva Jets takes on a Challenger 604",
      source: 'ch-aviation ',
      date: '26th June, 2024',
      url: 'https://www.ch-aviation.com/news/141776-nigerias-viva-jets-takes-on-a-challenger-604',
    },
    {
      imageSrc: 'https://cdn.businessday.ng/wp-content/uploads/2024/06/UPRVOQmu-Vivajets-1.png',
      title: 'Vivajets says ready to support Air Force aircraft acquisition, management',
      source: 'Bussiness Day',
      date: '6th June, 2024',
      url: 'https://businessday.ng/aviation/article/vivajets-says-ready-to-support-air-force-aircraft-acquisition-management/',
    },
    {
      imageSrc: 'https://i0.wp.com/techeconomy.ng/wp-content/uploads/2024/06/Vivajets-CEO-speaking-at-NAF-60th-anniversary-.jpg?resize=1140%2C570&ssl=1',
      title: 'NAF at 60: Vivajets Ready to Support Air Force Aircraft Acquisition, Management',
      source: 'Techeconomy',
      date: '3rd June, 2024',
      url: 'https://techeconomy.ng/naf-at-60-vivajets-ready-to-support-air-force-aircraft-acquisition-management/',
    },
    {
      imageSrc: 'https://guardian.ng/wp-content/uploads/2024/06/IMG-20240605-WA0002.jpg',
      title: 'Vivajets harps on business aviation to tackle insurgency, regional security threats',
      source: 'The Guardian',
      date: '4th June, 2024',
      url: 'https://guardian.ng/joe-komolafe/vivajets-harps-on-business-aviation-to-tackle-insurgency-regional-security-threats/',
    },




    {
      imageSrc: 'https://businessstandardsng.com/wp-content/uploads/2024/05/Africa-CEO-350x210.jpg',
      title: 'Africa CEO Forum: Vivajets Aims to Make Business Aviation More Inclusive',
      source: 'businessstandardsng',
      date: '28th May 2024',
      url: 'https://businessstandardsng.com/africa-ceo-forum-vivajets-aims-to-make-business-aviation-more-inclusive/?amp=1',
    },
    {
      imageSrc: 'https://financialenergyreview.com/wp-content/uploads/2024/05/vivajets-620x330.jpeg',
      title: 'Africa CEO Forum: Aviation Business Crucial Success Enabler to Regional Integration – Vivajets Boss',
      source: 'Financial energy review',
      date: '27th May 2024',
      url: 'https://financialenergyreview.com/africa-ceo-forum-aviation-business-crucial-success-enabler-to-regional-integration-vivajets-boss/',
    },
    



    {
      imageSrc: 'https://cms.cnbcafrica.com/wp-content/uploads/2023/10/hqdefault-98.jpg',
      title: 'Falcon Aerospace to meet demands of Africa’s private jet market',
      source: 'cbncafrica',
      date: '13th November 2023',
      url: 'https://www.youtube.com/watch?v=PZwDWy7CjSQ&t=96s',
    },
    {
      imageSrc: 'https://guardian.ng/wp-content/uploads/2023/10/IMG-20231029-WA0008.jpg',
      title: 'Vivajets tips aviation as economic development enabler in Africa',
      source: 'The Guardian',
      date: '29th October 2023',
      url: 'https://guardian.ng/business-services/vivajets-tips-aviation-as-economic-development-enabler-in-africa/',
    },





    {
      imageSrc: 'https://www.africa-newsroom.com/files/thumb/6129023f7cd8dd3/600/418',
      title: "Vivajets Unveils Fractional Aircraft Ownership Service, Commits to Business Connectivity in Africa",
      source: 'cnbcafrica',
      date: '20 October, 2023',
      url: 'https://www.cnbcafrica.com/wire/508169/',
    },
   
   
    {
      imageSrc: 'https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/Chukwuerika-Achum.png',
      title: 'Falcon Aero Unveils New Solutions for Business Travellers',
      source: 'This Day Live',
      date: '23rd April, 2023',
      url: 'https://www.thisdaylive.com/index.php/2023/04/08/falcon-aero-unveils-new-solutions-for-business-travellers',
    },
    {
      imageSrc: 'https://furtherafrica.com/content-files/uploads/2023/04/private_jet.jpg',
      title: 'Nigerian Aviation Outfit, Falcon Aero, Unveils Tech Platforms to Ease Business Jet Booking',
      source: 'Bussiness Ghana',
      date: '17th April, 2023',
      url: 'https://sunnewsonline.com/falcon-aero-launches-into-aviation-industry/',
    },
   
  ];

function BlogPage() {
  return (
    <div>
        <Navbar/>
   
    <div className="container mx-3 sm:mx-auto px-4 py-8 mt-24">
      <div className="flex flex-col md:flex-row justify-between gap-20 items-center mb-12">
        <div className="md:w-1/2">
          <p className="text-sm font-bold text-[#0129A4] uppercase mb-4">Media Section</p>
          <h1 className="text-2xl sm:text-5xl text-gray-800 font-bold">Exploring Unmatched Comfort in Private Jet Rentals</h1>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0">
          <p className="text-lg mt-0 sm:mt-8 text-gray-400">
            Step into a world where luxury and travel seamlessly unite at soaring altitudes. Elevate your experience with opulent interiors, personalised service, and breathtaking vistas.
          </p>
        </div>
      </div>

      <div className="space-y-12 mb-16">
        {blogPosts.slice(0, 1).map((post, index) => (
          <div key={post.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
            <div className="md:w-[60%]">
              <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-lg" />
            </div>
            <div className="md:w-[40%] pt-14 bg-white shadow-md rounded-lg p-6">
              <div className='flex justify-between'>
                <div>
                    <p>Tech Cabal</p>
                </div>
                <p className="text-sm text-gray-500 mb-2">{post.date} · {post.readTime} min read</p>
              </div>
              

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
  <h2 className="text-3xl font-bold mb-8">Latest News From The Media</h2>

  <section className='story'>
        <div className="mx-auto grid grid-cols-1  md:grid-cols-3 gap-4">
          {/* Map through the newsData array to render news cards */}
          {newsData.map((news, index) => (
            
            <a key={index} href={news.url} target="_blank" rel="noopener noreferrer" className="border-[#D0E0EA] border-2 bg-[#F9FDFF] cursor-pointer rounded-lg mb-4 overflow-hidden transition-transform transform hover:scale-105">
              <img src={news.imageSrc} width={300} height={200} className="w-full h-[60%] rounded-lg" alt={`Card Image ${index + 1}`} />
              <div className="py-4 px-4">
                <div className='flex gap-3 justify-between'>
                  <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                   <LucideExternalLink color='dodgerblue'/>
                  </a>
                </div>
                <div className='flex gap-5'>
                  <p className="text-red-500 font-bold text-sm">{news.source}</p>
                  <p className="text-gray-800 text-sm">{news.date}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
  
</div>
    </div>
    </div>
  );
}

export default BlogPage;