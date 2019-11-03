import { getAirports } from "./fetchData";

describe("api test", () => {
    test("fetching data return not null", async () => {
        const res = await getAirports();
        expect(res.data).not.toBeNull();
    });

    test("fetching data return array ", async () => {
        const res = await getAirports();
        expect(res.data).toBeInstanceOf(Array);
    });
    test.skip("fetching data return 404 when Api is wrong", async () => {
        expect.assertions(1);
        try {
            await getAirports();
        } catch (e) {
            expect(e.toString().indexOf("404") > -1).toBe(true);
        }
    });
});
