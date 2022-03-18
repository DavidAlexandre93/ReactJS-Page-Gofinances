import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <header>
        <span>gofinances</span>
        <nav>
          <a href="/">Listagem</a>
          <a href="/create">Cadastro</a>
        </nav>
      </header>
    </Container>
  );
}

export default Header