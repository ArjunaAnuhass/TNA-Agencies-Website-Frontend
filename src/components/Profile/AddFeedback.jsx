import { Alert, Box, Button, CircularProgress, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addFeedback } from '../State/Feedback/Action';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const AddFeedback = () => {

  const [success, setSuccess] = useState(false);
  const [err, setError] = useState(null);

  const [feedbackData, setFeedbackData] = useState({ feedback: '' });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const feedback = useSelector((state) => state.feedback);
  const { loading, error } = feedback;

  const jwt = localStorage.getItem('jwt');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (feedbackData.feedback) {
      dispatch(addFeedback({ data: feedbackData, jwt }))
      .then(() => {
        setSuccess(true);
    })
    .catch((err) => {
        setError(err);
    })
    }
  };

  useEffect(() => {
    if (success) {
        toast.success("Feedback feed successfully!");
        setTimeout(() => {
            navigate("/"); // Navigate to another page
        }, 2000);  // Redirect after 2 seconds
    }
}, [success, navigate]);

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