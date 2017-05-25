import React from 'react';
import contentfulClient from '../services/contentfulClient';
import BlogEntry from './BlogEntry';

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
            content = entries.items.map(item => (
                <BlogEntry
                    key={item.sys.id}
                    title={item.fields.title}
                    body={item.fields.body}
                    slug={item.fields.slug}
                />
        ));
        }

        return (
            <div>
                {content}
            </div>
        );
    }
}

export default Home;
