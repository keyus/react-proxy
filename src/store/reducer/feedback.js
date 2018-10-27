const initState = {
  feedbackObj: {},
  feedbackList: [],
};

//test data
const defautListData = [{
  key: '1',
  id: '015',
  name: '測試01',
  account: 'a000000001',
  type: '其他反饋',
  feedback: 'XXXXXXXXXXXXXXX',
  time: '2018-07-31 15:30',
  status: true,
  replyMessage: 'XXXXXXXXXXXX',
  message: 'XXXXXXXXXXXXXXXXXXXX',
}, {
  key: '2',
  id: '016',
  name: '測試02',
  account: 'a000000002',
  type: '其他反饋',
  feedback: 'XXXXXXXXXXXXXXX',
  time: '2018-07-31 15:30',
  status: false,
  replyMessage: '',
  message: 'XXXXXXXXXXXXXXXXXXXX',
}];

export default function (state = initState, action ) {
  switch (action.type){
    
    case 'feedback/GET_FEEDBACK_OBJ': {
      const { id }  = action;
      const { feedbackList } = state;
      const dataIndex = feedbackList.findIndex(val => val.id === id);

      return {
        ...state,
        feedbackObj: feedbackList[dataIndex] || {},
      }
    }
    
    case 'feedback/GET_FEEDBACK_LIST':
      return {
        ...state,
        feedbackList: defautListData,
      }

    default:
      return state;
  }
}
