import { Link } from 'react-router-dom'
import './Error.scss'
function Error() {
  return (
      <div className="eror">
          <div className="nb404">404</div>
          <div className="oups">Oups! La page que <br className="mobile"></br>vous demandez n'existe pas.</div>
          <div className="retour">
            <Link to="/" className="retour">
            Essayez plutôt ici ! 
            </Link>
            </div>
      </div>
  )
}

export default Error