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

    const deleteItem = (id) => {
        let arr = state;
        state.forEach((product, index) => {
            if(product._id === id){
                arr.splice(index, 1);
                console.log(arr);
                dispatch({
                    type: DELETE,
                    payload: arr
                })
            }
        });
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