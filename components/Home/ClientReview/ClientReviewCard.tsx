import React from "react"
import Image from "next/image"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

type Review = {
  id: number
  name: string
  role?: string
  avatar: string
  rating: number
  text: string
}

type ClientReviewCardProps = {
  review: Review
}

const Stars = ({ rating }: { rating: number }) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1)
  return (
    <div className="flex items-center text-yellow-400 gap-1">
      {stars.map((star) =>
        star <= rating ? (
          <AiFillStar key={star} className="w-4 h-4" />
        ) : (
          <AiOutlineStar
            key={star}
            className="w-4 h-4 text-yellow-300"
          />
        ),
      )}
    </div>
  )
}

const ClientReviewCard = ({ review }: ClientReviewCardProps) => {
  return (
    <article className="min-w-full sm:min-w-[80%] md:min-w-[60%] lg:min-w-[45%] bg-white dark:bg-gray-800/70 border border-gray-100 dark:border-gray-700 rounded-3xl p-6 shadow-sm">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-full overflow-hidden relative shrink-0">
          <Image src={review.avatar} alt={review.name} fill sizes="56px" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {review.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {review.role}
          </p>
        </div>
      </div>

      <Stars rating={review.rating} />

      <p className="mt-4 text-gray-700 dark:text-gray-200 text-sm leading-7">
        {review.text}
      </p>
    </article>
  )
}

export type { Review }
export default ClientReviewCard