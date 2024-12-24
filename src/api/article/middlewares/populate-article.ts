import type { Core } from "@strapi/strapi";

const populate = {
  populate: {
    cover: {
      fields: ["url", "alternativeText", "name", "width", "height"],
    },
    author: {
      populate: {
        avatar: {
          fields: ["url", "alternativeText", "name", "width", "height"], 
        },
      },
      fields: ["id", "name", "email"], 
    },
    category: {
      fields: ["id", "name"],
    },
    media: {
      populate: {
        fields: ["url", "alternativeText", "name", "width", "height"],
      },
    },
      },
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  console.log("populate-article middleware");
  
  return async (ctx, next) => {
    ctx.query = {
      ...ctx.query,
      ...populate,
    };

    strapi.log.info("In populate-article middleware.");

    await next();
    
     };
};