import $api from '@/http'
import getUrlString from '@/helpers/getUrlString'

export default class CharacterService {
    static async getCharacters(queryParams) {
        return $api.get(getUrlString('/character', queryParams))
    }
}