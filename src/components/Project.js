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
    ['5eaa0df37c30dcb4f810f7bf7427ce4f', 'QuizPage.js'],
]

function Project(props) {
    return (
        <div>
            <div id="repo-title">
                {REPOS[props.pr]}
            </div>
            <Gist id={GISTS[props.pr][0]} file={GISTS[props.pr][1]} />
        </div>
    )
}

export default Project;