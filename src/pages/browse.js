import React from 'react'
import { useContent } from '../hooks'
import BrowseContainer from '../containers/browse'
import { selectionMap } from '../utils'

export default function Browse() {
    const { series } = useContent('series');
    const { films } = useContent('films');
    const slides = selectionMap({ series, films });

    console.log(films);
    console.log(slides);
    return (
        <BrowseContainer slides={slides} />
    )
}
