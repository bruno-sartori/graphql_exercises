import { MongoClient } from 'mongodb';

import SpartanRepository from './repositories/SpartanRepository';
import Spartan from './entities/Spartan';

import HeroRepository from './repositories/HeroRepository';
import Hero from './entities/Hero';

(async () => {
    const connection = await MongoClient.connect('mongodb://localhost');
    const db = connection.db('warriors');

    // creating a spartan
    const spartan = new Spartan('Leonidas', 300);
    const spartanRepo = new SpartanRepository(db, 'spartans');

    // call create method from generic repository
    const spartanResult = await spartanRepo.create(spartan);
    console.log(`spartan inserted with ${spartanResult ? 'success': 'fail'}`);

    // call specific method from SpartanRepository class
    const count = await spartanRepo.countOfSpartans();
    console.log(`the count of spartans is ${count}`);


    const hero = new Hero('Dr. Strange', 9999999999);
    const heroRepo = new HeroRepository(db, 'heroes');

    const heroResult = await heroRepo.create(hero);
    console.log(`Hero inserted with ${heroResult ? 'success' : 'fail'}`);

})();