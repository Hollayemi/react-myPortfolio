import React from 'react'
import $ from 'jquery'

import * as Types from '../types';

export const setProduct = (product) => {
    return {
        type: Types.SET_PRODUCTS,
        payload:product
    }
}

export const myLoginHandler = (email, password) => {

        const datae = $.post("http://localhost:10000/dashboard/createApi/kemonApi/auth.php",{password:password,email:email,myLogin:"set"},
		function(data){
		    return data.message;            
		});

        console.log(datae.message)

        return{
            type: Types.LOGIN,
            payload: {
                Login:datae.message,
                id:datae.id
            }
        }
}