import React from 'react'

export default function FooterIcon(props) {
	return (
		<li>
			<button>
				<a target='_blank' href={props.link}>
					{props.title}
				</a>
			</button>
		</li>
	)
}
