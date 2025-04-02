export default function LatestBlogs() {
    const blogs = [
      {
        title: "New Guidelines for Cervical Cancer Screening",
        excerpt: "WHO updates recommendations for cervical cancer screening, suggesting HPV testing as primary method.",
        date: "Apr 1, 2025",
        author: "Dr. Rebecca Stone",
        image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "Gynecology",
        url: "https://www.who.int/news/item/01-04-2025-who-updates-cervical-cancer-screening-guidelines"
      },
      {
        title: "Breakthrough in Endometriosis Treatment",
        excerpt: "New non-hormonal treatment shows promise in clinical trials for pain relief in endometriosis patients.",
        date: "Mar 28, 2025",
        author: "Dr. Olivia Martinez",
        image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "Gynecology",
        url: "https://www.nih.gov/news-events/news-releases/2025/03/28/new-endometriosis-treatment-shows-promise"
      },
      {
        title: "Postpartum Depression: New Screening Recommendations",
        excerpt: "ACOG now recommends multiple screenings for postpartum depression throughout the first year after delivery.",
        date: "Mar 25, 2025",
        author: "Dr. Sarah Johnson",
        image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "Obstetrics",
        url: "https://www.acog.org/news/news-releases/2025/03/acog-updates-postpartum-depression-screening-guidelines"
      },
      {
        title: "Fertility Preservation Options Expand",
        excerpt: "New techniques in egg freezing show improved success rates for women seeking fertility preservation.",
        date: "Mar 20, 2025",
        author: "Dr. Michael Lee",
        image: "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        category: "Reproductive Health",
        url: "https://www.asrm.org/news-and-publications/news-and-research/press-releases-and-bulletins/2025/fertility-preservation-advances/"
      }
    ];
    
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Women's Health News</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Evidence-based updates on gynecology and women's healthcare
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogs.map((blog, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 relative">
                  <img 
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                    // onError={(e) => {
                    //   e.target.src = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    // }}
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-blue-600 font-medium">{blog.category}</span>
                    <span className="text-sm text-gray-500">{blog.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 hover:text-blue-600">
                    <a href={blog.url} target="_blank" rel="noopener noreferrer">{blog.title}</a>
                  </h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">By {blog.author}</span>
                    <a 
                      href={blog.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium hover:text-blue-700"
                    >
                      Read Study →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <a 
              href="https://www.acog.org/news" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-md font-medium hover:bg-blue-500 hover:text-white transition-colors"
            >
              View All Medical News
            </a>
          </div>
        </div>
      </section>
    );
  }