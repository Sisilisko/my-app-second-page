import {GET_LESSONS} from "../actionsConstants";
import {schTable} from "../schedule-lessons-table.js"

export const test = ()=>({
    type: "",
})

export const getLessons = (dispatch) => {
            dispatch({
                type: GET_LESSONS,
                payload: schTable,
            });
};