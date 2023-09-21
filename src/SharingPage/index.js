import React from "react";
import { Helmet } from "react-helmet";

const SharingPage = () => {
  return (
    <div>
      <Helmet>
        {/* Twitter Card meta tags */}
        <meta
          property="og:image"
          content="https://www.cameraegg.org/wp-content/uploads/2016/01/Nikon-D500-Sample-Images-7-600x400.jpg"
        ></meta>
        <meta property="og:image:width" content="640"></meta>
        <meta property="og:image:height" content="144"></meta>
      </Helmet>
      <Helmet>
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
