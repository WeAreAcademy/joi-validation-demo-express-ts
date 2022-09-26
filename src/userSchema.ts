import * as Joi from "joi";
//See Joi documentation at https://joi.dev/api

const postcodeRegex = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i;
const zipcodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;

/** a (Joi) schema object against which user objects can be validated. */
const userSchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    postcode: Joi.string().regex(postcodeRegex),
    zipcode: Joi.string().regex(zipcodeRegex),
    phone: Joi.string().regex(/^[0-9\-]+$/i),
    sex: Joi.any().valid("m", "f"),
}).xor("postcode", "zipcode"); //require one or the other of these two, but not both.

const validExample = {
    name: "Grace",
    postcode: "SZ1 2AZ",
    phone: "555-010-203",
    sex: "f",
};
export { userSchema };
