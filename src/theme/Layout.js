import React, {useEffect} from 'react';
import Layout from '@theme-original/Layout';
import { useLocation } from '@docusaurus/router';

export default function CustomLayout(props) {
  const location = useLocation();
  const minimalMode = new URLSearchParams(location.search).get('minimal') === 'true';

  useEffect(() => {
    if (minimalMode) {
      document.documentElement.setAttribute('data-minimal', 'true');
    } else {
      document.documentElement.removeAttribute('data-minimal');
    }
  }, [minimalMode]);

  return <Layout {...props} />;
}
