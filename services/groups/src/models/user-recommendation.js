const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { ApiError } = require('../configurations/error');

mongoose.connect('mongodb://db/Curb', { useNewUrlParser: true });

const userRecommendationSchema = mongoose.Schema(
  {
    name: String,
    groupIds: { type: [String] }
  },
  // will generate automaticly createdAt & updateAt
  { timestamps: true }
);
/* eslint-disable no-param-reassign */
function transform(doc, ret) {
  ret.id = ret._id;
  delete ret._id;
  return ret;
}
/* eslint-enable no-param-reassign */
mongoose.set('toJSON', { versionKey: false, transform });
mongoose.set('toObject', { versionKey: false, transform });

userRecommendationSchema.plugin(uniqueValidator, {
  message: 'USER_RECOMMENDATION_DUPLICATE_{PATH}'
});

// eslint-disable-next-line
userRecommendationSchema.methods.getPublicFields = function() {
  const { __v, _id, ...publicRecommendation } = this.toObject();
  return { id: _id, ...publicRecommendation };
};

userRecommendationSchema.post('save', async (error, doc, next) => {
  // console.log('MONGO ERROR:', error);
  if (error.name === 'MongoError' && error.code === 11000) {
    console.log(error);
    return next(new ApiError('USER_RECOMMENDATION_DUPLICATE'));
  }
  if (error.errors[Object.keys(error.errors)[0]]) {
    return next(new ApiError(error.errors[Object.keys(error.errors)[0]].message.toUpperCase()));
  }
  return next(error);
});

module.exports = mongoose.model('userRecommendations', userRecommendationSchema);
