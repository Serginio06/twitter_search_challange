import mongoose from "mongoose";
import {AbstractModel} from "./AbstractModel";
import {getLoggerForFile, stringify} from "../util/loggerUtil";

const logger = getLoggerForFile(__filename);

export class UserModel extends AbstractModel {
    constructor(dbInstance) {
        super(dbInstance);

        this._fields = "_id email password";
        // this._fields = "_id email verified password isOnDispatch";
        this._model = this._dbInstance.model("user", new mongoose.Schema({
            // name: {
            //     type: String,
            //     required: true,
            // },
            // facebookId: {
            //     type: Number,
            //     required: false,
            // },
            email: {
                type: String,
                required: true,
            },

            password: {
                type: String,
                required: true,
            },

        }));
    }

    findById(userId) {
        this._model.findOne({_id: userId}, this._fields);
    }

    findByEmail(email) {
        return this._model.findOne({email}, this._fields);
    }

    findByEmailAndPassword(email, password) {
        return this._model.findOne({email, password}, this._fields);
    }

    deleteById(userId) {
        return this._model.deleteOne({_id: userId});
    }

    newUser(user) {
        return this._model.create(user);
    }

    verify(userId) {
        return this._model.update({_id: userId}, {$set: {verified: true}});
    }

    updatePassword(userId, password) {
        return this._model.update({_id: userId}, {$set: {password}});
    }
}
