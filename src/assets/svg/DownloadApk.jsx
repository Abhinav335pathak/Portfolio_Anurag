import React from "react";
import SvgResizer from 'react-svg-resizer';

function DownloadApk() {
  return (
    <SvgResizer size={20}>
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
      <path d="M13 0h6v14h5c-.505 4.379-3.178 6.817-6 10-2.647-.151-4.443-.5-6.445-2.297C8 17.6 8 17.6 8 14h5V0z"></path>
      <path d="M1 22h4v6h22v-6h4v10H1V22z"></path>
    </svg>
    </SvgResizer>
  );
}

export default DownloadApk;

