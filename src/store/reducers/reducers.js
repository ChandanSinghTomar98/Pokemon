const initialState = {
    readAllPokemon: [],
    updateData:null,
    addData:null,
    deleteData:null,
    loading: false,
    error: null,
  };


  const userReducer = (state = initialState, action) => {
    switch (action.type) {
  
      
      
      case "GET_DATA_REQUEST":
        return {
          ...state,
          loading: true,
          error: null,
        };
      case "GET_DATA_SUCCESS":
        return {
          ...state,
          readAllPokemon: action.payload,
          loading: false,
          error: null,
        };
      case "GET_DATA_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };

        case "DELETE_REQUEST":
          return {
            ...state,
            loading: true,
            error: null,
          };
        case "DELETE_SUCCESS":
          return {
            ...state,
            deleteData: action.payload,
            loading: false,
            error: null,
          };
        case "DELETE_FAILURE":
          return {
            ...state,
            loading: false,
            error: action.payload,
        };
        
        case "ADD_REQUEST":
          return {
            ...state,
            loading: true,
            error: null,
          };
        case "ADD_SUCCESS":
          return {
            ...state,
            addData: action.payload,
            loading: false,
            error: null,
          };
        case "ADD_FAILURE":
          return {
            ...state,
            loading: false,
            error: action.payload,
        };
      
        case "UPDATE_REQUEST":
          return {
            ...state,
            loading: true,
            error: null,
          };
        case "UPDATE_SUCCESS":
          return {
            ...state,
            updateData: action.payload,
            loading: false,
            error: null,
          };
        case "UPDATE_FAILURE":
          return {
            ...state,
            loading: false,
            error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;