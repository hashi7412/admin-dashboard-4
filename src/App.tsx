import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Landing from './pages/Landing'
import Error from './pages/404'
import './assets/scss/index.scss'
import './assets/scss/animate.min.css'


function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Landing}></Route>
				<Route exact path="/landing" component={Landing}></Route>
				<Route path="*" component={Landing}></Route>
			</Switch>
			<ToastContainer/>
		</BrowserRouter>
	)
}

export default App
