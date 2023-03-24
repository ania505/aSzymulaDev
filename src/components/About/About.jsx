import React from 'react';
import styles from './styles.js';

function About () {

    return (
        <div style={styles.container}>
            <div style={styles.title}>--- My History ---</div>
            <div style={styles.about}>
                Throughout my career past I've had many ask me how does a Psychology major turn out 
                to be a Software Developer. While I do still have a passion in Psychology and pursued my Bachelor's
                in it, my intro to programming occurred in college. I attended the University of Illinois at 
                Urbana-Champaign which I had known of for having lots of different majors, but I also was aware 
                of its international status of being on of the top Computer Science (CS) schools. Because I knew this 
                was an opportunity I couldn't miss out on while I was there, I took one CS course ... and then another 
                ... and then another again. In my time there I ended up taking two Python courses and a Java course.
                <br></br>
                As much as I loved Psychology, I graduated in 2020, a year I'm sure we've all repressed. With much 
                time being spent at home, I looked for other ways I can further my education. My brother, who is a 
                much experienced software engineer, inspired me to apply for coding bootcamps... and apply I did. I 
                recevied acceptance letters from every top bootcamp I applied to and chose the Grace Hopper Program 
                at Fullstack Academy. I graduated in December of 2020 and began my job search.
                <br></br>
                To start myself off with some experience, I started meeting with Sonatype employees to contribute to 
                their open source project named Nexus IQ. By the end of my time there, I gave a demo and presentation 
                at the Elevate 2021 online conference. I believe my duration there greatly impacted my skills and 
                helped me be a good contribution to the team at Red Foundry when I was hired in 09/2021.
                <br></br>
                Spending about a year and a half at Red Foundry considerably strengthened my skills in JavaScript, 
                TypeScript, React, and React Native, along with the non-technical abilities to communicate, 
                pair program, and give my perspective as an experienced developer.
                <br></br>
                I'm proud of the experience I've gained and look forward to continuing to grow and develop my skills in the field.
            </div>
            {/* TODO: fix up descrip - ask someone */}
        </div>
    )
}

export default About;
