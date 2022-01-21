import React from "react";
import CollectionItem from "../collection-item/Collection-item.component";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...OtherItemProps }) => {
            return <CollectionItem key={id} {...OtherItemProps} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
