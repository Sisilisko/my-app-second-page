import {GET_LESSONS} from "../actionsConstants"

export const obj = {
    type: "",
}

export const getLessons = (dispatch)=>{
    dispatch({
        type: GET_LESSONS,
        payload: Array,
    })

}