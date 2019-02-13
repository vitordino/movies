import React, { Fragment, lazy, Suspense } from 'react'
import { Router, Location } from '@reach/router'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import Loader from 'components/Loader'
const SearchView = lazy(() => import('components/SearchView'))
const FavoritesView = lazy(() => import('components/FavoritesView'))
const DetailView = lazy(() => import('components/DetailView'))
const AboutPage = lazy(() => import('components/AboutPage'))

const App = () => (
	<Fragment>
		<Navbar/>
		<div style={{flex: 1}}>
			<Suspense fallback={<Loader/>}>
				<Router>
					<SearchView path='/'/>
					<SearchView isSearchable={false} path='/featured' kindURL='featured'/>
					<FavoritesView path='/favorites'/>
					<AboutPage path='/about'/>
					<SearchView path=':kindURL'/>
					<DetailView path=':kindURL/:id'/>
				</Router>
			</Suspense>
		</div>
		<Footer/>
	</Fragment>
)


export default App
