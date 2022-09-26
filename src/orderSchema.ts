import * as Joi from "joi";
//See Joi documentation at https://joi.dev/api

/** a (Joi) schema object against which (fictional) pizza objects can be validated. */
const orderSchema = Joi.object({
    userId: Joi.string().alphanum().min(3).max(30).required(),
    speed: Joi.any().valid("zippy", "regular", "economy").required(),
    crust: Joi.any().valid("thin", "stuffed"),
    toppings: Joi.array().items(Joi.string().min(3).max(25)).required(),
});

const validExample = {
    userId: "1234",
    toppings: ["mozzarella", "gorgonzola", "salami"],
    speed: "zippy",
    crust: "thin",
};

export { orderSchema };
