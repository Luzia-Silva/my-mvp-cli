'use strict';
const {prompt} = require('prompts')
const {exec} = require("child_process");
const fs = require('fs')
const fse = require('fs-extra')

let interval;

(async function (project) {
    const questions = [
        {
            type: 'text',
            name: 'project',
            message: `What's your name do you project?`,
            initial: `my-app`,
            format: v => `${v}`
        },
        {
            type: 'select',
            name: 'typeProject',
            message: 'These are the frameworks, libraries that we use for development?',
            hint: false,
            choices: [
                {
                    title: 'Standard',
                    description: 'ReactJS, NextJS, Typescript, Chakra UI',
                    value: 'standard'
                },
                {
                    title: 'Sophisticated',
                    description: 'Vue, Typescript, Element',
                    value: 'sophisticated'
                },
            ]
        },
        {
            type: prev => prev && 'toggle',
            name: 'confirmtoggle',
            message: 'Can you confirm?',
            active: 'yes',
            inactive: 'no'
        }
    ];

    //usuário escolhe opção igual a "sim" confirme, então crie projeto.
    const answers = await prompt(questions, {onCancel: cleanup, onSubmit: cleanup});

    //dir armazena o  diretório
    const dir = __dirname + '/' + answers.project;

    //verifica se existe a pasta , caso não exista, então crie.
    if (!fs.existsSync(dir)) {fs.mkdirSync(dir, { recursive: true })}

    //Função que cópia da pasta templete os templetes que usuário criou.
    copyFile(process.cwd() + "/templates/next", dir)

    //criar o projeto, por meio da execução no terminal.
    try {
        process.chdir(dir);
        if (answers.typeProject === 'standard') {
            console.log('New directory: ' + process.cwd());
            exec("npm install next react react-dom --prefix=" + dir)
        }
    } catch (err) {
        console.log('chdir: ' + err);
    }

})();

function cleanup() {
    clearInterval(interval);
}

//Função que copiar arquivos
const copyFile = (src, dest) =>{
    fse.copy(src, dest, err => {
        if (err) return console.error(err)
        console.log('Directories copied successfully!')
    })
}


