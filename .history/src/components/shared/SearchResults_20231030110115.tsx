import { Models } from 'appwrite';
import React from 'react'
import Loader from './Loader';
import GridPostList from './GridPostList';

type SearchResultProps = {
    isSEARCHFetching: boolean;
    searchedPosts: Models.Document[];
}

const SearchResults = ({ isSearchFetching, searchPosts }: SearchResultProps) => {

    if (isSearchFetching) return <Loader />

    if (searchedPosts.documents.length > 0) return <GridPostList />


    return (
        <div>

        </div>
    )
}

export default SearchResults
