import { Switch, useLocation } from 'react-router-dom'

function usePageViews() {
	let location = useLocation()

	useEffect(() => {
		ga.send(['pageview', location.pathname])
	}, [location])
}

function App() {
	usePageViews()
	return <Switch>{/* your routes here */}</Switch>
}
