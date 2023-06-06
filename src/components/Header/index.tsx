import { Link } from "react-router-dom";
import { Container } from "./styles";

export function Header() {
    return (
      <Container>
        <section>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </nav>
        </section>
      </Container>
    )
  }