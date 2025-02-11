// src\components\Sidebar\ReviewCards.tsx
import React from 'react';

interface Review {
  car: { name: string }; // Car object with a `name` field
  reviewerName: string; // Name of the reviewer
  rating: number; // Rating (1 to 5)
  comment: string; // Review comment
  createdAt: string; // Review date in ISO format
}

interface ReviewCardProps {
  review: Review; // Single review object
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="p-4 bg-white rounded-md shadow-md mb-4">
      <h3 className="font-bold text-gray-800">{review.car.name}</h3>
      <p className="text-sm text-gray-600">Reviewer: {review.reviewerName}</p>
      <p className="text-sm text-gray-600 mt-12">Rating: {review.rating}/5</p>
      {/* <p className="text-sm text-gray-600 mt-2">{review.comment}</p> */}
      <p className="mt-12"> {review.comment} </p> 

      <p className="text-xs text-gray-500 mt-4">
        Reviewed on: {new Date(review.createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};

export default ReviewCard;