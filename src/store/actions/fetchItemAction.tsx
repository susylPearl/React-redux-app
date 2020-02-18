import { RECEIVED_DATA } from '../const';
import ItemType from '../../interfaces/ItemType';

export const receivedData = (initialData: ItemType) => {
    return {
        type: RECEIVED_DATA,
        initialData
    }
}

export const fetchData = () => {
    return function(dispatch: any){
        return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(data => data.json())
        .then(data => {
            dispatch(receivedData(data.slice(0, 10)));
        })
    }
}