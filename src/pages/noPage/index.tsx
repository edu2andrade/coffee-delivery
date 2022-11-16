import { Link } from 'react-router-dom'
import { NoPageContainer } from './styles'

export function NoPage() {
  return (
    <NoPageContainer>
      <h1>Oops!</h1>
      <h3>404 - Page not found</h3>
      <p>
        The page you are looking for might have been removed, had its name
        changed or is temporarily unavailable.
      </p>
      <Link to="/" className="link">
        Go to HomePage
      </Link>
    </NoPageContainer>
  )
}
