import { ProductDetails } from "@saleor/sdk/lib/fragments/gqlTypes/ProductDetails";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Media from "react-media";
import { generatePath } from "react-router";

import { ProductDescription } from "@components/molecules";
import { ProductGallery } from "@components/organisms";
import AddToCartSection from "@components/organisms/AddToCartSection";
import { paths } from "@paths";
import { getSaleorApi } from "@utils/ssr";

import {
  Breadcrumbs,
  OverlayContext,
  OverlayTheme,
  OverlayType,
} from "../../components";
import { structuredData } from "../../core/SEO/Product/structuredData";
import GalleryCarousel from "./GalleryCarousel";
import OtherProducts from "./Other";
import { IProps } from "./types";

import { smallScreen } from "../../globalStyles/scss/variables.scss";

const populateBreadcrumbs = (product: ProductDetails) => [
  {
    link: generatePath(paths.category, { slug: product.category.slug }),
    value: product.category.name,
  },
  {
    link: generatePath(paths.product, { slug: product.slug }),
    value: product.name,
  },
];

const Page: React.FC<
  IProps & {
    queryAttributes: Record<string, string>;
    onAttributeChangeHandler: (slug: string | null, value: string) => void;
  }
> = ({ add, product, items, queryAttributes, onAttributeChangeHandler }) => {
  const overlayContext = React.useContext(OverlayContext);

  const productGallery: React.RefObject<HTMLDivElement> = React.useRef();

  const [variantId, setVariantId] = React.useState("");

  const getImages = () => {
    if (product.variants && variantId) {
      const variant = product.variants.find(
        variant => variant.id === variantId
      );

      if (variant?.images.length > 0) {
        return variant.images;
      }
    }

    return product.images;
  };

  const handleAddToCart = (variantId, quantity) => {
    add(variantId, quantity);
    overlayContext.show(OverlayType.cart, OverlayTheme.right);
  };

  const [productNewData, setProductNewData] = useState(product);
  // useEffect(() => {
  const refreshData = () => {
    // async function getNewData() {
    //   const { api } = await getSaleorApi();
    //   await api.categories
    //     .getAncestors({ first: 5, id: "Q2F0ZWdvcnk6MTQ2" })
    //     .then(({ data }) => console.log(data));
    // console.log(data);
    // return data;
    // }
    // getNewData();
    // getNewData().then(data => {
    //   setProductNewData(data);
    //   console.log(data.pricing);
    // });
    fetch("http://localhost:8000/graphql", {
      method: "POST",
      body: JSON.stringify({
        query: `query product(id: $id, channel: $channel) {
      ...BasicProductFields
      ...ProductPricingField
      description
      category {
        id
        name
        products(first: 3, channel: $channel) {
          edges {
            node {
              ...BasicProductFields
              ...ProductPricingField
            }
          }
        }
      }
      images {
        id
        alt
        url
      }
      attributes {
        ...SelectedAttributeFields
      }
      variants {
        ...ProductVariantFields
      }
      seoDescription
      seoTitle
      isAvailable
      isAvailableForPurchase
      availableForPurchase
    }`,
        variables: {
          id: product.id,
          channel: "allegro",
        },
      }),
      headers: {
        "content-type": "application/json",
      },
      credentials: "same-origin",
    });
  };
  // }, []);

  const addToCartSection = (
    <AddToCartSection
      items={items}
      productId={product.id}
      name={product.name}
      productVariants={product.variants}
      productPricing={product.pricing}
      queryAttributes={queryAttributes}
      setVariantId={setVariantId}
      variantId={variantId}
      onAddToCart={handleAddToCart}
      onAttributeChangeHandler={onAttributeChangeHandler}
      isAvailableForPurchase={product.isAvailableForPurchase}
      availableForPurchase={product.availableForPurchase}
    />
  );
  // if (!productNewData) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div className="product-page">
      <div className="container">
        <Breadcrumbs breadcrumbs={populateBreadcrumbs(product)} />
      </div>
      <div className="container">
        <div className="product-page__product">
          <div>test </div>
          <button onClick={refreshData}>get new data</button>
          <AddToCartSection
            items={items}
            productId={product.id}
            name={product.name}
            productVariants={product.variants}
            productPricing={productNewData.pricing}
            queryAttributes={queryAttributes}
            setVariantId={setVariantId}
            variantId={variantId}
            onAddToCart={handleAddToCart}
            onAttributeChangeHandler={onAttributeChangeHandler}
            isAvailableForPurchase={product.isAvailableForPurchase}
            availableForPurchase={product.availableForPurchase}
          />
          <script className="structured-data-list" type="application/ld+json">
            {structuredData(product)}
          </script>
          <Media query={{ maxWidth: smallScreen }}>
            {matches =>
              matches ? (
                <>
                  <GalleryCarousel images={getImages()} />
                  <div className="product-page__product__info">
                    {addToCartSection}
                  </div>
                </>
              ) : (
                <>
                  <div
                    className="product-page__product__gallery"
                    ref={productGallery}
                  >
                    <ProductGallery images={getImages()} />
                  </div>
                  <div className="product-page__product__info">
                    <div
                      className={classNames(
                        "product-page__product__info--fixed"
                      )}
                    >
                      {addToCartSection}
                    </div>
                  </div>
                </>
              )
            }
          </Media>
        </div>
      </div>
      <div className="container">
        <div className="product-page__product__description">
          <ProductDescription
            description={product.description}
            attributes={product.attributes}
          />
        </div>
      </div>
      <OtherProducts products={product.category.products.edges} />
    </div>
  );
};

export default Page;
