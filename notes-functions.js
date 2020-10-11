// read existing notes from local storage 
const getSavedNotes = function () {
    let notesJSON = localStorage.getItem('notes')
    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// save the notes to local storage 

const saveNotes = function (notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

//remove a note ffrom list 

const removeNote = function (id) {
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id
    })

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1)
    }

}


// generate dom structure for a note 

const generateNoteDOM = function (note) {
    const noteEl = document.createElement('div')
    const textEl = document.createElement('span')
    const removeNoteButton = document.createElement('button')

    //setup the remove button
    removeNoteButton.textContent = 'x'
    noteEl.appendChild(removeNoteButton)
    removeNoteButton.addEventListener('click', function () {
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes, filters)
    })

    //setup the title text
    if (note.title.length > 0) {
        textEl.textContent = note.title
    } else {
        textEl.textContent = 'unnamed note'
    }

    noteEl.appendChild(textEl)

    return noteEl
}

// render application notes 

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function (note) {
        const noteEl = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl)

    })
}