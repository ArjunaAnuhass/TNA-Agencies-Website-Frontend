import { Box, Button, Card, CardContent, CardHeader, Divider, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteFeedback, getAllFeedbacks } from '../../components/State/Feedback/Action';

const AdminFeedback = () => {

    const dispatch = useDispatch();
    const { feedback, loading, error } = useSelector(store => store.feedback);
    
    const token = localStorage.getItem('jwt');  // Assuming JWT is stored in localStorage

    // Fetch all feedbacks when component mounts
    useEffect(() => {
        dispatch(getAllFeedbacks(token));
    }, [dispatch, token]);

    // Delete a feedback by feedbackId
    const handleDelete = (feedbackId) => {
        dispatch(deleteFeedback(feedbackId, token));
    };

  return (
    
    <Box>
            <Card>
                <CardHeader title="Admin Feedback Section" />
                <CardContent>
                    {/* {loading && <Typography>Loading feedbacks...</Typography>} */}
                    {error && <Typography color="error">Error: {error.response ? error.response.data : error.message}</Typography>}
                    {!loading && !error && feedback.length === 0 && <Typography>No feedbacks available.</Typography>}
                    {!loading && !error && feedback.map((item) => (
                        <Box key={item.id} item={item} className="my-4 p-4 border rounded-lg shadow-sm">
                            <Typography variant="body1" fontWeight="bold">{item.feedback}</Typography>
                            <Divider className="my-2" />
                            <Button 
                                variant="contained" 
                                className="mt-2"
                                onClick={() => handleDelete(item.id)}
                            >
                                Delete Feedback
                            </Button>
                        </Box>
                    ))}
                </CardContent>
            </Card>
        </Box>
  )
}

export default AdminFeedback