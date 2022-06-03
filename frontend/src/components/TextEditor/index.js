import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import { useState, useEffect } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Container } from "./style";
import {getDocAPI, updateDocAPI} from "../../api/doc";
import {convertFromRaw} from "draft-js";

export default function TextEditor({_id}) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState)
    const content = convertToRaw(editorState.getCurrentContent());
    updateDocAPI(_id, content)
  }

  useEffect(()=> {
    const getDoc = async () => {
      const data = await getDocAPI(_id)
      console.log(JSON.parse(data.data))
      if (data?.data) {
        setEditorState(EditorState.createWithContent(convertFromRaw(JSON.parse(data.data))));
      }
    }
    getDoc();
  }, [])
  return (
    <Container>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbar"
        wrapperClassName="wrapper"
        editorClassName="editor"     
        onEditorStateChange={onEditorStateChange}
    />
    </Container>
  )

}
