import React, {useReducer, useEffect} from 'react';
import productContext from './productContext';
import productReducer from './productReducer';
import {PRODUCTLS, LOAD_STATE, DELETE} from '../../types/index';

const ProductState = props => {
    const productsLS = [];

    const [state, dispatch] = useReducer(productReducer, productsLS);

    useEffect(() => {
        if (localStorage.getItem('products') === null) {
            localStorage.setItem('products', JSON.stringify([]));
        } else {
            dispatch({
                type: LOAD_STATE,
                payload: JSON.parse(localStorage.getItem('products'))
            })
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(state));
    }, [state])

    const addProduct = (product) => {
        dispatch({
            type: PRODUCTLS,
            payload: product
        })
    }

    const deleteItem = (index) => {
        dispatch({
            type: DELETE,
            payload: index
        })
    }

    return(
        <productContext.Provider
            value={{            
                productsLS: state,
                addProduct,
                deleteItem
            }}
        >
            {props.children}
        </productContext.Provider>
    );
}

export default ProductState;