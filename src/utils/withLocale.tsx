import * as React from 'react';
import { getLocale } from './locale';
import { navigate } from 'gatsby';

const withLocale = <P extends object>(Component: React.ComponentType<P>) =>
  class withLocale extends React.Component<P> {
    componentDidMount () {
      return navigate(getLocale());
    }

    render () {
      return (
        <>
          Redirect!
          {<Component {...this.props}/>}
        </>
      )
    }
  }
;

export default withLocale;
