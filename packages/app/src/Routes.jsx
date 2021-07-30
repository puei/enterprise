import { Router } from '@reach/router'
import HomePage from './containers/HoePage'

function Routes() {
    return (
        <Router>
            <HomePage path='/' />
        </Router>
    )
}

export default Routes
