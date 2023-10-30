import { Models } from 'appwrite';
import React from 'react'
import Loader from './Loader';
import GridPostList from './GridPostList';
import { searchPosts } from '@/lib/appwrite/api';

type SearchResultProps = {
    isSearchFetching: boolean;
    searchedPosts: Models.Document[];
}

const SearchResults = ({ isSearchFetching, searchedPosts }: SearchResultProps) => {

    if (isSearchFetching) return <Loader />

    if (searchedPosts.documents.length > 0) {
        return (
            <GridPostList posts={searchedPosts.documents} />

        )
    }


    return (
        <div>

        </div>
    )
}

export default SearchResults
