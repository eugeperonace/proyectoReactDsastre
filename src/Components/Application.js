import React from 'react';
import logoGrande from '.././assets/LogoGrande.jpg'

const Application = () =>{
    return(
        <>
            <img style={styles.image} src={logoGrande} alt="DSASTRE" />
        </>
    );
}

const styles = {
    image: {
        //alignSelf: 'center',
        paddingLeft: '30%',
        paddingRight: '30%',
    },
}

export default Application