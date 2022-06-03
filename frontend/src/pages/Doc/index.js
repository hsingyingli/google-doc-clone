import {useParams} from 'react-router-dom'
import { Container } from './style';
import TextEditor from '../../components/TextEditor';
export default function Doc() {
  const params = useParams();
  return (
    <Container>
      <TextEditor _id={params.docId}/>
    </Container>
  )
}
