export class DataMain {
    async fetchGet(url: string) {
        const result = await fetch(url);

        return result;
    }

    fetchGetData = async (url: string) => {
        const result = await fetch(url);
        const data = await result.json();

        return data;
    };
}
