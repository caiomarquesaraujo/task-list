import React from 'react'
import './index.scss'
import add from '../../../assets/add.svg'




function Menu() {

    const localStorageTask = 'to-do-list-gn'

    function validateIfExistsNewTask() {
        let values = JSON.parse(localStorage.getItem(localStorageTask) || '[]')
        let inputValue = document.getElementById('input-task').value
        let exists = values.find(x => x.name == inputValue)
        return !exists ? false : true
    }

    function newTask() {
        let input = document.getElementById('input-task')
        input.style.border = ''

        //validação
        if (!input.value) {
            input.style.border = '1px solid red'
            alert('Digite algo')
        }

        else if (validateIfExistsNewTask()) {
            alert('Essa tarefa já existe')
        }

        else {
            let values = JSON.parse(localStorage.getItem(localStorageTask) || '[]')
            values.push({
                name: input.value
            })
            localStorage.setItem(localStorageTask, JSON.stringify(values))
            showValues()
        }
        input.value = ''
    }

    function showValues() {
        let values = JSON.parse(localStorage.getItem(localStorageTask) || '[]')
        let list = document.getElementById('to-do-list')
        list.innerHTML = ''
        for (let i = 0; i < values.length; i++) {
            list.innerHTML += `<li>${values[i]['name']}<button>done</button><div><button>edit</button><button id='btn-delete' onClick='deleteList("${values[i]['name']}")'>del</button></div></li>`
        }
    }

    function deleteList(data) {
        let values = JSON.parse(localStorage.getItem(localStorageTask) || '[]')
        let index = values.findIndex(x => x.name == data)
        values.splice(index, 1)
        localStorage.setItem(localStorageTask, JSON.stringify(values))
        showValues()
    }




    return (
        <div className='menu'>
            <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
            <div className='layer'>
                <div className='layer__head'>
                    <p>Tarefas</p>
                    <p>Status</p>
                    <p>Opções</p>
                </div>
                <div className='layer__list'>
                    <ol id='to-do-list'>

                    </ol>
                    <ul id='to-do-list2'>
                        <li id='add-task' >
                            <input id='input-task' type='text' placeholder='Nova Tarefa...'></input>
                            <button id='add-item' onClick={newTask} title='Adicionar uma nova tarefa!' > <img src={add} alt="" /></button>
                        </li>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Menu