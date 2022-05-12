import React, { useRef } from 'react'

const InputForm = () => {
    const titleInput = useRef(null)
    const openingInput = useRef(null)
    const releaseDateInput = useRef(null)
    const addMovieHandler = (e) => {
        e.preventDefault()
        const newMovie = {
            title: titleInput.current.value,
            openingText: openingInput.current.value,
            releaseDate: releaseDateInput.current.value,
        }
        console.log(newMovie);
    }
    return (
        <form>
            <label>Title</label>
            <input ref={titleInput} type="text"></input>
            <label>Opening Text</label>
            <input ref={openingInput} type="text"></input>
            <label>Release Date</label>
            <input ref={releaseDateInput} type="date"></input>
            <br />
            <button onClick={addMovieHandler}>Add Movie</button>
        </form>
    )
}

export default InputForm