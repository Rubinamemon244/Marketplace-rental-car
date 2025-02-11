// src\components\Reviews.tsx
// import React from "react";

interface Review {
    _id: string;
    reviewerName: string;
    rating: number;
    comment: string;
    createdAt: string;
  }
  
  const Reviews = ({ reviews }: { reviews: Review[] }) => {
    return (
      <div className="space-y-4">
        {reviews && reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review._id} className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-center mb-2">
                <p className="text-gray-800 font-bold">{review.reviewerName}</p>
                <div className="flex">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
              <p className="text-gray-400 text-sm">
                {new Date(review.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No reviews yet!</p>
        )}
      </div>
    );
  };
  
  export default Reviews;
  