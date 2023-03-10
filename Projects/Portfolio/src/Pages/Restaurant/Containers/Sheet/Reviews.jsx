import React from "react";
import Review from "../../Components/Reviews/Review";
import Line from "../../Components/Line";

export default function Reviews(props) {
  const reviewsList = [
    {
      name: "Marko",
      rate: 5,
      description:
        "It was AWESOME, top notch service, very tasty food prepared quickly. I`ll definitely come here often.",
    },
    {
      name: "Roman",
      rate: 3,
      description:
        "Not entirely impressed, the food was served quite well and quickly, but the staff did not please me, they were all dissatisfied, and the bartender was rude to me.",
    },
    {
      name: "Sabina",
      rate: 4,
      description:
        "I didn't care where to go, the main thing is to eat quickly. the staff was polite, the interior is very comfortable and beautiful",
    },
  ];
  return (
    <div ref={props.refReviews}>
      <h2>Feedback</h2>
      <div className="flex flex-col gap-[1rem] pc:flex-row pc:gap-[2vw] ">
        {reviewsList.map((item, i) => (
          <Review {...item} key={i}>
            <div className="flex flex-col justify-center">
              <h3>{item.name}</h3>
            </div>
            <Line vertical={false} />
            <p className="text-center text-[1rem] pc:text-[1.2vw]">
              {item.description}
            </p>
          </Review>
        ))}
      </div>
    </div>
  );
}
