import { Container } from "./styles";

export function Header() {
    return (
      <Container>
        <section>
          <nav>
            <a href="#">Home</a>
            <a href="#">Produtos</a>
            <a href="#">Sobre nós</a>
            <a href="#">Contato</a>
          </nav>
        </section>
      </Container>
    )
  }