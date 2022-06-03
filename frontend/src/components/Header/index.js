import {Container, Icon, SearchBar} from './style';
import {MdDescription, MdClear, MdSearch} from 'react-icons/md';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  

  return (
    <Container>
      <Icon onClick={()=> navigate('/', {replace: true})}>
        <MdDescription className="description-icon" />
        <h2>Google Doc</h2>
      </Icon>
    </Container>
  );
}
