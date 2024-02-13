const mysql = require('mysql');

const mongoose = require('mongoose');
const Currencies = require('./models/currencies');
const User = require('./models/users');
const Balances = require('./models/balances');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bookie_sb',
})


async function connectToMongoDB() {
  try {
    const connection = await mongoose.connect('mongodb://0.0.0.0:27017/bets');
  } catch (error) {
    throw error;
  }
}


const pageSize = 1000;

let offset = 0;


async function init() {
  // await connectToMongoDB();

  // const currency = await Currencies.findOne({ symbol: "NGN" });

  // const saveToMongoDB = async (data, next) => {
  //   try {
  //     for (var i = 0; i < data.length; i++) {
  //       const record = data[i];
  //       const doc = await User.findOneAndUpdate(
  //         { email: record.email },
  //         getSchema(record),
  //         { upsert: true, new: true, setDefaultsOnInsert: true }
  //       );

  //       if (!doc) {
  //         const newUser = new User(getSchema(record));
  //         const balance = new Balances({
  //           userId: new mongoose.Types.ObjectId(newUser._id),
  //           symbol: "NGN",
  //           status: true,
  //           balance: record.balance,
  //           prev_balance: record.prev_balance,
  //           currency: new mongoose.Types.ObjectId('65c91966bfb92f372bd3a4e5')
  //         });
  //         const u = await newUser.save();
  //         const b = await balance.save();
  //       } else {
  //         const balance = new Balances({
  //           userId: new mongoose.Types.ObjectId(doc._id),
  //           symbol: "NGN",
  //           status: true,
  //           balance: record.balance,
  //           prev_balance: record.prev_balance,
  //           currency: new mongoose.Types.ObjectId('65c91966bfb92f372bd3a4e5')
  //         });
  //         const b = await balance.save();
  //       }
  //     }
  //     next()
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  // const startLoop = () => {
  //   const query = `SELECT sys_users.*,user_wallet.balance,user_wallet.prev_balance FROM sys_users JOIN user_wallet  ON sys_users.id = user_wallet.user_id LIMIT ${pageSize} OFFSET ${offset}`;
  //   pool.query(query, function (error, results, fields) {
  //     if (error) return console.log(error);
  //     if (results.length === 0) {
  //       pool.end();
  //       return;
  //     }
  //     saveToMongoDB(results, function () {
  //       offset += pageSize;
  //       console.log(offset);
  //       startLoop();
  //     });
  //   });
  // }

  // startLoop();

}

async function update() {
  try {
    await connectToMongoDB();
    const checkData = [
      new mongoose.Types.ObjectId("65c985d068b623ab43f6bd78"),
      new mongoose.Types.ObjectId("65c9861468b623ab43f6bd79"),
      new mongoose.Types.ObjectId("65c9863468b623ab43f6bd7a"),
      new mongoose.Types.ObjectId("65c9864768b623ab43f6bd7b")
    ];

    await User.updateMany({ role: { $in: checkData } }, { $set: { permissionId: new mongoose.Types.ObjectId('6155e4b10d8c0216907c561b') } })
    await User.updateMany(
      { role: { $nin: checkData } },
      {
        $set: {
          role: new mongoose.Types.ObjectId('65cb74a0bc705c013645799b'),
          permissionId: new mongoose.Types.ObjectId('6154bd9edf888916bc1ff0b0')
        }
      })
    console.log("updated")
  } catch (error) {
    console.log(error)
  }
}


const getSchema = (record) => {
  return {
    email: record.email,
    emailverify: false,
    password: record.password,
    username: record.username,
    firstname: record.firstname,
    lastname: record.lastname,
    permissionId: new mongoose.Types.ObjectId('6154bd9edf888916bc1ff0b0'),
    role: getRoleId(record.role),
    mobile: record.phone_1,
    ip: record.ip,
    country: record.country,
    rReferral: record.reference,
    status: record.status == 1 ? true : false
  }
}

const getRoleId = (title) => {
  if ("network_manager" == title)
    return new mongoose.Types.ObjectId("65c985d068b623ab43f6bd78");
  if ("shop_administrator" == title)
    return new mongoose.Types.ObjectId("65c9861468b623ab43f6bd79");
  if ("controller" == title)
    return new mongoose.Types.ObjectId("65c9863468b623ab43f6bd7a");
  if ("cashier" == title)
    return new mongoose.Types.ObjectId("65c9864768b623ab43f6bd7b");
  return new mongoose.Types.ObjectId('65cb74a0bc705c013645799b');
}

init();

update();

