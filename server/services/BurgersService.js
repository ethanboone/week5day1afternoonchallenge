import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";
import { fakeDb } from "../db/FakeDb"
import { generateId } from "../utils/GenerateId";

class BurgersService {
  create(burger) {
    burger.id = generateId()
    fakeDb.burgers.push(burger)
    return burger
  }

  delete(id) {
    let value = fakeDb.burgers.find(e => e.id === id)
    if (!value) {
      throw new BadRequest("Invalid Id Casting Failed")
    }
    fakeDb.burgers = fakeDb.burgers.filter(s => s.id !== id)
  }

  find(query = {}) {
    //let burgers = await dbContext.Burgers.find(query);
    return fakeDb.burgers
  }

  async findById(id) {
    let burger = await FakeDb.burgers.find(e => e.id === id);
    if (!burger) {
      throw new BadRequest("Invalid Id");
    }
    return burger;
  }
}

export const burgersService = new BurgersService();