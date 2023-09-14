import {
  correctNotionUrlsInMermaid,
  modifiedStandardInternalLinkConversion,
  notionColumnsUpgraded,
} from '@metapages/docu-notion-plugins';
import {
  IDocuNotionConfig,
  Log,
} from '@sillsdev/docu-notion';

Log.setLogLevel("verbose");

const config: IDocuNotionConfig = {
  plugins: [
    notionColumnsUpgraded,
    correctNotionUrlsInMermaid(),
    modifiedStandardInternalLinkConversion,
  ],
};
export default config;
