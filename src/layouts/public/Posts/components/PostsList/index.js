import React, { Component } from "react";
import { Container, Row } from 'react-bootstrap';
import GridPost from '../../../components/GridPost/index';
import './style.css';

class PostsList extends Component {
    showPosts = (posts) => {
        return (
            <section className="grid-tours-section">
                <Row>
                    {this.showGridPosts(posts)}
                </Row>
            </section>
        );
    }

    showGridPosts = (posts) => {
        var result = null;
        result = posts.map((post, index) => {
            return (
                <GridPost key={index} post={post} />
            )
        })
        return result
    }

    render() {
        return (
            <section className="main-content">
                <Container>
                    {this.showPosts(this.props.posts)}
                </Container>
            </section>
        );
    }
}

export default PostsList;