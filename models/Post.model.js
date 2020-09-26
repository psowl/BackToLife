const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const PostSchema = Schema({
  title: String,
  creatorId: {type: Schema.Types.ObjectId, ref: 'User'},
  description: String,
  picURL: String,
  pointsEstimate: String,
  city: String,
  categories: { type: String, enum: ['dressing', 'books/cds', 'services', 'beauty', 'IT'] },
  type: { type: String, enum: ['good', 'service'] },
},
{
  timestamps: true
}
);

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;