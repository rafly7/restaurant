const connection = require('./db.connect');

const Kuliner = require('../src/models/kuliner.model');
const Komentar = require('../src/models/komentar.model');
const UserProfile = require('../src/models/user.profile.model');
const Permission = require('../src/models/user.permission.model')
const Category = require('../src/models/category.model')
const Makanan = require('../src/models/makanan.model')
const dbassoc = require('../src/models/index');

let bcrypt = require('bcryptjs');

(async () => {
    dbassoc();
    await connection.sync({force: true})
    let category01 = await Category.create({
        category_name: 'Main Course'
    })
    let category02 = await Category.create({
        category_name: 'Desert'
    })
    let kuliner01 = await Kuliner.create({
        nama_tempat:'Pizza Hut',
        lokasi: 'Bojong Gede',
        specialist: 'Italian',
        range: '30000-150000',
        menu: 'pizza ayam,pizza seafood,pizza sosis,pizza keju'
    })
    let kuliner02 = await Kuliner.create({
        nama_tempat:'Rumah Makan Ampera',
        lokasi: 'Salabenda',
        specialist: 'Sunda',
        range: '15000-100000',
        menu: 'ayam bakar,ikan mas bakar,lele goreng'
    })
    let kuliner03 = await Kuliner.create({
        nama_tempat:'Gojira',
        lokasi: 'Bandung',
        specialist: 'Japan',
        range: '20000-200000',
        menu: 'dim sum,mie ramen rebus,sushi'
    })
    let makanan01 = await Makanan.create({
        nama_makanan: 'sushi',
        harga: '100000'
    })
    let makanan02 = await Makanan.create({
        nama_makanan: 'steak',
        harga: '125000'
    })

    makanan01.setCategory(category01)
    makanan02.setCategory(category01)


    let koment01 = await Komentar.create({
        user_name: 'Rafly123',
        nama_tempat: 'Gojira',
        status_like: 1,
        review: 'Satenya enak cuma terlalu sedikit porsinya'
    })
    let salt = await bcrypt.genSalt(10)
    let passwordHash = await bcrypt.hash('123456', salt);
    let userProfile01 = await UserProfile.create({
        user_name: 'rafly123',
        email: 'rafly@gmail.com',
        password: passwordHash,
        full_name: 'RaflyDipoeA'
    })

    let userPermis01 = await Permission.create({
        level: 1,
        permission: 'admin'
    })
    userProfile01.setUserPermission(userPermis01)
})();