import React from 'react';
import PropTypes from 'prop-types';
import BlogPage from './BlogPage';
import contentfulClient from '../services/contentfulClient';

export default class BlogPageContainer extends React.Component {

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                slug: PropTypes.string.isRequired
            }).isRequired,
        }).isRequired,
    };

    state = {
        blogPost: null,
    };

    componentDidMount() {
        contentfulClient.getEntries({
            content_type: 'blogPost',
            'fields.slug': this.props.match.params.slug })
            .then(entries => this.setState({ blogPost: entries.items[0] }));
    }s

    render() {

        let content;
        const { blogPost } = this.state;

        if (!blogPost) {
            content = <p>Loading...</p>;
        } else {
            content = <BlogPage title={blogPost.fields.title} body={blogPost.fields.body} />
        }

        return (
            <div>
                {content}
            </div>
        );
    }

}
