import {
  IDocuNotionConfig,
  Log,
} from '@sillsdev/docu-notion';

import {
  correctNotionUrlsInMermaid,
} from './src/custom-docu-notion-plugins/correctNotionUrlsInMermaid';
import {
  modifiedStandardInternalLinkConversion,
} from './src/custom-docu-notion-plugins/modifiedInternalLinks';
import {
  notionColumnsUpgraded,
} from './src/custom-docu-notion-plugins/notionColumnsUpgraded';

Log.setLogLevel("verbose");


const config: IDocuNotionConfig = {
  plugins: [
    notionColumnsUpgraded,
    correctNotionUrlsInMermaid(),
    modifiedStandardInternalLinkConversion,
  ],
};
export default config;
