import React from 'react';
import styles from './styles.js';

function Intro () {

    return (
        <div style={styles.container}>
            <div style={styles.helloWorld}>--- Hello World ---</div>
            <div style={styles.meetMe}>Meet Anna Szymula</div>
            <div style={styles.devDescrip}>A mobile and web software developer</div>
            {/* TODO: fix up intro descrip */}
        </div>
    )
}

export default Intro;
