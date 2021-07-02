import { GetUserData as GestUserDataBefore } from "../before";
import { GetUserData as GestUserDataOk } from "../ok";

describe("Test OneLevelIdentationPerMethod", () => {
  test("Before", () => {
    const userData = new GestUserDataBefore();

    expect(userData.getUser(0)).toHaveProperty("name");
    expect(userData.getInfo(0)).toHaveProperty("age");
  });

  test("After", () => {
    const userData = new GestUserDataOk();

    expect(userData.getUser(0)).toHaveProperty("name");
    expect(userData.getInfo(0)).toHaveProperty("age");
  });
});