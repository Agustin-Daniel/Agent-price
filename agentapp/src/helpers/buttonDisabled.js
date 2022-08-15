


// Validacion del boton de contacto
 export const buttonDisabled = (setHref, refs, buttonPrice)=> {
    
    if ( refs.express !== undefined ){
    // if (refs.express !== undefined && refs.first !== undefined ){

    if (refs.semi.current.classList.contains('active') ||
        refs.custom.current.classList.contains('active') ||
        refs.express.current.classList.contains('active') ) {

            // if (refs.second.current.classList.contains('active') ||
            //     refs.third.current.classList.contains('active') ||
            //     refs.first.current.classList.contains('active')) {

                buttonPrice.current.classList.remove("disabled")
                setHref('#')
                return;

            // if (refs.second.current.classList.contains('active') ||
            //     refs.third.current.classList.contains('active') ||
            //     refs.first.current.classList.contains('active')) {

            //     buttonPrice.current.classList.remove("disabled")
            //     setHref('#')
            //     return;

            // } else {
            //     buttonPrice.current.classList.contains("disabled") == false && buttonPrice.current.classList.add("disabled")
            //     setHref(null)
            //     return;
            // }  

            } else {
                buttonPrice.current.classList.contains("disabled") == false && buttonPrice.current.classList.add("disabled")
                setHref(null)
                return;
            }
        
    } 
    
}

