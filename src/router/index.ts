import express from "express";
import pt from "./pt_intekmedical";

const router = express.Router();

/**
 * Main router structure declaration with all used paths of the API.
 */
export default (): express.Router => {
    pt(router);
    return router;
};
