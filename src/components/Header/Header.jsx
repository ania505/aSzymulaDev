import React from 'react';
import styles from './styles.js';

function Header () {

    return (
        <div style={styles.container}>
            <div style={styles.title}>Anna Szymula</div>
            <div style={styles.hamburger} />
            {/* TODO: add hamburger menu */}
        </div>
    )
}

export default Header
