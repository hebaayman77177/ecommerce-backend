"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */
const toPopulate = [
  "products.sizes",
  "products.product_colors",
  "products.product_colors.color",
  "products.product_colors.image",
  "facets",
  "products.thumbnail",
  "sort_options",
  "products.product_statuses",
];
module.exports = {
  /**
   * Promise to fetch all records
   *
   * @return {Promise}
   */
  find(params, populate) {
    return strapi.query("category").find(params, toPopulate);
  },
  findOne(params, populate) {
    return strapi.query("category").findOne(params, toPopulate);
  },
};
