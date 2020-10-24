import {
    AGREGAR_PRODUCTOS,
    AGREGAR_PRODUCTOS_EXITO,
    AGREGAR_PRODUCTOS_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR
} from '../types';


//Cada reducer tiene su propio state
const initialState = {
    productos: [],
    error: null,
    loading: false 
}


export default function(state = initialState, action){
    switch(action.type){
        case COMENZAR_DESCARGA_PRODUCTOS:
        case AGREGAR_PRODUCTOS:
        return {
            ...state,
            loading: action.payload
        }
        case AGREGAR_PRODUCTOS_EXITO:
            return{
                ...state,
                loading: false,
                productos: [...state.productos, action.payload]
            }
        case AGREGAR_PRODUCTOS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
        
            }
        default:
            return state;
    }
}