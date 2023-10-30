import { Models } from 'appwrite';
import React from 'react'
import Loader from './Loader';

type SearchResultProps = {
    isSEARCHFetching: boolean;
    searchedPosts: Models.Document[];
}

const SearchResults = ({ isSearchFetching, searchPosts }: SearchResultProps) => {

    if (isSearchFetching) return <Loader />
    return (
        <div>

        </div>
    )
}

export default SearchResults
