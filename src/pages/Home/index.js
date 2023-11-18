import { Link } from 'react-router-dom';

import arrowIcon from '../../assets/images/icons/arrow.svg';
import editIcon from '../../assets/images/icons/edit.svg';
import trashIcon from '../../assets/images/icons/trash.svg';

import {
  Container, Header, ListContainer, Card, InputSearchContainer,
} from './styles';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar pelo nome..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>

        <Link to="/new">Novo contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>

            <img src={arrowIcon} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Fernanda Leite</strong>
              <small>instagram</small>
            </div>

            <span>dev.fernandaleite@gmail.com</span>
            <span>(31) 99999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/123">
              <img src={editIcon} alt="Edit" />
            </Link>

            <button type="button">
              <img src={trashIcon} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
