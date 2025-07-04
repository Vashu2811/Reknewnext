import { metadata as storyMetadata } from './metadata';

export const metadata = {
  ...storyMetadata,
  metadataBase: new URL('https://d3ni7pvekaqu2j.cloudfront.net')
};

export default function OurStoryLayout({ children }) {
  return children;
}
