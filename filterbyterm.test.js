// const { expect } = require('@jest/globals')
// const { describe } = require('yargs')
const filterByTerm = require('./filterbyterm')

describe("Fungsi filter", () => {
    test("Fungsi ini Harus memfilter berdasarkan kata kunci pencarian (mis. link)", () => {
        const input = [
            {id:1, url:"https://www.url1.dev"},
            {id:2, url:"https://www.url2.dev"},
            {id:3, url:"https://www.link.dev"}
        ];

        const output = [{id:3, url:"https://www.link.dev"}];

        expect(filterByTerm(input, "link")).toEqual(output);
    });
});