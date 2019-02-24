import { utility as above } from './above'

export const mapPropsBreakpoints = (breakpoints, fn) => props => Object.keys(props)
	.filter(prop => Object.keys(breakpoints).includes(prop))
	.map(label => above(breakpoints)[label]`${fn(props[label], props)}`)
