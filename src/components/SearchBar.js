import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onFormSubmit(event) {

        event.preventDefault();

        this.props.onFormSubmit(this.state.term);

    }

    render() {
        return (
            <div className="ui segment search-bar">
                <form onSubmit={ this.onFormSubmit.bind(this) } className="ui form">
                    <div className="field">
                        <label htmlFor="search">Video Search</label>
                        <input
                            type="text"
                            id="search"
                            value={ this.state.term }
                            onChange={ event => this.setState({ term: event.target.value }) }
                        />
                    </div>
                </form>
            </div>
        );
    }

}

export default SearchBar;
