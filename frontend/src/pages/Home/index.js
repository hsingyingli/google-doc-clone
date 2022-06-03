import {Fragment, useEffect, useRef, useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {deleteDocAPI, createDocAPI, getAllDocsAPI} from '../../api/doc';
import {MdDescription, MdOutlineDelete, MdOutlineCreate} from 'react-icons/md';
import {AddDocument, Container, DocumentInfo} from './style';
import Popup from '../../components/Popup';
export default function Home() {
  const [docs, setDocs] = useState([]);
  const [popup, setPopup] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initDoc = async () => {
      const data = await getAllDocsAPI();
      setDocs(data);
      console.log(data);
    };
    initDoc();
  }, []);

  const handleCreateDoc = async (event) => {
    event.preventDefault();
    const title = inputRef.current.value;
    const doc = await createDocAPI(title, {});
    if (doc !== null) {
      navigate(`/doc/${doc._id}`, {replace: true});
    }
  };

  const handleDeleteDoc = async (_id) => {
    await deleteDocAPI(_id);
    window.location.reload()
  };

  return (
    <Fragment>
      <Container>
        {docs.length ? (
          docs.map((doc) => {
            return (
              <DocumentInfo key={doc._id}>
                <Link className="doc-link" to={`/doc/${doc._id}`}>
                  <div className="title">
                    <MdDescription className="description-icon" />
                    {doc.title}
                  </div>
                </Link>
                <div
                  className="delete"
                  onClick={() => handleDeleteDoc(doc._id)}
                >
                  <MdOutlineDelete className="delete-icon" />
                </div>
              </DocumentInfo>
            );
          })
        ) : (
          <div>No document yet!</div>
        )}
      </Container>
      <AddDocument onClick={() => setPopup(true)}>
        <MdOutlineCreate className="create-icon" />
      </AddDocument>
      <Popup popup={popup} setPopup={setPopup}>
        <form onSubmit={handleCreateDoc}>
          <label htmlFor="title">Title: </label>
          <input
            htmlFor="title"
            type="text"
            defaultValue="untitled"
            ref={inputRef}
          />
          <button>Create</button>
        </form>
      </Popup>
    </Fragment>
  );
}
