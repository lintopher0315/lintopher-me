import React from 'react';
import Gist from 'react-gist';

const REPOS = [
    "lintopher0315/autobeats", "lintopher0315/chessview", "lintopher0315/GoZero-MCTS",
    "lintopher0315/seashell", "lintopher0315/betterbnb", "lintopher0315/Imageworks",
    "lintopher0315/Quick-Math", "lintopher0315/CSES",
]

const GISTS = [
    ['27eb8b713ceed2305728428a3a1250cd', 'Player.js'], ['8130e816d72ca7a2d4cb5a7a7facf52d', 'main.py'], ['79f83f0939528594db71fda7588ffae7', 'game_logic.py'],
    ['0ad5d331dd2587cf33aa6c505cc44dca', 'shell.c'], ['e9528dfe57ba9f2c5a76682cf1fedff3', 'Header.js'], ['a869d6a2187e4167e4c04ba0db6e45ae', 'remove_lines.pde'],
    ['5eaa0df37c30dcb4f810f7bf7427ce4f', 'QuizPage.js'], ['df5a36f097e6dbad7e4d1f2a052aa94a', 'removal_game.cpp', 'room_allocation.cpp', 'round_trip.cpp'],
]

const SITES = [
    'https://www.autobeats.io/', null, null, null, null, null, 'http://www.quickmath.space/', null,
]

const SUMMARIES = [
    "Autobeats was a semester long project that I worked on in Fall 2019. There already existed a couple good Spotify visualizers that allowed the user to play music through the Spotify "+
    "app and then display the visualization through the browser. What my website does differently than most is that it also allows you to control the app without having two devices. "+
    "Instead of having both the app open on the phone and the site open on the computer, you would only need the browser. I made the website very similar to the browsing experience "+
    "on the actual Spotify app, allowing you to go through the categories and public playlists alongside your own music. In terms of the actual player, the look and animation is "+
    "pretty simple but looks very nice. The player controller is also made from scratch to accompany the Spotify API. I used Three.js to render the 3D components of the animation "+
    "which also includes the post-processing. Make sure to turn on hardware acceleration in your browser settings, however. And the site, in general, works better if you have "+
    "a dedicated GPU.",

    "Chessview was a tool that I made in August 2019 that allows you to browse and analyze your lichess games through the terminal. I wanted to create something that I would "+
    "also be interested in using, so the CLI is very minimal and quick. For displaying text in the terminal, I used prompt_toolkit which is essentially a GUI management library "+
    "for terminal/command prompt. To access recently played lichess games, lichess provides an API that does exactly that, and there exists a Python library called 'berserk' that "+
    "allows me to call prebuilt functions that make the API requests for me. From this, I can get the PGN (chess record format) for any game. To get an analysis of the game, "+
    "I placed the Stockfish engine in the root of my project, which alows me to use the Python chess library to get the best move in a position. Additionally, I defined some "+
    "scrolling features in the GUI that allows for satisfying viewing of the games.",

    "GoZero was a project that I started in Spring 2020 as a random endeavor into machine learning. When thinking about which game I should make an AI for, I considered easier ones "+
    "such as Connect 4, Checkers, and Gomoku. However when thinking about actually coding the game logic, I realized that creating Go was elegant rather than difficult, in contrast "+
    "to what you might think. All of its rules revolve around simple graph algorithms and can be constructed well with good design. Looking back at the way I coded the game logic, "+
    "I like the way I designed it, but I realize now that my graph algorithms could be made much shorter (with same complexity). Creating the AI was actually harder than I thought. "+
    "I was implementing MCTS, one of the easier techniques to implement, which consists of selection, expansion, simulation, and backpropagation phases. The only difficult phase to "+
    "create is the simulation phase as the AI has to simulate a game of Go from a set position until the game ends. This is a problem if you're making Chess/Go AI where the games "+
    "can go infinitely, but can be resolved if you cut the simulation short and evaluate based on final position. Finally, debugging AI sucks as you don't know if it's broken "+
    "or if it's doing AI stuff.",

    "When taking a C programming class as a second semester freshman, I wanted to apply that knowledge to something a bit more practical. I ended up creating a very basic shell in C "+
    "that has a lot of the simple functionality that any modern shell would have. This was a truly basic shell as I didn't implement a parser or pipes or wildcarding or subshells or "+
    "autocomplete, etc. For most basic functions like 'cat' or 'ls' I could just pass them to execvp for the system to execute in a child process. For other special functions like "+
    "'cd' or 'exit' or 'history' I made checks to handle those specifically. In terms of the history feature, the program stores a local file which is read from at startup and written to "+
    "at exit. The file holds a maximum number of recent commands and allows you to scroll through them in the terminal. I had some memory issues in the process of creating this, "+
    "but using a memory debugger like 'valgrind' helped a lot. All in all, this was a nice introduction to the shell that I created for one of my later courses.",

    "BetterBnB is another semester long project that I worked on during Spring 2020, except I also worked alongside four others. Credits to https://github.com/BBottoml, https://github.com/sunilgreen, "+
    "https://github.com/uniqueuser-repo, and https://github.com/AnudeepYakkala for their hard work and contribution to this project. The general concept behind this service was to provide "+
    "an accessible information source about rental listings, and it was made to be compatible with AirBnB URLs. The frontend was done mostly by me, while the others worked collaboratively "+
    "on OAuth, web scraping, and extension-building. A user at this site would be able to search any location and retrieve a number of nearby listings that contained essential info. "+
    "When logged-in, they could add listings to their profile and provide feedback on listings. To accompany the website, a browser extension was also created that would allow users "+
    "to input an AirBnB url and redirect them to our website with the corresponding information present. The extension also provided basic information as a preview for the location.",

    "I was bored during Spring break when everyone was going home for COVID-19, so I decided to experiment with Processing, a graphical environment for Java (and other languages). "+
    "When searching for ideas, I came across a webpage called The Pantheon Project which contained many image processing experiments, which I decided to try to replicate. The first "+
    "experiment was detecting urban areas from aerial views. For this, I came up with a solution that involved taking a modified variance formula that also factored in differences in "+
    "color and distance from each pixel. Essentially, I evaluated a certain range around a pixel and use its neighbors to determine if that pixel is part of an urban area. There are "+
    "a couple other experiments that I implemented that involve interesting graphical tricks. In general, it was intriuging to create image effects that I had once seen but had no clue "+
    "how they actually worked.",

    "Quickmath was a project that I worked on in my first semester as a freshman as part of a club called LaunchPad, which helped freshmen create projects with assistance from "+
    "senior students. The idea behind my project is that it would be a way to practice basic arithmetic problems online with/against others. Basically you could create an account, do online "+
    "timed arithmetic quizzes by yourself or against someone random online, and also view your stats on your profile. It was incredibly straightforward as it was my first MERN stack "+
    "application. I was not only new to MERN, but I had never used MongoDB, Express, React, or Node before, so it was definitely a fun experience to learn a lot of new technologies. "+
    "The frontend was built purely using React and in order to store stats and play against others, I also had a backend connected to a MongoDB database. To explain how people would "+
    "play against each other, I first stored user statuses in a user collection which determined whether or not they were trying to find a match. If two people were searching at the same time "+
    "it would match them and put them in a game. This creates another document in a game collection which kept track of the ongoing score and time of both players, and would update "+
    "the frontend accordingly. This method of creating a connection between two people was pretty unorthodox, but it worked. Overall, it was a good experience that lead to a pretty smooth transition "+
    "into web dev. Credit to my mentor: https://github.com/lin762.",

    "Competitive programming is cool, and as horrible as it may sound, I enjoy sites like LeetCode. However, LeetCode can have some garbage/filler/useless problems that no one will "+
    "ever care about. Which is why I sometimes like working on the CSES problem set, which is a collection of well-known, fundamental problems from multiple categories. The repository I have "+
    "dedicated to this problem set is a collection of my cleanest solutions to each problem that I've completed. I try to implement the best solution with the lowest amount of lines "+
    "of code (within reason) so that I can revisit it later as reference. My goal is to hopefully complete almost all of the problems in each category besides 'Additional', and I "+
    "typically try to work on one problem everyday.",
]

