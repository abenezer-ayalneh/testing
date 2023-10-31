import fetch from "node-fetch";
import {getPeople, getPeoplePromise} from "./script2";

it('calls json placeholder API to fetch users', () => {
    expect.assertions(1)
    return getPeople(fetch).then((len) => {
        expect(len).toEqual(10)
    })
})

it('calls json placeholder API to fetch users with a promise', () => {
    expect.assertions(2)
    return getPeoplePromise(fetch).then((len) => {
        expect(len).toEqual(10)
        expect(len).toEqual(10)
    })
})