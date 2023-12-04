import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
    // } catch (e: any) { // can use any because pretty sure error will be error, but not ideal
    //   return e.message;
    // }

    // } catch (e) {
    //   return (e as Error).message; // better than previous but not
    // }
    
  } catch (e) {
    if (e instanceof Error) { // check at runtime what the type of e is, not casting
      return e.message;
    }
  }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
