import { Box, Card, CardContent, CardHeader, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllFeedbacks } from '../State/Feedback/Action';

const AllFeedback = () => {

    const dispatch = useDispatch();
    const { feedback, loading, error } = useSelector(store => store.feedback);
    // const loading = useSelector((store) => store.feedback.loading);
    // const error = useSelector((store) => store.feedback.error);
  
    const token = localStorage.getItem('jwt');

    useEffect(() => {
        dispatch(getAllFeedbacks(token));
    }, [dispatch, token]);

  return (

    <Box>
      <Card>
        <CardHeader title="Feedback Section" />
        <CardContent>
          {loading && <Typography>Loading feedbacks...</Typography>}
          {error && <Typography color="error">Error: {error.message}</Typography>}
          {!loading && !error && feedback && feedback.length === 0 && <Typography>No feedbacks available.</Typography>}
          {!loading && !error && feedback && feedback.map((item) => (
            <Box key={item.id} item={item} className="my-4 p-4 border rounded-lg shadow-sm">
              <Typography variant="body1" fontWeight="bold">{item.feedback}</Typography>
              {/* <Typography variant="body2" color="textSecondary">{new Date(item.date).toLocaleDateString()}</Typography> */}
              <Divider className="my-2" />
            </Box>
          ))}
        </CardContent>
      </Card>
    </Box>
  )
}

export default AllFeedback