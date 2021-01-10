import React, { Component } from 'react'
import {connect} from 'react-redux'
import MovieCard from './MovieCard'

class MoviesContainer extends Component {
    render() {
        const { movies } = this.props;
        let content = '';

        content = movies.Response === 'True' ? movies.Search.map((movie, index) => {
            return (
                <MovieCard key={index} movie={movie} />
            );
        }) : (<div style={{ color: 'red' }}>{movies.Error}</div>);
        return (
            <div className="row">
                {content}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        movies: state.searchMovies.movies
    }
}
export default connect(mapStateToProps)(MoviesContainer)
