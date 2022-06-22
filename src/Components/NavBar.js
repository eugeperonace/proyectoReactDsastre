import React from 'react';
import logoChico from '.././assets/LogoChico.jpg'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const NavBar = () =>{
    return(
        <>
        <header style={styles.container} >
            <img style={styles.image} src={logoChico} alt="DSASTRE" />
            <nav>
                <a style={styles.anchors} href="">SACOS</a>
                <a style={styles.anchors} href="">CAMISAS</a>
                <a style={styles.anchors} href="">PANTALONES</a>
                <a style={styles.anchors} href="">POLLERAS</a>
                <a style={styles.anchors} href="">CHALECOS</a>
                <a style={styles.anchors} href="">CAMPERAS</a>
                <a style={styles.anchors} href="">CORBATAS</a>        
            </nav>
            <AddShoppingCartIcon style={styles.cart}sx={{ fontSize: 30 }}/>
        </header>
        </>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    // header: {
    //     // backgroundImage: 'https://images.pexels.com/photos/4541351/pexels-photo-4541351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //     // backgroundRepeat: 'no-repeat',
    //     // backgroundPosition: 'center',
    //     // backgroundSize: 'cover',
    //     // minHeight: '100',
    // },
    image: {
        width: '19%',
        paddingLeft: 25,
        paddingTop: 3,
    },
    anchors: {
        padding: 18,
        textDecoration: 'none',
        color: '#000',
    },

    cart: {
        paddingRight: 100,
    },
}


export default NavBar