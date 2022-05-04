import { actionConstants } from "./actions";

const initState = {
  isLoading: false,
  isError: false,
  card: {},
  checklists: [],
};

const singleCardReducer = (state = initState, action) => {
  switch (action.type) {
    case actionConstants.GET_CARD_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstants.GET_CARD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        card: action.payload.card,
        checklists: action.payload.checklists,
      };
    case actionConstants.GET_CARD_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    // Update Desc
    case actionConstants.UPDATE_CARD_DESC_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstants.UPDATE_CARD_DESC_SUCCESS:
      return {
        ...state,
        isLoading: false,
        card: action.payload.data.card,
      };
    case actionConstants.UPDATE_CARD_DESC_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    // Update Cover
    case actionConstants.UPDATE_CARD_COVER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstants.UPDATE_CARD_COVER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        card: action.payload.data.card,
      };
    case actionConstants.UPDATE_CARD_COVER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    // Update Labels
    case actionConstants.UPDATE_CARD_LABELS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstants.UPDATE_CARD_LABELS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        card: action.payload.data.card,
      };
    case actionConstants.UPDATE_CARD_LABELS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    // add checklist
    case actionConstants.ADD_CHECKLIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstants.ADD_CHECKLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        card: action.payload.card,
        checklists: [...state.checklists, action.payload.checklist],
      };
    case actionConstants.ADD_CHECKLIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    // add item to checklist
    case actionConstants.ADD_ITEM_CHECKLIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstants.ADD_ITEM_CHECKLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        checklists: state.checklists.map((el) =>
          el._id == action.payload.checklist._id ? action.payload.checklist : el
        ),
      };
    case actionConstants.ADD_ITEM_CHECKLIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    // toggle item in checklist
    case actionConstants.UPDATE_CHECKLIST_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionConstants.UPDATE_CHECKLIST_ITEM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        checklists: state.checklists.map((el) =>
          el._id == action.payload._id ? action.payload : el
        ),
      };
    case actionConstants.UPDATE_CHECKLIST_ITEM_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
      case actionConstants.DELETE_CHECKLIST_REQUEST:
        return {
          ...state,
          isLoading: true,
        };
      case actionConstants.DELETE_CHECKLIST_SUCCESS:
        return {
          ...state,
          isLoading: false,
          card: action.payload.card,
          checklists: state.checklists.filter(el => el._id != action.payload.checklists._id)
          
        };
      case actionConstants.DELETE_CHECKLIST_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
    default:
      return state;
  }
};

export default singleCardReducer;
