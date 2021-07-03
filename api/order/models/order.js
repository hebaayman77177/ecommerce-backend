module.exports = {
  lifecycles: {
    // Called before an entry is created
    async beforeCreate(data) {
      console.log("🚀 ~ file: order.js ~ line 5 ~ beforeCreate ~ data", data);
      const orderItems = [];
      for (let i = 0; i < data.order_items.length; i += 1) {
        let entity = await strapi.services["order-item"].create(
          data.order_items[i]
        );
        console.log(
          "🚀 ~ file: order.js ~ line 8 ~ data.orderItems.map ~ entity",
          entity
        );
        orderItems.push(entity.id);
      }
      data.order_items = orderItems;
      console.log("🚀 ~ file: order.js ~ line 15 ~ beforeCreate ~ data", data);
    },
    // Called after an entry is created
    afterCreate(result) {},
  },
};
