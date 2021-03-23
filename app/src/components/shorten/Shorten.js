import React, {useState, useEffect, useContext} from 'react'
import './shorten.css'
import {Context} from '../Context'
import { v4 as uuidv4 } from 'uuid';
import {trackPromise} from 'react-promise-tracker'
import Loading from '../reactLoading'

function Shorten() {

    const {allUrls} = useContext(Context)

    const [userInput, setUserInput] = useState('')
    const [redInput, setRedInput] = useState(false)



    function handleChange(e) {
        const {value} = e.target
        setUserInput(value)

    }

    function handleSubmit(e) {
        e.preventDefault()

        if(userInput === '') {
            setRedInput(true)
        } else {
            setRedInput(false)
            trackPromise(
                fetch(`https://api.shrtco.de/v2/shorten?url=${userInput}`)
                .then(res => res.json())
                .then(data => {

                    localStorage.setItem(uuidv4(), JSON.stringify({
                        original: userInput,
                        shortUrl: data.result.full_short_link
                    }))

                    window.location.reload(true)
                })
                .catch((error) => {
                    console.log(error)
                })
            )
        }
    }

    useEffect( () => {

    } , [])

    return (
        <>
            <div className='shorten-outer-container'>
                <div className='shorten-section'>
                    <div className='shorten-section-bg'></div>
                    <form 
                        className='form'
                        onSubmit={ handleSubmit}
                    >
                        <input 
                            className={redInput ? 'user-input active' :'user-input' }
                            type="text" 
                            placeholder='Shorten a link here...'
                            name='userInput'
                            onChange={ handleChange}
                        />

                        <button 
                            id='shorten-btn'
                        >
                                Shorten it!
                        </button>
                        <Loading/>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Shorten

