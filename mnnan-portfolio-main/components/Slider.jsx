"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight, X, Star } from "lucide-react"
// import "../styles/testimonial-slider.css"

// Sample testimonial data with better placeholder images and additional details
const testimonials = [
  {
    quote: "M. Annan is a talented developer who consistently delivers high-quality work. I highly recommend him.",
    fullQuote:
      "M. Annan is a talented developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are exceptional. The project was completed ahead of schedule and exceeded all our expectations. I highly recommend him for any web development project.",
    name: "John Doe",
    title: "CEO, Acme Corp",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    project: "Company Website Redesign",
    date: "January 2023",
    rating: 5,
  },
  {
    quote: "Working with M. Annan was a pleasure. He is a skilled problem-solver and a great communicator.",
    fullQuote:
      "Working with M. Annan was a pleasure from start to finish. He is a skilled problem-solver and a great communicator who kept us informed throughout the entire development process. His technical expertise and creative solutions helped us overcome several challenges we were facing with our application.",
    name: "Jane Smith",
    title: "Project Manager, Beta Inc",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    project: "E-commerce Platform",
    date: "March 2023",
    rating: 5,
  },
  {
    quote: "M. Annan's expertise in web development is unmatched. He is a valuable asset to any team.",
    fullQuote:
      "M. Annan's expertise in web development is unmatched. He quickly understood our complex requirements and delivered a solution that was both elegant and efficient. His code quality and documentation were exceptional, making future maintenance a breeze. He is a valuable asset to any team looking for top-tier development work.",
    name: "Richard Roe",
    title: "CTO, Gamma Ltd",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    project: "Custom CRM System",
    date: "May 2023",
    rating: 5,
  },
  {
    quote: "The attention to detail and commitment to quality is what sets M. Annan apart from other developers.",
    fullQuote:
      "The attention to detail and commitment to quality is what sets M. Annan apart from other developers I've worked with. He doesn't just write code that works; he creates solutions that are robust, scalable, and maintainable. Our application performance improved by 40% after his optimization work.",
    name: "Emily Johnson",
    title: "Product Owner, Delta Co",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    project: "Mobile App Development",
    date: "July 2023",
    rating: 5,
  },
  {
    quote: "I've worked with many developers, but M. Annan's work stands out for its elegance and efficiency.",
    fullQuote:
      "I've worked with many developers over my 15-year career, but M. Annan's work stands out for its elegance and efficiency. He has a rare combination of technical excellence and user experience sensibility. The dashboard he built for us has received praise from everyone in the organization for its intuitive design and powerful functionality.",
    name: "Michael Brown",
    title: "Tech Lead, Epsilon Inc",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    project: "Analytics Dashboard",
    date: "September 2023",
    rating: 5,
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [visibleItems, setVisibleItems] = useState(3)
  const [selectedTestimonial, setSelectedTestimonial] = useState(null)
  const sliderRef = useRef(null)

  // Update visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Clean up
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    // Only auto-play if no popup is open
    if (selectedTestimonial) return

    const interval = setInterval(() => {
      if (!isAnimating) {
        goToNext()
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex, isAnimating, selectedTestimonial])

  // Handle escape key for popup
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && selectedTestimonial !== null) {
        closePopup()
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [selectedTestimonial])

  // Calculate the number of pages for dots
  const totalPages = Math.ceil(testimonials.length / visibleItems)

  // Handle previous slide with loop
  const goToPrevious = () => {
    if (isAnimating) return

    setIsAnimating(true)

    if (currentIndex <= 0) {
      // Loop to the end
      setCurrentIndex(testimonials.length - visibleItems)
    } else {
      setCurrentIndex((prev) => prev - 1)
    }

    // Reset animation flag after transition completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  // Handle next slide with loop
  const goToNext = () => {
    if (isAnimating) return

    setIsAnimating(true)

    if (currentIndex >= testimonials.length - visibleItems) {
      // Loop to the beginning
      setCurrentIndex(0)
    } else {
      setCurrentIndex((prev) => prev + 1)
    }

    // Reset animation flag after transition completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  // Go to specific page
  const goToPage = (pageIndex) => {
    if (isAnimating) return

    setIsAnimating(true)
    setCurrentIndex(pageIndex * visibleItems)

    setTimeout(() => {
      setIsAnimating(false)
    }, 500)
  }

  // Open popup with testimonial details
  const openPopup = (testimonial) => {
    setSelectedTestimonial(testimonial)
    // Add class to body to prevent scrolling
    document.body.style.overflow = "hidden"
  }

  // Close popup
  const closePopup = () => {
    setSelectedTestimonial(null)
    // Remove class from body to allow scrolling
    document.body.style.overflow = ""
  }

  // Calculate transform value based on current index
  const getTransformValue = () => {
    // Each card takes percentage width based on visible items plus gap
    const cardWidth = 100 / visibleItems
    const gapWidth = 1.5 // This should match the gap in the grid
    return `translateX(-${currentIndex * (cardWidth + gapWidth / visibleItems)}%)`
  }

  // Calculate which page we're on for the dots
  const currentPage = Math.floor(currentIndex / visibleItems)

  // Render star rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={`star ${i < rating ? "star-filled" : "star-empty"}`} />
    ))
  }

  return (
    <div className="testimonial-slider">
      {/* Section title and navigation arrows in the right corner */}
      <div className="testimonial-header">
        <h3 className="h3 service-title">Testimonials</h3>
        <div className="testimonial-nav">
          <button onClick={goToPrevious} className="testimonial-nav-button" aria-label="Previous testimonials">
            <ChevronLeft />
          </button>
          <button onClick={goToNext} className="testimonial-nav-button" aria-label="Next testimonials">
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Testimonial slider container with overflow hidden */}
      <div className="testimonial-track-container">
        {/* Sliding container */}
        <div ref={sliderRef} className="testimonial-track" style={{ transform: getTransformValue() }}>
          {/* Individual testimonial cards */}
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card-container">
              <div className="testimonial-card" onClick={() => openPopup(testimonial)}>
                <div className="testimonial-content">
                  <div className="testimonial-stars">{renderStars(testimonial.rating)}</div>
                  <p className="testimonial-quote">"{testimonial.quote}"</p>
                </div>
                <div className="testimonial-author">
                  {testimonial.image && (
                    <div className="testimonial-avatar">
                      <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    </div>
                  )}
                  <div className="testimonial-author-info">
                    <p className="testimonial-author-name">{testimonial.name}</p>
                    <p className="testimonial-author-title">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      {totalPages > 1 && (
        <div className="testimonial-dots">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              className={`testimonial-dot ${currentPage === index ? "active" : ""}`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Testimonial Popup */}
      {selectedTestimonial && (
        <div className="testimonial-popup-overlay" onClick={closePopup}>
          <div className="testimonial-popup" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button onClick={closePopup} className="testimonial-popup-close" aria-label="Close popup">
              <X />
            </button>

            {/* Popup content */}
            <div className="testimonial-popup-content">
              {/* Header with image and name */}
              <div className="testimonial-popup-header">
                <div className="testimonial-popup-avatar">
                  <img src={selectedTestimonial.image || "/placeholder.svg"} alt={selectedTestimonial.name} />
                </div>
                <div className="testimonial-popup-info">
                  <h3 className="testimonial-popup-name">{selectedTestimonial.name}</h3>
                  <p className="testimonial-popup-title">{selectedTestimonial.title}</p>
                  <div className="testimonial-popup-stars">{renderStars(selectedTestimonial.rating)}</div>
                </div>
              </div>

              {/* Project details */}
              <div className="testimonial-popup-details">
                <div className="testimonial-popup-details-grid">
                  <div>
                    <p className="testimonial-popup-detail-label">Project</p>
                    <p className="testimonial-popup-detail-value">{selectedTestimonial.project}</p>
                  </div>
                  <div>
                    <p className="testimonial-popup-detail-label">Date</p>
                    <p className="testimonial-popup-detail-value">{selectedTestimonial.date}</p>
                  </div>
                </div>
              </div>

              {/* Full testimonial */}
              <div className="testimonial-popup-quote-section">
                <h4 className="testimonial-popup-quote-title">Testimonial</h4>
                <blockquote className="testimonial-popup-quote">"{selectedTestimonial.fullQuote}"</blockquote>
              </div>

              {/* Call to action */}
              <div className="testimonial-popup-cta">
                <p className="testimonial-popup-cta-text">Interested in working together?</p>
                <a
                  href="#contact"
                  onClick={() => {
                    closePopup()
                    document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
                  }}
                  className="testimonial-popup-cta-button"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
