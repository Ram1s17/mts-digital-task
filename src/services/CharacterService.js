import $api from '@/http'

export default class CharacterService {
    static async getCharacters(){
        return $api.get('/character')
    }
}