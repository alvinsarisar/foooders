import React, { useState } from 'react';


const Review = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      text: "RENOWNED FOR ITS VERSATILITY IN THE KITCHEN, RED KING CRAB CAN BE PREPARED IN VARIOUS WAYS, FROM SIMPLE STEAMING OR BOILING TO ELABORATE PREPARATIONS SUCH AS GRILLING INCORPORATING.",
      name: "STEVEN H. PAXSON",
      title: "CEO & Founder",
      img: "profile1.jpg",
    },
    {
      id: 2,
      text: "RENOWNED FOR ITS VERSATILITY IN THE KITCHEN, RED KING CRAB CAN BE PREPARED IN VARIOUS WAYS, FROM SIMPLE STEAMING OR BOILING TO ELABORATE PREPARATIONS SUCH AS GRILLING INCORPORATING.",
      name: "STEVEN H. PAXSON",
      title: "CEO & Founder",
      img: "profile2.jpg",
    },
    {
      id: 3,
      text: "RENOWNED FOR ITS VERSATILITY IN THE KITCHEN, RED KING CRAB CAN BE PREPARED IN VARIOUS WAYS, FROM SIMPLE STEAMING OR BOILING TO ELABORATE PREPARATIONS SUCH AS GRILLING INCORPORATING.",
      name: "STEVEN H. PAXSON",
      title: "CEO & Founder",
      img: "profile3.jpg",
    },
  ]);

  const [newReview, setNewReview] = useState({ text: '', name: '', title: '', img: '' });

  const handleChange = (e) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.text && newReview.name && newReview.img) {
      setReviews([...reviews, { ...newReview, id: reviews.length + 1 }]);
      setNewReview({ text: '', name: '', title: '', img: '' });
    }
  };

  const handleDelete = (id) => {
    setReviews(reviews.filter(review => review.id !== id));
  };

  return (
    <div className="feedback-section">
      <h2>CUSTOMER FEEDBACK</h2>
      <h3>WHAT HAVE LOT'S OF HAPPY CUSTOMER EXPLORE FEEDBACK</h3>
      <div className="reviews">
        {reviews.map((review) => (
          <div className="review" key={review.id}>
            <div className="quote">“</div>
            <p>{review.text}</p>
            <div className="reviewer">
              <img src={review.img} alt={review.name} />
              <div>
                <strong>{review.name}</strong>
                <span>{review.title}</span>
              </div>
              <button onClick={() => handleDelete(review.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="review-form">
        <h3>Submit a Review</h3>
        <input
          type="text"
          name="text"
          placeholder="Review text"
          value={newReview.text}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={newReview.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Your Title"
          value={newReview.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="img"
          placeholder="Image URL"
          value={newReview.img}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Review;