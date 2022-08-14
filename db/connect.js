import mongoose from 'mongoose';

const connectDB = (url) => {
  return mongoose.connect(url);
};
export default connectDB;

// const connectionString =
//   'mongodb+srv://t4158941589:<password>@nodeexpressprojects.rhudwqp.mongodb.net/?retryWrites=true&w=majority';
