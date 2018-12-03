import {GET_LESSONS} from "../actionsConstants";
import {schTable} from "../schedule-lessons-table.js"

export const test = ()=>({
    type: "",
})

export const getLessons = (dispatch) => {
    fetch({schTable})
        // .then(data => data.json())
        .then(data => {
            const arr = data.map;
            dispatch({
                type: GET_LESSONS,
                payload: arr,
            });
        });
};