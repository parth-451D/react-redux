import { ADD_ITEM } from '../action_types'

export const addItem = ({data}) => {
    return {
        type : ADD_ITEM,
        data : data
    }
}