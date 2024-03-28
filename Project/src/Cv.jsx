import { Link } from "react-router-dom"
const myCv = new URL('./assets/CV_Korhonen_Ilkka.pdf', import.meta.url).href

const Cv = () => (<main id="home">
    <h1 className="lg-heading">Curriculum Vitae of <span className="text-secondary">Ilkka</span> Korhonen</h1>
    <p><Link to={myCv}>Download here</Link></p>

</main>

)

export default Cv