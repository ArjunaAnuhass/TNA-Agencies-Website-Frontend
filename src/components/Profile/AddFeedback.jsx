import { Alert, Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFeedback } from '../State/Feedback/Action';

const AddFeedback = () => {

    const [feedbackData, setFeedbackData] = useState({ feedback: '' });
  const dispatch = useDispatch();
  
  const feedback = useSelector((state) => state.feedback);
  const { loading, error } = feedback;

  const jwt = localStorage.getItem('jwt');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedbackData.feedback) {
      dispatch(addFeedback({ data: feedbackData, jwt }));
    }
  };

  return (
    
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Box
        className="shadow-lg rounded-lg p-6 w-full max-w-lg"
        component="form"
        onSubmit={handleSubmit}
        sx={{ backgroundColor: '#fff' }}
      >
        <Typography variant="h5" className="mb-4 text-center">Add Your Feedback</Typography>

        <TextField
          label="Your Feedback"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          value={feedbackData.feedback}
          onChange={(e) => setFeedbackData({ ...feedbackData, feedback: e.target.value })}
          className="mb-4"
        />

        {error && <Alert severity="error" className="mb-4">Failed to submit feedback. Please try again.</Alert>}

        <div className="flex justify-between items-center">
          <Button type="submit" variant="contained" disabled={loading}>
            {loading ? <CircularProgress size={24} /> : 'Submit Feedback'}
          </Button>
        </div>
      </Box>
    </div>
  )
}

export default AddFeedback