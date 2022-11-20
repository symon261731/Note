import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import FormForPost from './FormForPost';
import OnePost from '../OnePost/OnePost';
import { setPostThunk } from '../../redux/actions/postActions';
import './FormForPost.scss';
import './Posts.scss';

export default function Posts() {
  // const user = useSelector((state) => state.user);
  const { id } = useParams();
  const postID = id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPostThunk(postID));
  }, []);

  const post = useSelector((state) => state.post);

  return (

    <div className="one-post">
      <div className="one-post__list">
        {post?.map((el) => (
          <OnePost key={el.id} info={el} />
        ))}
      </div>
      <FormForPost />
    </div>

  );
}
