import axios from "axios";

export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILURE = "GET_DATA_FAILURE";

export const DELETE_REQUEST = "DELETE_REQUEST";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

export const ADD_REQUEST = "ADD_REQUEST";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAILURE = "ADD_FAILURE";

export const UPDATE_REQUEST = "UPDATE_REQUEST";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
export const UPDATE_FAILURE = "UPDATE_FAILURE";

export const readAllData = (API_URL) => {
    return (dispatch) => {
      dispatch({ type: GET_DATA_REQUEST });
      axios
        .get(API_URL + "api/v1/getTodos")
        .then((response) => {
          dispatch({ type: GET_DATA_SUCCESS, payload: response.data });
        })
  
        .catch((error) => {
          dispatch({ type: GET_DATA_FAILURE, payload: error.message });
        });
    };
  };

  export const deletedata = (API_URL,data) => {
    return (dispatch) => {
      dispatch({ type: DELETE_REQUEST });
      axios
        .delete(API_URL + `api/v1/deleteTodo/${data}`)
        .then((response) => {
          dispatch({ type: DELETE_SUCCESS, payload: response.data });
          return dispatch(readAllData(API_URL));
        })
  
        .catch((error) => {
          dispatch({ type: DELETE_FAILURE, payload: error.message });
        });
    };
  };  


  export const addData = (API_URL,data) => {
    return (dispatch) => {
      dispatch({ type: ADD_REQUEST });
      axios
        .post(API_URL + "api/v1/createTodo",data)
        .then((response) => {
          dispatch({ type: ADD_SUCCESS, payload: response.data });
          return dispatch(readAllData(API_URL));
        })
  
        .catch((error) => {
          dispatch({ type: ADD_FAILURE, payload: error.message });
        });
    };
  };


  export const updateData = (API_URL,ids,data) => {
    return (dispatch) => {
      dispatch({ type: UPDATE_REQUEST });
      axios
        .put(API_URL + `api/v1/updateTodo/${ids}`,data)
        .then((response) => {
          dispatch({ type: UPDATE_SUCCESS, payload: response.data });
          return dispatch(readAllData(API_URL));
        })
  
        .catch((error) => {
          dispatch({ type: UPDATE_FAILURE, payload: error.message });
        });
    };
  };
   