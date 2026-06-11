import React, { useState } from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import ClientReviewCard, { type Review } from "./ClientReviewCard"

const reviews: Review[] = [
  {
    id: 1,
    name: "Sophia Johnson",
    role: "CEO, BrightCo",
    avatar: "/images/u1.jpg",
    rating: 5,
    text: "Outstanding work — the team delivered on time and exceeded expectations.",
  },
  {
    id: 2,
    name: "Liam Smith",
    role: "Founder, Startly",
    avatar: "/images/u2.jpg",
    rating: 5,
    text: "Great communication and attention to detail. Highly recommended!",
  },
  {
    id: 3,
    name: "Olivia Brown",
    role: "Marketing Lead",
    avatar: "/images/u3.jpg",
    rating: 4,
    text: "Beautiful designs and solid implementation — a pleasure to work with.",
  },
  {
    id: 4,
    name: "Noah Wilson",
    role: "Product Manager",
    avatar: "/images/u4.jpg",
    rating: 5,
    text: "They understood our needs and shipped a polished product.",
  },
]

const ClientReview: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextReview = () => {
    setActiveIndex((current) => (current + 1) % reviews.length)
  }

  const prevReview = () => {
    setActiveIndex((current) =>
      current === 0 ? reviews.length - 1 : current - 1,
    )
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white/50 to-transparent dark:from-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              What Our Clients Say
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">
              Real feedback from real clients — we focus on results, clarity and long-term partnerships.
            </p>
          </div>

          <div className="flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={prevReview}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-gray-600"
              aria-label="Previous review"
            >
              <AiOutlineArrowLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={nextReview}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:border-gray-300 hover:text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-gray-600"
              aria-label="Next review"
            >
              <AiOutlineArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="w-full shrink-0 px-2 sm:px-4"
              >
                <ClientReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {reviews.map((review, index) => (
            <button
              key={review.id}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 rounded-full transition ${
                index === activeIndex
                  ? "bg-gray-900 dark:bg-white"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={`Show review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientReview;
