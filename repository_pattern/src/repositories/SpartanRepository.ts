import BaseRepository from './base/BaseRepository';
import Spartan from '../entities/Spartan';

class SpartanRepository extends BaseRepository<Spartan> {
    countOfSpartans(): Promise<number> {
        return this.collection.count({});
    }
}

export default SpartanRepository;