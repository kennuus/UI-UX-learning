import React from 'react'
import Review from '../../Components/Reviews/Review'
import Line from '../../Components/Line'

const reviewsList = [
	{
		name: 'Marko',
		rate: 5,
		description:
			'It was AWESOME, top notch service, very tasty food prepared quickly. I`ll definitely come here often.',
	},
	{
		name: 'Roman',
		rate: 3,
		description:
			'Not entirely impressed, the food was served quite well and quickly, but the staff did not please me, they were all dissatisfied, and the bartender was rude to me.',
	},
	{
		name: 'Sabina',
		rate: 4,
		description:
			"I didn't care where to go, the main thing is to eat quickly. the staff was polite, the interior is very comfortable and beautiful",
	},
]
export default function Reviews(props) {
	return (
		<div ref={props.refReviews}>
			<h2>Feedback</h2>
			<Line showAlways={true} />
			<div className='flex pc:flex-row flex-col gap-[0.5rem] pc:gap-[1.5vh]'>
				{reviewsList.map((item, i) => (
					<Review {...item} key={i} />
				))}
			</div>
		</div>
	)
}
