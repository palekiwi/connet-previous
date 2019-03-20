import * as React from "react";
import GatsbyImage, { GatsbyImageProps } from "gatsby-image";

interface ImgProps extends GatsbyImageProps {
  fixed?: any;
  fluid?: any;
  className?: string;
  imgStyle?: object;
  objFit?: string;
  objPosition?: string;
}

const Image: React.SFC<ImgProps> = (
  {
    imgStyle,
    objFit = "cover",
    objPosition = "50% 50%",
    fixed,
    fluid,
    className,
    style,
  },
  ...props
) => {
  return (
    <GatsbyImage
      imgStyle={{
        ...imgStyle,
        objectFit: objFit,
        objectPosition: objPosition,
        fontFamily: `"object-fit: ${objFit}; object-position: ${objPosition}"`,
      }}
      style={style}
      fluid={fluid && fluid.childImageSharp.fluid}
      fixed={fixed && fixed.childImageSharp.fixed}
      className={className}
      {...props}
    />
  );
};

export { Image };
