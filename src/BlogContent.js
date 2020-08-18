import React from 'react';

class BlogContent extends React.Component {
    render() {
        return (
            <div>
                {this.props.articleText}
            </div>
        )
    }
}
export default BlogContent