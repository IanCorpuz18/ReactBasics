import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from "../actions/actionTypes";

const initialState = {
    places: [],
    selectedPlace: null
};
const reducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_PLACE:
        return{
            ...state,
            places: state.places.concat({
                key : Math.random(), 
                name : action.placeName,
                date: action.placeDate,
               image: {
                   uri: "data:image/jpeg;base64,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"
               }
               })
        };
        case DELETE_PLACE:
        return{
            ...state,
            places: state.places.filter(place => {
                return place.key !== state.selectedPlace.key;
              }),
              selectedPlace:null
        };
        case SELECT_PLACE:
        return{
          ...state,
         selectedPlace: state.places.find(place => {
            return place.key === action.placeKey;
          })
        };
        case DESELECT_PLACE:
        return{
            ...state,
            selectedPlace:null
        };
            default:
                return state;
    }
};

export default reducer;