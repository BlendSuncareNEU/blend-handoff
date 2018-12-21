import React from 'react';
import NotFound from '../pages/not-found/not-found-container';

export default Wrapped =>
  class PrismicPageV2 extends React.Component {
    state = {
      doc: null,
      err: null,
    };

    componentWillMount() {
      this.fetchPage(this.props);
    }

    componentWillReceiveProps(props) {
      this.fetchPage(props);
    }

    fetchPage = props => {
      if (props.prismicCtx) {
        props.prismicCtx.api.getByUID(
          Wrapped.pageType,
          this.props.uid || this.props.match.params.uid,
          {},
          (err, doc) => {
            if (err) {
              // explicit error
              this.setState(() => ({ err }));
            } else if (doc) {
              // everything is fine
              this.setState(() => ({ doc }));
            } else {
              // api finds route, but no doc data
              this.setState(() => ({ err: 'Unable to fetch doc from path' }));
            }
          }
        );
      }
    };

    render() {
      return this.state.doc ? (
        // TODO: have this automatically create the header/footer
        <Wrapped
          api={this.props.prismicCtx && this.props.prismicCtx.api}
          doc={this.state.doc}
        />
      ) : this.state.err ? (
        // TODO: add better loading state
        <NotFound />
      ) : null;
    }
  };
