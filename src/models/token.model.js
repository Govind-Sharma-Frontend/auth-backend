const mongoose = require("mongoose");

const ModelConstants = Object.freeze({
  STATUS_ACTIVE: true,
  STATUS_INACTIVE: false,
  TOKEN_TYPE: ["refresh", "reset_password", "verify_email"],
  DEFAULT_FILE_TYPE: "",
});

const tokenSchema = mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
      index: true,
    },
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
      required: true,
    },
    // device: {
    //   type: mongoose.SchemaTypes.ObjectId,
    //   ref: schemaNames.USER_DEVICES,
    //   required: false,
    //   default: null,
    // },
    type: {
      type: String,
      enum: ModelConstants.TOKEN_TYPE,
      required: true,
    },
    expires: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Token = mongoose.model("Token", tokenSchema);

module.exports = Token;
