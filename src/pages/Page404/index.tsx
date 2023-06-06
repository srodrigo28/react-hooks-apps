import { Link } from "react-router-dom";
import { Container, ButtonBack } from "./style";

export function Page404(){
    return(
            <Container>
                <h3>Página não Encontrada</h3>
                <ButtonBack>
                    <Link to="/">Voltar</Link>
                </ButtonBack>
            </Container>
        )
}