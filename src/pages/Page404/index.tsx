import { Link } from "react-router-dom";
import { Container } from "./style";

export function Page404(){
    return(
            <Container>
                <h3>Página não Encontrada</h3>
                <nav>
                    <Link to="/">Voltar</Link>
                </nav>
            </Container>
        )
}