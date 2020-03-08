import React, { useState, useCallback, useEffect } from 'react';
import OverlayLoading from '../../../components/OverlayLoading';
import { getComments } from '../../../api';
import CommentListItem from './CommentListItem';

export default function CommentList({ id }: { id: string }) {
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  const load = useCallback(async () => {
    const res = await getComments(id);
    if (res.ok && res.status === 200) {
      const data: any = res.data;
      setComments(data.comments);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, []);

  if (loading) return <OverlayLoading show />;
  return (
    <>
      {comments.map(c => (
        <CommentListItem key={c.id} comment={c} />
      ))}
    </>
  );
}
