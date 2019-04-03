import { Component } from 'react';
import { withRouter } from 'react-router';

class ScrollToTopComponent extends Component<any> {
  componentDidUpdate(prevProps: any) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);

      var scrollEvent = new Event('scroll', { bubbles: true});
      window.dispatchEvent(scrollEvent);
    }
  }

  render() {
    return this.props.children;
  }
}

export const ScrollToTop = withRouter(ScrollToTopComponent);
