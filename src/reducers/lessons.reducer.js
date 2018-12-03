import {schTable} from "../schedule-lessons-table.js";
import {GET_LESSONS} from "../actionsConstants"

const lessonsReducer = (state = {schTable}, action) => {
    switch (action.type) {
        case GET_LESSONS:
            // return [...action.payload];
    default:
        return state
    }
};

export default lessonsReducer;