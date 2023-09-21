import React from "react";
import { Helmet } from "react-helmet";

const SharingPage = () => {
  return (
    <div>
      <Helmet>
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Check awesome content" />
        <meta
          name="twitter:description"
          content="It is the only one awesome content"
        />
        <meta
          name="twitter:image"
          content="https://www.cameraegg.org/wp-content/uploads/2016/01/Nikon-D500-Sample-Images-7-600x400.jpg"
        />
      </Helmet>
      {/* Your component content */}

      <img
        src="https://www.cameraegg.org/wp-content/uploads/2016/01/Nikon-D500-Sample-Images-7-600x400.jpg"
        alt="bandar"
      />
    </div>
  );
};

export default SharingPage;
