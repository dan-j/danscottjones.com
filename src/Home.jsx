import React from 'react';
import contentfulClient from './contentfulClient.js';


class Home extends React.Component {

    state = {
        entries: null,
    };

    componentDidMount() {
        contentfulClient.getEntries({ content_type: 'blogPost' })
            .then(entries => this.setState({ entries }));
    }

    render() {
        const entries = this.state.entries;
        let content;
        if (!entries) {
            content = <p>Loading...</p>
        } else {
            content = JSON.stringify(entries.items.map(item => item.fields));
        }

        return (
            <div>
                {content}
            </div>
        );
    }
}

export default Home;
