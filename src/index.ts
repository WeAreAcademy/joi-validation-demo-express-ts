import * as cors from "cors";
import * as express from "express";
import { orderSchema } from "./orderSchema";
import { userSchema } from "./userSchema";
const app = express();

app.use(express.json());
app.use(cors());

app.post("/users", (req, res) => {
    const givenUser = req.body;
    const validationResult = userSchema.validate(givenUser);

    if (validationResult.error) {
        res.json({ error: validationResult.error });
        return;
    }

    const user = validationResult.value;
    res.json({ msg: "created user!", data: user });
});

app.post("/orders", (req, res) => {
    const givenOrder = req.body;
    const validationResult = orderSchema.validate(givenOrder);

    if (validationResult.error) {
        res.json({ error: validationResult.error });
        return;
    }

    const order = validationResult.value;
    res.json({ msg: "created order!", data: order });
});

app.listen(process.env.PORT ?? 4000, () => {
    console.log("listening");
});
