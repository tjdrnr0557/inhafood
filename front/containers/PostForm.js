import React, { useCallback, useState, useEffect, useRef } from "react";
import { Form, Input, Button, Rate } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  ADD_POST_REQUEST,
  REMOVE_IMAGE,
  UPLOAD_IMAGES_REQUEST
} from "../reducers/post";

const PostForm = ({ storeid }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [rate, setRate] = useState(0);
  const { imagePaths, isAddingPost, postAdded, postRate } = useSelector(
    state => state.post
  );
  const imageInput = useRef();

  useEffect(() => {
    if (postAdded) {
      setText("");
    }
    if (postRate) setRate(0);
  }, [postAdded, postRate]);

  const onSubmitForm = useCallback(
    e => {
      e.preventDefault();
      if (!text || !text.trim()) {
        return alert("게시글을 작성하세요");
      }
      if (!rate) {
        return alert("평점을 입력해주세요");
      }
      const formData = new FormData();
      imagePaths.forEach(i => {
        formData.append("image", i);
      });
      formData.append("content", text);
      formData.append("StoreId", storeid);
      formData.append("rate", rate);
      dispatch({
        type: ADD_POST_REQUEST,
        data: formData
      });
    },
    [text, imagePaths, rate]
  );

  const onChangeText = useCallback(e => {
    setText(e.target.value);
  }, []);
  const onChangeRate = useCallback(rate => {
    setRate(rate);
  });

  const onChangeImages = useCallback(e => {
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, f => {
      imageFormData.append("image", f);
    }); //call 자세히 알아보기
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData
    });
  }, []);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onRemoveImage = useCallback(
    index => () => {
      dispatch({
        type: REMOVE_IMAGE,
        index
      });
    },
    []
  );

  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onSubmit={onSubmitForm}
    >
      <Rate value={rate} allowHalf onChange={onChangeRate} />
      <Input.TextArea
        maxLength={140}
        placeholder=""
        value={text}
        onChange={onChangeText}
      />
      <div>
        <input
          type="file"
          multiple
          hidden
          ref={imageInput}
          onChange={onChangeImages}
        />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button
          type="primary"
          style={{ float: "right" }}
          htmlType="submit"
          loading={isAddingPost}
        >
          등록
        </Button>
      </div>
      <div>
        {imagePaths.map((v, i) => (
          <div key={v} style={{ display: "inline-block" }}>
            <img
              src={`http://localhost:3065/${v}`}
              style={{ width: "200px" }}
              alt={v}
            />
            <div>
              <Button onClick={onRemoveImage(i)}>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;
