
export const initialState = {
    data: [], 
    editIndex: null, 
}


export const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_DATA":
        return {
          ...state,
          data: [...state.data, action.payload],
        };
      case "UPDATE_DATA":
        return {
          ...state,
          data: action.payload,
        };
      case "DELETE_DATA":
        const filteredData = state.data.filter(
          (_, index) => index !== action.payload
        );
        return {
          ...state,
          data: filteredData,
        };
      case "MAKE_NULL":
        return {
          ...state,
          editIndex: action.payload,
        };
      case "MAKE_NOT_NULL":
        return {
          ...state,
          editIndex: action.payload,
        };
      default:
        return state;
    }
  };
