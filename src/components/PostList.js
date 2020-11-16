import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    console.log(this.props.posts);
    if (this.props.posts.length === 0) return <div>Loading</div>;
    return <div className="ui container">Post list</div>;
  }
}

const mapStatetoProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStatetoProps, { fetchPosts })(PostList);
