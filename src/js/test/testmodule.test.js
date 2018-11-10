import TestModule from "../main/testmodule";

describe("TestModule",()=>{
    it("Constructor Test",()=>{
        const testmodule=new TestModule("name");
        expect(testmodule.name).toBe("name");
    });
});