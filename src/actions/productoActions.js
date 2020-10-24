import {
    AGREGAR_PRODUCTOS,
    AGREGAR_PRODUCTOS_EXITO,
    AGREGAR_PRODUCTOS_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR
} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2'

//Crear nuevos productos
export function crearNuevoProductoAction(producto){
    return async (dispatch) => {
        dispatch( agregarProductos() );

        try {
            //Insertar en la api
            await clienteAxios.post('/productos', producto);

            //si todo sale bien, actualizar el state
            dispatch( agregarProductoExito(producto) );

            //Alerta
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            );
        }catch(error){
            console.log(error);
            //si hay un error cambiar el state
            dispatch( agregarProductoError(true) );

            //alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            });
            

        }
    }
}

const agregarProductos = () => ({
    type: AGREGAR_PRODUCTOS,
    payload: true
});

//si el producto se guarda en la base de datos
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTOS_EXITO,
    payload: producto
});

//si hubo un error
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTOS_ERROR,
    payload: estado
});


//Funcion que descarga los productos de la base de datos
export function obtenerProductosAction(){
    return async (dispatch) => {
        dispatch(descargarProductos() );
    }
}

const descargarProductos = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});

const descargarProductoExitos = () => ({
    type: DESCARGA_PRODUCTOS_EXITO
});

const descargarProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR
})