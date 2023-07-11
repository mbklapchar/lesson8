import React from 'react';
import './styles.css';
import Header from './header';
import Title from './title';
import About from './about';
import Projects from './projects';
import Experience from './experience';
import Skills from './skills';
import Footer from './footer';
import portrait from './matthew_portrait.jpg'
import article from './article.jpg'
import calc from './calc-app.jpg'
import change from './change-calc.jpg'

const portfolio = {

    Header: [
        {name: 'WEB-215-0002 July 10, 2023'},
    ],

    Title: [
        {name: 'Matthew Klapchar, Web Design Student'},
    ],

    About: [
        {name: 'About me: My name is Matthew, and I have always had an interest in working with technology. I also believe myself to be fairly creative. I have been working towards putting those skills together to obtain a degree in web design at Wake Technical Community College. In my spare time I enjoy photographing trains and playing video games. I work well in a team, I am kind and respectful, and I have knowledge of design principles and programming basics.' },
],
    
    Projects: [
        { name: 'Calculator React project' },
        { name: 'Niagara Falls magazine article' },
        { name: 'Change calculator' },

    ],
    Skills: [
        { name: 'Creatvity'},
        { name: 'Teamwork'},
        { name: 'Determination'},
        { name: 'Kindness'},
    ],

    Experience: [
        { name: 'HTML and CSS knowledge'},
        { name: 'PHP basics'},
        { name: 'JS basics'},
        { name: 'Understanding of MERN concepts'},
    ],

    Footer:[
        {name: 'Git profile: https://github.com/mbklapchar'},
    ],
};

function App() {
    return ( <html>
        <header>
            <Header Header={ portfolio.Header} />
        </header>
        <main>       
            <Title Title={portfolio.Title} />   
            <About About={portfolio.About} />  
            <img src={portrait} alt="Portrait of Matthew Klapchar in front of some nature." className='matthew' />
            <p>Projects:</p>     
            <Projects Projects={portfolio.Projects} />
            <img src={calc} alt="Screenshot of calculator app." className='showcase' />
            <img src={article} alt="Screenshot of Niagara Falls article." className='showcase' />
            <img src={change} alt="Screenshot of change calculator." className='showcase' />
            <p>Skills:</p>
            <Skills Skills={portfolio.Skills} />
            <p>Experience:</p>
            <Experience Experience={portfolio.Experience} />
        </main>   
            <Footer Footer={portfolio.Footer} />           
        </html>
    )
}

export default App;