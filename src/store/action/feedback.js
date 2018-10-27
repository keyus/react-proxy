
export const getFeedbackList = (data)=> {
  return {
    type: 'feedback/GET_FEEDBACK_LIST',
    data,
  };
}

export const getFeedbackByID = (id) => {
  return {
    type: 'feedback/GET_FEEDBACK_OBJ',
    id,
  };
}
