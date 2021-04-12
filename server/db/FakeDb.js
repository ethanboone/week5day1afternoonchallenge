import { generateId } from "../utils/GenerateId"

class FakeDb {
    burgers = [{ name: 'Ethan', toppings: 'Everything', id: generateId() }]
}

export const fakeDb = new FakeDb()