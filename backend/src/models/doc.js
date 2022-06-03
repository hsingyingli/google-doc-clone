import mongoose from 'mongoose';

const docScheme = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    data: {
      type: String,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: 'users',
    },
  },
  {
    timestamps: true,
  },
);

const docModel = mongoose.model('docs', docScheme, 'docs');
export default docModel;
