import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {


    
const testimonials = [
  {
    name: 'Amit Sharma',
    role: 'Small Business Owner',
    text: 'Easy to Compliance has made all my tax and compliance work completely stress-free. From GST filings to annual returns, everything is handled on time and accurately.'
  },
  {
    name: 'Rohit Mehta',
    role: 'Marketing Executive',
    text: 'I’ve been using Easy to Compliance for years now. They simplify tax filings and ensure I never miss a deadline. Reliable and very professional service.'
  },
  {
    name: 'Neha Verma',
    role: 'Freelance Consultant',
    text: 'Handling compliance as a freelancer was confusing until I found Easy to Compliance. They explained everything clearly and took care of all my filings smoothly.'
  },
  {
    name: 'Sanjay Kapoor',
    role: 'Real Estate Investor',
    text: 'Property-related compliance and tax filings can get complex, but Easy to Compliance managed everything efficiently. Their knowledge and support are excellent.'
  },
  {
    name: 'Priya Malhotra',
    role: 'Tech Startup Founder',
    text: 'Easy to Compliance truly understands startup compliance. From company filings to ongoing regulatory requirements, they’ve been a dependable partner for our growth.'
  },
  {
    name: 'Vikram Singh',
    role: 'Restaurant Owner',
    text: 'They handle all my business compliance, GST returns, and tax filings with great accuracy. Very professional, responsive, and trustworthy team.'
  },
  {
    name: 'Ananya Gupta',
    role: 'E-commerce Entrepreneur',
    text: 'Multi-state GST compliance was overwhelming before Easy to Compliance stepped in. They streamlined everything and saved me from penalties and errors.'
  },
  {
    name: 'Rahul Iyer',
    role: 'Corporate Legal Advisor',
    text: 'Even with a legal background, I prefer Easy to Compliance for tax and regulatory filings. Their attention to detail and proactive reminders stand out.'
  }
];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [slidesPerView, setSlidesPerView] = useState(3);

  // Determine slides per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2); // Tablet
      } else {
        setSlidesPerView(3); // Desktop
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex >= testimonials.length - slidesPerView ? 0 : prevIndex + 1
        );
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [isHovered, testimonials.length, slidesPerView]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= testimonials.length - slidesPerView ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - slidesPerView : prevIndex - 1
    );
  };

  const maxIndex = testimonials.length - slidesPerView;

  return (
    <div className="py-12 sm:py-14 md:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 font-serif">
            What Our Clients Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Hear from satisfied clients who trust us with their tax needs
          </p>
        </div>

        <div 
          className="relative px-8 sm:px-10 md:px-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100 transition-all duration-200"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:bg-gray-100 transition-all duration-200"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
          </button>

          {/* Testimonials Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 px-2 sm:px-3 md:px-4 ${
                    slidesPerView === 1 ? 'w-full' :
                    slidesPerView === 2 ? 'w-1/2' :
                    'w-1/3'
                  }`}
                >
                  <div className="bg-white rounded-lg shadow-lg p-5 sm:p-6 md:p-8 h-full hover:shadow-xl transition-shadow duration-300">
                    {/* Star Rating */}
                    <div className="flex mb-3 sm:mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-4 sm:mb-5 md:mb-6 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    {/* Author Info */}
                    <div className="border-t pt-3 sm:pt-4">
                      <p className="font-semibold text-gray-900 text-base sm:text-lg">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 sm:mt-7 md:mt-8 gap-1.5 sm:gap-2">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-[#135192] w-6 sm:w-8' 
                    : 'bg-gray-300 hover:bg-gray-400 w-2.5 sm:w-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;