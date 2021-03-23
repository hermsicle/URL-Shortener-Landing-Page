import React, {useState, useRef, useEffect} from 'react'
import './results.css'

function Results(props) {
    const [allItems, setAllItems] = useState()
    const [copiedUrl, setCopiedUrl] = useState('')
    const [successfullyCopied, setSuccessfullyCopied] = useState(false)
    const [currentIndex, setCurrentIndex] = useState()

    let items = []

    useEffect( () => {
        const allItems = Object.keys(localStorage)
        for(let i = 0; i < allItems.length; i++) {
            let parsedUrl = JSON.parse(localStorage.getItem(allItems[i]))
            items.push(parsedUrl)
        }
        setAllItems(items)

    }, [])

    let pRef = useRef(null)

    function saveToClipBoard(i) {
        // console.log(i)
        setCurrentIndex(i)
        const selectedItem = allItems[i].shortUrl
        setCopiedUrl(selectedItem)
        // console.log(selectedItem)
        // console.log(pRef.current)
        pRef.current.select();
        document.execCommand('copy')
        setSuccessfullyCopied(true)
    }

    return (
        <div>
            {
                allItems === undefined ? '' :
                allItems.map((url, index) => (
                    <div 
                        className='results-container'>
                        <div className='original-url'>
                            {url.original}
                        </div>
                        <p 
                            value={url.shortUrl}
                            className='shortened-url'>
                            {url.shortUrl}
                        </p>
                        <button 
                            key={index}
                            onClick={() => saveToClipBoard(index)}
                            className={successfullyCopied && currentIndex == index ? 'copy-btn active' : 'copy-btn'}
                        > 
                            {successfullyCopied && currentIndex == index  ? 'Copied!' : 'Copy'} 
                        </button>
                    </div> 
                ))
            }
            <input className='inputEl' ref={pRef} value={copiedUrl}></input>
        </div>
    )
}

export default Results

