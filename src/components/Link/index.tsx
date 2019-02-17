import React from 'react'
import { Link as ReachLink } from '@reach/router'

/* eslint-disable jsx-a11y/anchor-has-content */
const Link = ({to, children, className, style, target}) => {
	const href = (to || {}).pathname || (typeof to === 'string' ? to : '/')
	const props = {className, style, children, target}
	if(/^[./]/.test(href)) return <ReachLink {...props} to={to} />
	return <a {...props} href={href} target="_blank" rel="noopener noreferrer" />
}

export default Link
