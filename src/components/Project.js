import React from 'react';
import Gist from 'react-gist';

const REPOS = [
    "lintopher0315/autobeats", "lintopher0315/chessview", "lintopher0315/GoZero-MCTS",
    "lintopher0315/seashell", "lintopher0315/betterbnb", "lintopher0315/Imageworks",
    "lintopher0315/Quick-Math"
]

const GISTS = [
    ['27eb8b713ceed2305728428a3a1250cd', 'Player.js'], ['8130e816d72ca7a2d4cb5a7a7facf52d', 'main.py'], ['79f83f0939528594db71fda7588ffae7', 'game_logic.py'],
    ['0ad5d331dd2587cf33aa6c505cc44dca', 'shell.c'], ['e9528dfe57ba9f2c5a76682cf1fedff3', 'Header.js'], ['a869d6a2187e4167e4c04ba0db6e45ae', 'remove_lines.pde'],
    ['5eaa0df37c30dcb4f810f7bf7427ce4f', 'QuizPage.js'], ['df5a36f097e6dbad7e4d1f2a052aa94a', 'removal_game.cpp', 'room_allocation.cpp', 'round_trip.cpp'],
]

const SITES = [
    'https://www.autobeats.io/', null, null, null, null, null, 'http://www.quickmath.space/',
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
                <img src={require("./../res/github.svg")} alt="1" id="repo-icon" />
                {SITES[props.pr]!==null ? <img style={{marginLeft: '15px'}} src={require("./../res/web.svg")} alt="1" id="repo-icon" /> : <div></div>}
            </div>
            <div style={{paddingTop: '30px', paddingBottom: '30px'}}>
                <div id="repo-contents"><a href="#repo-summary" id="section-link" style={{color: 'pink'}}>&#187; Summary</a></div>
                <div id="repo-contents"><a href="#repo-images" id="section-link" style={{color: 'pink'}}>&#187; Images</a></div>
                <div id="repo-contents"><a href="#repo-preview" id="section-link" style={{color: 'pink'}}>&#187; Code Preview</a></div>
            </div>
            <p id="repo-summary"><a href="#repo-summary" id="section-link">#</a>Summary</p>
            <p id="repo-images"><a href="#repo-images" id="section-link">#</a>Images</p>
            <p id="repo-preview"><a href="#repo-preview" id="section-link">#</a>Code Preview</p>
            <div id="repo-gist">
                {snippets}
            </div>
        </div>
    )
}

export default Project;