import React from 'react'
import { arrowDownSVG } from '../../../../public/Portfolio/Svgs'
import { SmallButton } from '../../../../public/Portfolio/Components'

function AboutMe(props) {
	return (
		<>
			<SmallButton
				className=' absolute bottom-[6rem] pc:bottom-[10vh] '
				aria-label='Scroll to projects'
				onClick={() =>
					props.blockRefs[1].scrollIntoView({ behavior: 'smooth' })
				}
			>
				{arrowDownSVG}
			</SmallButton>
		</>
	)
}

export default AboutMe
