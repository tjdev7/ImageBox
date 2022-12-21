import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'

function SearchBar() {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('Orange')
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)

    const APIkey = ''
    const fetchUrl = `https://api.unsplash.com/search/photos?client_id=${APIkey}&query=${search}&page=${page}`

    const fetchImg = () => {
        axios
            .get(fetchUrl, {
                headers: {},
            })
            .then((response) => {
                setData([...data, ...response.data.results])
            })
            .catch((error) => {
                console.log(error)
            })
        setPage(page + 1)
    }

    useEffect(() => {
        fetchImg()
    }, [search])

    const searchImages = (e) => {
        if (e.keyCode === 13) {
            setSearch(e.target.value)
            setData([])
            setHasMore([])
        }
    }

    return (
        <>
            <div className="App ">
                <div>
                    <br />
                    <input
                        type="text"
                        placeholder="Search for a picture here..."
                        className="SearchBar input"
                        onKeyDown={(e) => searchImages(e)}
                    />
                </div>
                <InfiniteScroll
                    dataLength={data.length}
                    next={fetchImg}
                    hasMore={hasMore}
                    loader={<h2>Please wait</h2>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Nothing else to show</b>
                        </p>
                    }
                >
                    <div className="SearchResult ">
                        {data.map((data, key) => (
                            <div className="container" key={key}>
                                <img
                                    src={data.urls.small}
                                    className="ImgStyle"
                                    alt={data.alt_description}
                                />
                                <h2 className="SourceStyle">
                                    Photo by {data.user.name} | via Unsplash
                                </h2>
                            </div>
                        ))}
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )
}

export default SearchBar
