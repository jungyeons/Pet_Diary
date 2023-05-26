import { StyleSheet } from "react-native";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Community = () => {
  return (
    <div style={styles.App}>
      <h1>애완동물 게시판</h1>
      <div style={styles.container}>
        {viewContent.map((element) => (
          <div style={{ border: "1px solid #333" }}>
            <h2>제목</h2>
            <div>내용</div>
          </div>
        ))}
      </div>
      <div style={styles.formwrapper}>
        <input
          style={styles.titleinput}
          type="text"
          placeholder="제목"
          onChange={getValue}
          name="title"
        />
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </div>
      <button style={styles.submitbutton} onClick={submitReview}>
        등록
      </button>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginRight: "auto",
    marginBottom: 50,
    marginLeft: "auto",
    width: "80%",
    borderWidth: 1,
    borderColor: "#333",
    borderStyle: "solid",
    paddingTop: 10,
    paddingRight: 0,
    paddingBottom: 30,
    paddingLeft: 0,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },

  formwrapper: {
    width: "60%",
    marginTop: 0,
    marginRight: "auto",
    marginBottom: 0,
    marginLeft: "auto",
  },

  titleinput: {
    width: 500,
    height: 40,
    margin: 10,
  },

  submitbutton: {
    width: 200,
    height: 50,
    fontSize: 20,
    paddingTop: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    borderWidth: 0,
    borderColor: "black",
    borderStyle: "solid",
    backgroundColor: "rgb(90, 132, 238)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    marginTop: 40,
    verticalAlign: "right",
  },

  App: {
    textAlign: "center",
  },
});
export default Community;
