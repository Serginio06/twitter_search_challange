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
            // verified: {
            //     type: Boolean,
            //     required: true,
            // },
            password: {
                type: String,
                required: true,
            },
            // isOnDispatch: {
            //     type: Boolean,
            //     required: false,
            // },
        }));
    }

    findById(userId) {
        // logger.info(` [findById] attempt to load user by id
        //     \nuserId: ${stringify(userId)}`);

        return this._model.findOne({_id: userId}, this._fields);
    }

    findByEmail(email) {
        // logger.info(` [findByEmail] attempt to load user by email
        //     \nemail: ${stringify(email)}`);

        return this._model.findOne({email}, this._fields);
    }

    // findByVerifiedEmail(email) {
    //     logger.info(` [findByVerifiedEmail] attempt to load user by verified email
    //         \nemail: ${stringify(email)}`);
    //
    //     return this._model.findOne({email, verified: true}, this._fields);
    // }

    // findByFacebookId(facebookId) {
    //     logger.info(`[findByFacebookId] attempt to load user by facebookId
    //         \nfacebookId: ${stringify(facebookId)}`);
    //
    //     return this._model.findOne({facebookId}, this._fields);
    // }

    findByEmailAndPassword(email, password) {
        // logger.info(` [findByEmailAndPassword] attempt to load user by email and password
        //     \nemail: ${stringify(email)}
        //     \npassword: ${stringify(password)}`);

        return this._model.findOne({email, password}, this._fields);
    }

    deleteById(userId) {
        // logger.info(` [deleteById] attempt to delete user by id
        //     \nuserId: ${stringify(userId)}`);

        return this._model.deleteOne({_id: userId});
    }

    newUser(user) {
        // logger.info(` [newUser] attempt to create user
        //     \nuser: ${stringify(user)}`);

        // console.log("new user=",user);

        return this._model.create(user);

            // .then((user) => {
            //
            //     logger.info(` [newUser] created
            // \nuser: ${stringify(user)}`);
            //
            //     console.log("newUser created=",user);
            //
            //     return user;
            //     // if (user.email) {d
            //     //     return this.findByEmail(user.email);
            //     // }
            //     // return this.findByFacebookId(user.facebookId);
            // });
    }

    // verify(userId) {
    //     logger.info(` [verify] attempt to verify user by id
    //         \nuserId: ${stringify(userId)}`);
    //
    //     return this._model.update({_id: userId}, {$set: {verified: true}});
    // }
    //
    // updatePassword(userId, password) {
    //     logger.info(`[updatePassword] attempt to update user's password by id
    //         \nuserId: ${stringify(userId)}
    //         \npassword: ${stringify(password)}`);
    //
    //     return this._model.update({_id: userId}, {$set: {password}});
    // }
}