function Project(props) {

    let snippets = GISTS[props.pr].slice(1).map((gist, i) => {
        return (
            <Gist id={GISTS[props.pr][0]} file={gist} key={i} />
        )
    })

    return (
        <div>
            <div id="repo-title">
                {REPOS[props.pr]}
            </div>
            <div>
                <a href={`https://www.github.com/${REPOS[props.pr]}`} target="_blank" rel="noopener noreferrer" id="github-link">
                    <img src={require("./../res/icons/social/github.svg")} alt="1" id="repo-icon" />
                </a>
                <a href={SITES[props.pr]} target="_blank" rel="noopener noreferrer" id="site-link">
                    {SITES[props.pr]!==null ? <img style={{marginLeft: '15px'}} src={require("./../res/icons/social/web.svg")} alt="1" id="repo-icon" /> : <div></div>}
                </a>
            </div>
            <div style={{paddingTop: '30px', paddingBottom: '30px'}}>
                <div id="repo-contents"><a href="#repo-summary" id="section-link" style={{color: 'pink'}}>&#187; Summary</a></div>
                <div id="repo-contents"><a href="#repo-images" id="section-link" style={{color: 'pink'}}>&#187; Images</a></div>
                <div id="repo-contents"><a href="#repo-preview" id="section-link" style={{color: 'pink'}}>&#187; Code Preview</a></div>
            </div>
            <p id="repo-summary"><a href="#repo-summary" id="section-link">#</a>Summary</p>
            <p id="summary">{SUMMARIES[props.pr]}</p>
            <p id="repo-images"><a href="#repo-images" id="section-link">#</a>Images</p>
            <p id="repo-preview"><a href="#repo-preview" id="section-link">#</a>Code Preview</p>
            <div id="repo-gist">
                {snippets}
            </div>
        </div>
    )
}

export default Project;