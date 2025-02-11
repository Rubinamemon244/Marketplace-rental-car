import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import SidebarCategoryList from './SidebarCategoryList';
import ReviewCard from './ReviewCards';

interface Review {
  _id: string;
  reviewer: string;
  reviewerName: string;
  rating: number;
  comment: string;
  date: string;
  createdAt: string;
  car: { name: string };
}

interface Category {
  name: string;
  slug: { current: string };
}

const ReviewsSidebar = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // Fetch Categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await client.fetch<Category[]>(
          `*[_type == "category"]{ name, slug }`
        );
        setCategories(categoriesData);
        
        // Set first category as default (optional)
        if (categoriesData.length > 0) {
          setSelectedCategory(categoriesData[0].name);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  // Fetch Reviews when category changes
  useEffect(() => {
    const fetchReviews = async () => {
      if (!selectedCategory) {
        setReviews([]);
        return;
      }
      try {
        const reviewsData = await client.fetch<Review[]>(
          `*[_type == "review" && car->category->name == $selectedCategory]{
            _id,
            reviewer,
            rating,
            comment,
            date,
            car->{name}
          }`,
          { selectedCategory }
        );
        setReviews(reviewsData);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, [selectedCategory]);

  return (
    <div className="flex flex-col w-1/4 p-4 bg-gray-50 max-h-screen overflow-y-auto border-r border-gray-200">
      {/* Category Filter */}
      <SidebarCategoryList categories={categories} setSelectedCategory={setSelectedCategory} />
      
      {/* Reviews */}
      <div className="mt-6">
        {reviews.length > 0 ? (
          reviews.map((review) => <ReviewCard key={review._id} review={review} />)
        ) : (
          <p className="text-gray-500 text-center">No reviews found.</p>
        )}
      </div>
    </div>
  );
};

export default ReviewsSidebar;
