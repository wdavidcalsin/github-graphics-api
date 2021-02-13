export class DataMain {
    fetchGet = async (url: string) => {
        const result = await fetch(url);

        return result;
    };

    fetchGetData = async <T>(url: string) => {
        const result = await fetch(url);
        const data: T = await result.json();

        return data;
    };
}
