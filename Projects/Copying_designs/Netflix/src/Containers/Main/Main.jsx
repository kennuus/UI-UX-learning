import React from 'react'
import Row from '../../Components/Main/Row'
import Trailer from '../../Components/Main/Trailer'

const series = [
	{
		bgImg: 'Main/Trailer/witcherBg.webp',
		titleImg: 'Main/Trailer/withcerTitle.webp',
		description:
			'Геральт из Ривии, мутировавший охотник на монстров по найму,отправляется навстречу своей судьбе в неспокойный мир, где люди часто оказываются гораздо коварнее монстров.',
		age: '18+',
	},
	{
		bgImg: 'Main/Trailer/bg.webp',
		titleImg: 'Main/Trailer/Title.webp',
		description:
			'В спин-оффе сериала «Большой рот» мухамуры, гормон-монстры и другие существа влюбляются, плетут интриги и заботятся о нуждах своих клиентов — людей.',
		age: '16+',
	},
]
const rowsTitles = [
	{
		title: 'Комедии, получившие признание критиков',
	},
	{
		title: 'Продолжить смотреть как Марк',
	},
	{
		title: 'В тренде',
	},
]

export default function Main() {
	return (
		<main>
			<Trailer
				bgImg={series[0].bgImg}
				titleImg={series[0].titleImg}
				description={series[0].description}
				age={series[0].age}
			/>

			{rowsTitles.map((row) => (
				<Row title={row.title} />
			))}
		</main>
	)
}
